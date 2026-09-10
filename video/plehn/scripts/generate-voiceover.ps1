param(
  [string]$VoiceName = 'Microsoft Hedda Desktop'
)

Add-Type -AssemblyName System.Speech

$outputDirectory = Join-Path $PSScriptRoot '..\public\audio'
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$segments = [ordered]@{
  '02-application' = 'Diese Bewerbung ist selbst ein Projekt. Sie verbindet React und TypeScript mit Design, Conversion und einem eigenen KI-Assistenten.'
  '03-assistant' = 'Der Assistent beantwortet Fragen zu Projekten, Arbeitsweise und auch zu Bereichen, in denen ich mich weiterentwickle.'
  '04-projects' = 'Ich wollte nicht nur darüber sprechen, was ich gebaut habe. Deshalb sehen Sie drei reale Projekte: VS Web Studio, AirTexno und SABSUS.'
  '05-workflow' = 'Mein Prozess beginnt nicht beim Code. Ich kläre das Problem, recherchiere, entwickle den visuellen Ansatz in Figma und setze ihn technisch um.'
  '06-code' = 'Auch dieses Video ist ein Beispiel. Szenen und Animationen sind mit React, TypeScript und Remotion programmiert. Codex unterstützt mich bei Umsetzung, Tests und Iteration.'
  '07-final' = 'KI bedeutet für mich nicht, Arbeit abzugeben, sondern schneller zu testen und die Qualität zu verbessern. Wenn dieser Ansatz zu plehn media passt, freue ich mich auf ein persönliches Gespräch.'
}

foreach ($segment in $segments.GetEnumerator()) {
  $synthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $synthesizer.SelectVoice($VoiceName)
  $synthesizer.Rate = 1
  $synthesizer.Volume = 100
  $path = Join-Path $outputDirectory ($segment.Key + '.wav')
  $synthesizer.SetOutputToWaveFile($path)
  $synthesizer.Speak($segment.Value)
  $synthesizer.Dispose()
}

Write-Output "German voiceover generated with $VoiceName."
