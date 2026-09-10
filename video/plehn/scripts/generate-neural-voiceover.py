import argparse
import asyncio
import subprocess
import tempfile
from pathlib import Path

import edge_tts

VOICE = "de-DE-SeraphinaMultilingualNeural"
SECTIONS = [
    ("Diese Bewerbung ist selbst ein kleines Projekt. Ich wollte nicht einfach nur aufzählen, mit welchen Technologien ich arbeite. Deshalb habe ich Design, Entwicklung und KI direkt miteinander verbunden.", "-3%", 0.58),
    ("Der Bewerbungsassistent zeigt, wie ich KI ganz konkret einsetze. Er beantwortet Fragen zu meinen Projekten, zu meiner Arbeitsweise – und auch zu den Bereichen, in denen ich mich noch weiterentwickle.", "-1%", 0.64),
    ("Bei meinen Projekten wollte ich nicht nur erzählen, was ich gemacht habe. Deshalb sehen Sie hier echte Arbeiten: VS Web Studio, AirTexno und SABSUS.", "+0%", 0.55),
    ("Mein Workflow beginnt nicht direkt beim Code. Zuerst kommt das Ziel. Dann die Recherche. Danach der visuelle Entwurf. Und erst dann die technische Umsetzung.", "-4%", 0.67),
    ("Auch dieses Video gehört zu diesem Workflow. Die Szenen wurden nicht mit einem klassischen KI-Videogenerator erzeugt. Sie sind mit React, TypeScript und Remotion aufgebaut.", "-1%", 0.59),
    ("Codex und KI helfen mir, Ideen schneller zu testen und verschiedene Lösungen auszuprobieren. Die Entscheidung über das Ergebnis bleibt trotzdem bei mir.", "+0%", 0.66),
    ("Wenn dieser Ansatz zu plehn media passt, freue ich mich auf ein persönliches Gespräch.", "-3%", 0.0),
]


async def synthesize(directory: Path) -> list[Path]:
    outputs = []
    for index, (text, rate, _) in enumerate(SECTIONS):
        output = directory / f"section-{index:02d}.mp3"
        await edge_tts.Communicate(text, VOICE, rate=rate, volume="+0%", pitch="+0Hz").save(str(output))
        outputs.append(output)
    return outputs


def run() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ffmpeg", required=True)
    parser.add_argument("--output", default="public/audio/plehn-voiceover-neural.wav")
    args = parser.parse_args()
    output = Path(args.output).resolve()
    output.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory(prefix="plehn-neural-") as temp:
        directory = Path(temp)
        sections = asyncio.run(synthesize(directory))
        inputs: list[str] = []
        labels: list[str] = []
        input_index = 0
        for index, section in enumerate(sections):
            inputs += ["-i", str(section)]
            labels.append(f"[{input_index}:a]")
            input_index += 1
            pause = SECTIONS[index][2]
            if pause:
                inputs += ["-f", "lavfi", "-t", str(pause), "-i", "anullsrc=r=24000:cl=mono"]
                labels.append(f"[{input_index}:a]")
                input_index += 1

        filter_complex = "".join(labels) + f"concat=n={len(labels)}:v=0:a=1,loudnorm=I=-17:LRA=7:TP=-1.5,aresample=48000[out]"
        command = [args.ffmpeg, "-hide_banner", "-y", *inputs, "-filter_complex", filter_complex, "-map", "[out]", "-c:a", "pcm_s24le", str(output)]
        subprocess.run(command, check=True)

    print(f"Neural narration generated with {VOICE}: {output}")


if __name__ == "__main__":
    run()
