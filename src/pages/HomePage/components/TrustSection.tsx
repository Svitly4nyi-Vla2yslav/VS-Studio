import { trustDeliverables } from './homePageData';
import { TrustSectionScope } from './styles/TrustSection.styles';

const TrustSection: React.FC = () => (
  <TrustSectionScope>
    <section className='section'>
      <h2>Що ви отримаєте за 14 днів</h2>
      <div className='grid-2 trust-grid'>
        {trustDeliverables.map(item => (
          <article className='card' key={item.title}>
            <h3>{item.title}</h3>
            <p className='muted'>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  </TrustSectionScope>
);

export default TrustSection;
