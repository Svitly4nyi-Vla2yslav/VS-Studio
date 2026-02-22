import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container footer-row'>
        <div>
          <p>VS Studio · Websites, Web-Apps, Ads & Automationen</p>
          <p className='muted'>kontakt@vs-web-studio.de · +49 30 1234567</p>
        </div>
        <div className='footer-links'>
          <NavLink to='/impressum'>Impressum</NavLink>
          <NavLink to='/datenschutz'>Datenschutz</NavLink>
          <NavLink to='/agb'>AGB</NavLink>
          <NavLink to='/cookies'>Cookies</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
