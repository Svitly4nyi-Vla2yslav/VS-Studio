import { trustDeliverables } from './homePageData';

const TrustSection: React.FC = () => (
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
);

export default TrustSection;
