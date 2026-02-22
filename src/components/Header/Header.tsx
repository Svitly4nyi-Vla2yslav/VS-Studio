import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, backOut } from 'framer-motion';
import { FaCogs, FaEuroSign, FaFolderOpen, FaInfoCircle, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='site-header'>
      <div className='container header-row'>
        <NavLink to='/' className='brand' onClick={() => setIsOpen(false)}>
          <motion.span
            className='brand-wordmark'
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, ease: backOut }}
          >
            {'<VS/>'}
          </motion.span>
        </NavLink>

        <button
          className='menu-toggle'
          type='button'
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-label='Open navigation menu'
        >
          Menu
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to='/services' onClick={() => setIsOpen(false)}><FaCogs /> Services</NavLink>
          <NavLink to='/preise' onClick={() => setIsOpen(false)}><FaEuroSign /> Preise</NavLink>
          <NavLink to='/referenzen' onClick={() => setIsOpen(false)}><FaFolderOpen /> Referenzen</NavLink>
          <NavLink to='/ueber-uns' onClick={() => setIsOpen(false)}><FaInfoCircle /> Über uns</NavLink>
          <NavLink to='/kontakt' onClick={() => setIsOpen(false)}><FaEnvelope /> Kontakt</NavLink>
        </nav>

        <NavLink to='/kontakt' className='cta-fixed'>
          <FaArrowRight /> Projekt anfragen
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
