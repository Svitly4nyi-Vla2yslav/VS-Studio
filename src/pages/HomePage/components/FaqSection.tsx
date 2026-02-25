import { useTranslation } from 'react-i18next';
import TerminalType from '../../../components/Motion/TerminalType';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='faq' className='section'>
      <h2>
        <TerminalType text={t('home.faqTitle')} durationMs={2200} storageKey='faq_title_v2' />
      </h2>
      <div className='faq'>
        <details>
          <summary>{t('home.faq.q1')}</summary>
          <div className='faq-answer'>
            <p>{t('home.faq.a1')}</p>
          </div>
        </details>
        <details>
          <summary>{t('home.faq.q2')}</summary>
          <div className='faq-answer'>
            <p>{t('home.faq.a2')}</p>
          </div>
        </details>
        <details>
          <summary>{t('home.faq.q3')}</summary>
          <div className='faq-answer'>
            <p>{t('home.faq.a3')}</p>
          </div>
        </details>
        <details>
          <summary>{t('home.faq.q4')}</summary>
          <div className='faq-answer'>
            <p>{t('home.faq.a4')}</p>
          </div>
        </details>
        <details>
          <summary>{t('home.faq.q5')}</summary>
          <div className='faq-answer'>
            <p>{t('home.faq.a5')}</p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default FaqSection;
