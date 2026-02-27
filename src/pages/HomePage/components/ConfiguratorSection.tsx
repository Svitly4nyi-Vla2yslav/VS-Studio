import Configurator from './Configurator';
import { ConfiguratorSectionScope } from './styles/ConfiguratorSection.styles';

const ConfiguratorSection: React.FC = () => (
  <ConfiguratorSectionScope>
    <section className='section configurator'>
      <div className='section-header'>
        <h2>{'\u041e\u0444\u0435\u0440-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440'}</h2>
        <p className='section-description'>
          {
            '\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043f\u0440\u043e\u0454\u043a\u0442\u0443 \u0442\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0439\u0442\u0435 \u043e\u0440\u0456\u0454\u043d\u0442\u043e\u0432\u043d\u0443 \u0446\u0456\u043d\u0443 \u0437\u0430\u043f\u0443\u0441\u043a\u0443, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0442\u0430\u0440\u0438\u0444\u0438 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0438 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0456\u0437\u043d\u0435\u0441\u0443.'
          }
        </p>
      </div>
      <Configurator />
    </section>
  </ConfiguratorSectionScope>
);

export default ConfiguratorSection;
