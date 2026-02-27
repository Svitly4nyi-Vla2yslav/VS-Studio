import { trustDeliverables } from './homePageData';
import { TrustSectionScope } from './styles/TrustSection.styles';

const TrustSection: React.FC = () => (
  <TrustSectionScope>
    <section className='section'>
      <div className='section-header'>
        <h2>{'\u0429\u043e \u0432\u0438 \u043e\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u0435 \u0437\u0430 14 \u0434\u043d\u0456\u0432'}</h2>
        <p className='section-description'>
          {
            '\u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043d\u0430 \u0441\u0442\u0430\u0440\u0442\u0456: \u0433\u043e\u0442\u043e\u0432\u0438\u0439 \u0441\u0430\u0439\u0442 \u043f\u0456\u0434 \u0437\u0430\u044f\u0432\u043a\u0438, \u043d\u0430\u043b\u0430\u0448\u0442\u043e\u0432\u0430\u043d\u0430 \u0430\u043d\u0430\u043b\u0456\u0442\u0438\u043a\u0430 \u0456 \u043f\u043b\u0430\u043d \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u043e\u0441\u0442\u0443.'
          }
        </p>
      </div>
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
