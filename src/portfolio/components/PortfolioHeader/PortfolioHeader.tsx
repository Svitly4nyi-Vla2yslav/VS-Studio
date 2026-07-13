import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../../data/contactInfo';
import { portfolioNavItems } from '../../data/portfolioData';
import {
  BrandBlock,
  HeaderCta,
  HeaderInner,
  HeaderShell,
  LanguageButton,
  LanguageSwitch,
  MobileMenuButton,
  NavLinks,
  RankBadge,
  ScrollProgress,
  ScrollProgressBar,
} from './PortfolioHeader.styled';

// Доступні мови саме для portfolio-перемикача.
const portfolioLanguages = ['de', 'en', 'uk'] as const;

// Header керує sticky navigation, active section state, мовами й mobile menu.
export const PortfolioHeader: React.FC = () => {
  // i18next дає переклади й зміну мови без хардкоду.
  const { t, i18n } = useTranslation();
  // scrolled затемнює glass header після початку скролу.
  const [scrolled, setScrolled] = useState(false);
  // menuOpen відкриває компактне меню на tablet/mobile.
  const [menuOpen, setMenuOpen] = useState(false);
  // activeSection підсвічує пункт навігації для поточної fullscreen-секції.
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // onScroll оновлює стан фону header під час прокрутки.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        setScrolled(window.scrollY > 18);
        setScrollProgress(Math.min(window.scrollY / scrollable, 1));
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    // IntersectionObserver тримає active state меню синхронним із fullscreen-секціями.
    const observer = new IntersectionObserver(
      entries => {
        // visibleEntry бере найбільш видиму секцію з усіх перетинів.
        const visibleEntry = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          // nextActive знаходить nav item, який відповідає id видимої секції.
          const nextActive = portfolioNavItems.find(
            item => item.href === `#${visibleEntry.target.id}`
          );
          if (nextActive) {
            setActiveSection(nextActive.id);
          }
        }
      },
      { rootMargin: '-34% 0px -48% 0px', threshold: [0.18, 0.34, 0.5] }
    );

    portfolioNavItems.forEach(item => {
      // section є DOM-вузлом, за яким спостерігає IntersectionObserver.
      const section = document.querySelector(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // changeLanguage перемикає мову portfolio і закриває mobile menu.
  const changeLanguage = (language: (typeof portfolioLanguages)[number]) => {
    void i18n.changeLanguage(language);
    setMenuOpen(false);
  };

  // currentLanguage потрібна для активного стану DE/EN/UK кнопок.
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <HeaderShell $scrolled={scrolled}>
      <ScrollProgress aria-hidden='true'>
        <ScrollProgressBar style={{ transform: `scaleX(${scrollProgress})` }} />
      </ScrollProgress>
      <HeaderInner>
        <BrandBlock href='#portfolio-top' aria-label={t('portfolio.header.brandAria')}>
          <strong>Vladyslav</strong>
          <span>/ {contactInfo.brandName}</span>
        </BrandBlock>

        <RankBadge>{t('portfolio.header.rank')}</RankBadge>

        <NavLinks $open={menuOpen} aria-label={t('portfolio.header.navigation')}>
          {portfolioNavItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              data-active={activeSection === item.id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </NavLinks>

        <LanguageSwitch aria-label={t('portfolio.header.language')}>
          {portfolioLanguages.map(language => (
            <LanguageButton
              key={language}
              type='button'
              $active={currentLanguage.startsWith(language)}
              onClick={() => changeLanguage(language)}
            >
              {language.toUpperCase()}
            </LanguageButton>
          ))}
        </LanguageSwitch>

        <HeaderCta href={contactInfo.emailHref}>{t('portfolio.header.cta')}</HeaderCta>

        <MobileMenuButton
          type='button'
          aria-label={menuOpen ? t('portfolio.header.closeMenu') : t('portfolio.header.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(value => !value)}
        >
          {menuOpen ? <FaTimes aria-hidden='true' /> : <FaBars aria-hidden='true' />}
        </MobileMenuButton>
      </HeaderInner>
    </HeaderShell>
  );
};
