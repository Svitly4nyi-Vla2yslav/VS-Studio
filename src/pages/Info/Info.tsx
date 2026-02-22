import { FaRobot, FaBullhorn, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const BlogPage: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1><TerminalType text='Blog / Insights' durationMs={2600} storageKey='blog_h1_once' /></h1>
          <p>Artikel zu Website, Leads, SEO, Ads und Automationen.</p>
        </section>

        <section className='section grid-2'>
          <article className='blog-item'><h3><span className='icon-badge'><FaRobot /></span>AI-Workflows im Website Funnel</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaShareAlt /></span>Social-Prozesse ohne Chaos</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaBullhorn /></span>Social Ads mit sauberem Tracking</h3></article>
          <article className='blog-item'><h3><span className='icon-badge'><FaRobot /></span>Automationen für Erstkontakt</h3></article>
        </section>

        <section className='section band'>
          <h2><TerminalType text='Lead Magnet' durationMs={1800} storageKey='blog_leadmagnet_once' /></h2>
          <form className='form-grid' style={{ maxWidth: 420 }}>
            <label className='field-icon'><FaEnvelope /> <input type='email' placeholder='E-Mail für den Guide' required /></label>
            <button className='btn btn-primary' type='submit'><FaEnvelope /> Guide erhalten</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
