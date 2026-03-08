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

const languageLabels: Record<Language, string> = {
  de: 'Deutsch',
  uk: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
  tr: 'T\u00fcrk\u00e7e',
  ar: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
  pl: 'Polski',
  ku: 'Kurmanc\u00ee',
  fa: '\u0641\u0627\u0631\u0633\u06cc',
  it: 'Italiano',
  es: 'Espa\u00f1ol',
  el: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
  ro: 'Rom\u00e2n\u0103',
  bg: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
};

const languageCodes: Record<Language, string> = {
  de: 'DE',
  uk: 'UA',
  tr: 'TR',
  ar: 'SA',
  pl: 'PL',
  ku: 'KU',
  fa: 'IR',
  it: 'IT',
  es: 'ES',
  el: 'GR',
  ro: 'RO',
  bg: 'BG',
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const langRef = useRef<HTMLDivElement | null>(null);

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
                  <LangFlag>{languageCodes[language]}</LangFlag>
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
                        <LangFlag>{languageCodes[code]}</LangFlag>
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
