import {
  BackgroundWrapper,
  EnergyShard,
  MagicCircle,
  MangaLines,
  Silhouette,
  SilhouetteBlade,
  SilhouetteCape,
  SilhouetteCore,
  SilhouetteHead,
} from './AnimeBackground.styled';

// silhouettes описує декоративних оригінальних персонажів глобального portfolio-фону.
const silhouettes = [
  { kind: 'warrior', left: 6, top: 18, size: 170 },
  { kind: 'mage', left: 78, top: 14, size: 150 },
  { kind: 'swordsman', left: 84, top: 62, size: 180 },
  { kind: 'spirit', left: 14, top: 70, size: 118 },
  { kind: 'guild', left: 48, top: 42, size: 210 },
] as const;

// shards задає кількість energy shards у фоні.
const shards = Array.from({ length: 28 }, (_, index) => index);
// circles задає кількість magic circles у фоні.
const circles = Array.from({ length: 4 }, (_, index) => index);

// AnimeBackground рендерить глобальний фоновий шар тільки для portfolio page.
export const AnimeBackground: React.FC = () => {
  return (
    <BackgroundWrapper aria-hidden='true'>
      <MangaLines />
      {circles.map(index => (
        <MagicCircle key={`circle-${index}`} $index={index} />
      ))}
      {silhouettes.map(silhouette => (
        <Silhouette
          key={silhouette.kind}
          $left={silhouette.left}
          $top={silhouette.top}
          $size={silhouette.size}
          $kind={silhouette.kind}
        >
          <SilhouetteCape />
          <SilhouetteHead />
          <SilhouetteCore />
          <SilhouetteBlade />
        </Silhouette>
      ))}
      {shards.map(index => (
        <EnergyShard key={`shard-${index}`} $index={index} />
      ))}
    </BackgroundWrapper>
  );
};
