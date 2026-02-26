import Configurator from './Configurator';
import { ConfiguratorSectionScope } from './styles/ConfiguratorSection.styles';

const ConfiguratorSection: React.FC = () => (
  <ConfiguratorSectionScope>
    <section className='section configurator'>
      <h2>Офер-конструктор</h2>
      <Configurator />
    </section>
  </ConfiguratorSectionScope>
);

export default ConfiguratorSection;
