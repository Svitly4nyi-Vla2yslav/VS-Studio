import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, backOut, easeInOut, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FaCogs, FaEuroSign, FaFolderOpen, FaInfoCircle, FaEnvelope, FaArrowRight, FaTimes } from 'react-icons/fa';
import { useLanguage, type Language } from '../LanguageSwitcher/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { useTranslation } from 'react-i18next';
import {
  BurgerButton,
  BurgerLine,
  BurgerWrap,
  MobileMenuBrand,
  MobileMenuClose,
  MobileMenuDivider,
  MobileMenuLink,
  MobileMenuOverlay,
  MobileMenuTop,
} from './styles/MobileMenu.styles';
import {
  BrandLink,
  BrandWordmark,
  DesktopNav,
  DesktopNavLink,
  FixedCta,
  HeaderControls,
  HeaderInner,
  HeaderRow,
  HeaderShell,
  LangFlag,
  LangItem,
  LangMenu,
  LangSwitch,
  LangTrigger,
} from './styles/Header.styles';

const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};

const menuVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const langRef = useRef<HTMLDivElement | null>(null);

  const languageLabels: Record<Language, string> = {
    de: t('languages.de'),
    uk: t('languages.uk'),
    tr: t('languages.tr'),
    ar: t('languages.ar'),
    pl: t('languages.pl'),
    ku: t('languages.ku'),
    fa: t('languages.fa'),
    it: t('languages.it'),
    es: t('languages.es'),
    el: t('languages.el'),
    ro: t('languages.ro'),
    bg: t('languages.bg'),
  };

  const languageFlags: Record<Language, string> = {
    de: '🇩🇪',
    uk: '🇺🇦',
    tr: '🇹🇷',
    ar: '🇸🇦',
    pl: '🇵🇱',
    ku: '🌐',
    fa: '🇮🇷',
    it: '🇮🇹',
    es: '🇪🇸',
    el: '🇬🇷',
    ro: '🇷🇴',
    bg: '🇧🇬',
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      setIsLangOpen(false);
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <HeaderShell $menuOpen={isOpen}>
      <HeaderInner>
        <HeaderRow>
          <BrandLink to='/' onClick={closeMenu}>
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.82, ease: backOut }}
            >
              <BrandWordmark>{'<VS/>'}</BrandWordmark>
            </motion.div>
          </BrandLink>

          <DesktopNav>
            <DesktopNavLink to='/services'><FaCogs /> {t('header.services')}</DesktopNavLink>
            <DesktopNavLink to='/preise'><FaEuroSign /> {t('header.preise')}</DesktopNavLink>
            <DesktopNavLink to='/referenzen'><FaFolderOpen /> {t('header.referenzen')}</DesktopNavLink>
            <DesktopNavLink to='/ueber-uns'><FaInfoCircle /> {t('header.ueberUns')}</DesktopNavLink>
            <DesktopNavLink to='/kontakt'><FaEnvelope /> {t('header.kontakt')}</DesktopNavLink>
          </DesktopNav>

          <HeaderControls>
            <FixedCta to='/kontakt'>
            <FaArrowRight /> {t('common.projectRequest')}
            </FixedCta>

            {!isOpen ? (
              <LangSwitch ref={langRef}>
                <LangTrigger
                type='button'
                aria-expanded={isLangOpen}
                aria-label='Language switcher'
                onClick={() => setIsLangOpen(prev => !prev)}
              >
                  <LangFlag>{languageFlags[language]}</LangFlag>
                </LangTrigger>
                {isLangOpen ? (
                  <LangMenu>
                  {SUPPORTED_LANGUAGES.map(code => (
                    <LangItem
                      key={code}
                      type='button'
                        $active={language === code}
                      onClick={() => handleLanguageChange(code)}
                    >
                        <LangFlag>{languageFlags[code]}</LangFlag>
                      <span>{languageLabels[code]}</span>
                    </LangItem>
                  ))}
                  </LangMenu>
                ) : null}
              </LangSwitch>
            ) : null}

            <BurgerWrap>
              <BurgerButton onClick={() => setIsOpen(prev => !prev)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
                <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={middleLineVariants} />
                <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={bottomLineVariants} />
              </BurgerButton>
            </BurgerWrap>
          </HeaderControls>
        </HeaderRow>
      </HeaderInner>

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <MobileMenuOverlay
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={menuVariants}
                  transition={{ duration: 0.28, ease: easeInOut }}
                >
                  <MobileMenuTop>
                    <MobileMenuBrand>{'<VS/>'}</MobileMenuBrand>
                    <MobileMenuClose type='button' aria-label='Close menu' onClick={closeMenu}>
                      <FaTimes />
                    </MobileMenuClose>
                  </MobileMenuTop>
                  <MobileMenuLink to='/services' onClick={closeMenu}><FaCogs /> {t('header.services')}</MobileMenuLink>
                  <MobileMenuDivider />
                  <MobileMenuLink to='/preise' onClick={closeMenu}><FaEuroSign /> {t('header.preise')}</MobileMenuLink>
                  <MobileMenuDivider />
                  <MobileMenuLink to='/referenzen' onClick={closeMenu}><FaFolderOpen /> {t('header.referenzen')}</MobileMenuLink>
                  <MobileMenuDivider />
                  <MobileMenuLink to='/ueber-uns' onClick={closeMenu}><FaInfoCircle /> {t('header.ueberUns')}</MobileMenuLink>
                  <MobileMenuDivider />
                  <MobileMenuLink to='/kontakt' onClick={closeMenu}><FaEnvelope /> {t('header.kontakt')}</MobileMenuLink>
                  <MobileMenuDivider />
                  <MobileMenuLink to='/kontakt' onClick={closeMenu}><FaArrowRight /> {t('common.projectRequest')}</MobileMenuLink>
                </MobileMenuOverlay>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </HeaderShell>
  );
};

export default Header;
