import { useTranslation } from 'react-i18next';
import TerminalType from '../../../components/Motion/TerminalType';
import { FaqSectionScope } from './styles/FaqSection.styles';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FaqSectionScope>
      <section id='faq' className='section'>
        <div className='section-header'>
          <h2>
            <TerminalType text={t('home.faqTitle')} durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <p className='section-description'>
            {
              '\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u0447\u0430\u0441\u0442\u0456 \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u043f\u0440\u043e \u0441\u0442\u0440\u043e\u043a\u0438, \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c, \u043f\u0440\u043e\u0446\u0435\u0441 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0430 \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u0443 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443 \u043f\u0440\u043e\u0454\u043a\u0442\u0443.'
            }
          </p>
        </div>
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
    </FaqSectionScope>
  );
};

export default FaqSection;
