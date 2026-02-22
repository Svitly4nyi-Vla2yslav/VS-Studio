import { useTranslation } from 'react-i18next';
import { FaRobot, FaBullhorn, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1><TerminalType text={t('blog.h1')} durationMs={2600} storageKey='blog_h1_once' /></h1>
          <p>{t('blog.subtitle')}</p>
        </section>

        <section className='section grid-2'>
          <article className='blog-item'><h3><span className='icon-badge'><FaRobot /></span>{t('blog.cards.c1')}</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaShareAlt /></span>{t('blog.cards.c2')}</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaBullhorn /></span>{t('blog.cards.c3')}</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaRobot /></span>{t('blog.cards.c4')}</h3></article>
        </section>

        <section className='section band'>
          <h2><TerminalType text={t('blog.leadMagnet')} durationMs={1800} storageKey='blog_leadmagnet_once' /></h2>
          <form className='form-grid' style={{ maxWidth: 420 }}>
            <label className='field-icon'><FaEnvelope /> <input type='email' placeholder={t('blog.emailPlaceholder')} required /></label>
            <button className='btn btn-primary' type='submit'><FaEnvelope /> {t('blog.getGuide')}</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
