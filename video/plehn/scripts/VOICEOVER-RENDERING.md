# Neural voiceover handoff

The former Windows `System.Speech` generator used `Microsoft Hedda Desktop`. It was intentionally removed because it is a legacy SAPI Desktop voice and fails the quality gate.

Use an already configured neural TTS service or a professionally recorded voice. Preferred Azure Speech voices:

1. `de-DE-SeraphinaMultilingualNeural`
2. `de-DE-KatjaNeural`
3. `de-DE-AmalaNeural`

Generator: `scripts/generate-neural-voiceover.py`  
Output: `public/audio/plehn-voiceover-neural.wav`

Export PCM WAV, 48 kHz, preferably 24-bit. Normalize the finished narration conservatively to approximately -17 LUFS integrated with true peak no higher than -1.5 dBTP. Do not commit API keys and do not add a Desktop/SAPI fallback.

The generator uses Microsoft Edge's online neural service without credentials, renders sections at subtly different rates, inserts irregular pauses, and normalizes the result. The render preflight rejects a missing or non-48 kHz narration file.
