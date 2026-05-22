import {
  CharacterAura,
  CharacterBlade,
  CharacterBody,
  CharacterCape,
  CharacterHead,
  CharacterOrb,
  CharacterRoot,
} from './SectionCharacter.styled';

export type SectionCharacterVariant = 'hero' | 'profile' | 'skills' | 'projects' | 'timeline' | 'network' | 'contact';

interface SectionCharacterProps {
  readonly variant: SectionCharacterVariant;
  readonly label: string;
  readonly assetSrc?: string;
}

// SectionCharacter показує CSS-силует або майбутній прозорий PNG/WebP asset для секції.
export const SectionCharacter: React.FC<SectionCharacterProps> = ({ variant, label, assetSrc }) => {
  return (
    <CharacterRoot $variant={variant} aria-label={label}>
      <CharacterAura aria-hidden='true' />
      {assetSrc ? (
        <img src={assetSrc} alt='' aria-hidden='true' />
      ) : (
        <>
          <CharacterCape aria-hidden='true' />
          <CharacterHead aria-hidden='true' />
          <CharacterBody aria-hidden='true' />
          <CharacterBlade aria-hidden='true' />
          <CharacterOrb aria-hidden='true' />
        </>
      )}
    </CharacterRoot>
  );
};
