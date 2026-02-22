import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaUser, FaBuilding, FaRobot } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import LiveMetric from '../../components/Motion/LiveMetric';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text={t('contact.h1')} durationMs={2200} storageKey='kontakt_h1_once' /></h1>
          <p>{t('contact.responseTime')} <LiveMetric start={58} min={34} max={95} step={1} suffix=' min' /></p>
        </motion.section>

        <section className='section grid-2'>
          <form className='card form-grid contact-form'>
            <label className='field-icon'><FaUser /> <input type='text' placeholder={t('contact.form.name')} required /></label>
            <label className='field-icon'><FaBuilding /> <input type='text' placeholder={t('contact.form.business')} required /></label>
            <label className='field-icon'><FaRobot /> <textarea placeholder={t('contact.form.need')} required /></label>
            <button className='btn btn-primary' type='submit'><FaEnvelope /> {t('contact.form.submit')}</button>
          </form>

          <div className='card'>
            <h3>{t('contact.quickContacts')}</h3>
            <p><a href='mailto:kontakt@vs-web-studio.de'><FaEnvelope /> kontakt@vs-web-studio.de</a></p>
            <p><a href='tel:+49301234567'><FaPhone /> +49 30 1234567</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
