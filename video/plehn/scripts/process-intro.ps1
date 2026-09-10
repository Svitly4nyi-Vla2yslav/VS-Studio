param(
  [Parameter(Mandatory = $true)]
  [string]$InputPath,
  [string]$OutputPath = '',
  [string]$FfmpegPath = 'C:\Users\Vladyslav\AppData\Local\CapCut\Apps\9.3.0.3970\ffmpeg.exe'
)

if ([string]::IsNullOrWhiteSpace($OutputPath)) {
  $OutputPath = Join-Path $PSScriptRoot '..\public\vlad-intro-hq.mp4'
}

$audioFilter = @(
  'highpass=f=75',
  'afftdn=nr=5:nf=-50:tn=1',
  'acompressor=threshold=-24dB:ratio=1.6:attack=20:release=180:makeup=1.15',
  'loudnorm=I=-18:LRA=7:TP=-1.5:measured_I=-26.69:measured_TP=-13.23:measured_LRA=0.80:measured_thresh=-36.95:offset=-0.13:linear=true',
  'aresample=48000'
) -join ','

& $FfmpegPath `
  -hide_banner -y `
  -ss 2.15 -t 12.10 `
  -i $InputPath `
  -map '0:v:0' -map '0:a:0' `
  -c:v copy `
  -af $audioFilter `
  -c:a aac -b:a 128k -ar 48000 `
  -movflags '+faststart' `
  $OutputPath

if ($LASTEXITCODE -ne 0) {
  throw "FFmpeg processing failed with exit code $LASTEXITCODE."
}

Write-Output "Minimally processed intro written to $OutputPath"
