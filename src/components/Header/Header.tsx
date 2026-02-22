import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
} from './MobileMenu.styled';

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
    <header className='site-header'>
      <div className='container header-row'>
        <NavLink to='/' className='brand' onClick={closeMenu}>
          <motion.span
            className='brand-wordmark'
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, ease: backOut }}
          >
            {'<VS/>'}
          </motion.span>
        </NavLink>

        <nav className='nav-desktop'>
          <NavLink to='/services'><FaCogs /> {t('header.services')}</NavLink>
          <NavLink to='/preise'><FaEuroSign /> {t('header.preise')}</NavLink>
          <NavLink to='/referenzen'><FaFolderOpen /> {t('header.referenzen')}</NavLink>
          <NavLink to='/ueber-uns'><FaInfoCircle /> {t('header.ueberUns')}</NavLink>
          <NavLink to='/kontakt'><FaEnvelope /> {t('header.kontakt')}</NavLink>
        </nav>

        <div className='header-controls'>
          <NavLink to='/kontakt' className='cta-fixed'>
            <FaArrowRight /> {t('common.projectRequest')}
          </NavLink>

          {!isOpen ? (
            <div className='lang-switch' ref={langRef}>
              <button
                type='button'
                className='lang-trigger'
                aria-expanded={isLangOpen}
                aria-label='Language switcher'
                onClick={() => setIsLangOpen(prev => !prev)}
              >
                <span className='lang-flag'>{languageFlags[language]}</span>
              </button>
              {isLangOpen ? (
                <div className='lang-menu'>
                  {SUPPORTED_LANGUAGES.map(code => (
                    <button
                      key={code}
                      type='button'
                      className={`lang-item ${language === code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(code)}
                    >
                      <span className='lang-flag'>{languageFlags[code]}</span>
                      <span>{languageLabels[code]}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <BurgerWrap>
            <BurgerButton onClick={() => setIsOpen(prev => !prev)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
              <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
              <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={middleLineVariants} />
              <BurgerLine animate={isOpen ? 'open' : 'closed'} variants={bottomLineVariants} />
            </BurgerButton>
          </BurgerWrap>
        </div>
      </div>

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
    </header>
  );
};

export default Header;
