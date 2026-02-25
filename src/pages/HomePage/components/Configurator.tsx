import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Segmented from './Segmented';
import { segmentData } from './homePageData';

const Configurator: React.FC = () => {
  const [goal, setGoal] = useState('leads');
  const [integration, setIntegration] = useState('booking');
  const [ads, setAds] = useState('none');
  const [term, setTerm] = useState('7-14');
  const [content, setContent] = useState('has');
  const [languages, setLanguages] = useState('basic');
  const [pages, setPages] = useState('one');
  const [seo, setSeo] = useState('base');

  const offer = useMemo(() => {
    const businessSignals =
      languages === 'multi' ||
      pages === 'multi' ||
      seo === 'extended' ||
      ads !== 'none' ||
      integration === 'crm' ||
      integration === 'payments';

    const pack = businessSignals ? 'Business' : 'Starter';
    const bullets = [
      'Прототип + структура під заявки',
      `Фокус: ${goal === 'leads' ? 'заявки' : goal === 'calls' ? 'дзвінки' : 'онлайн-запис'}`,
      'Підключення GA4 та відстеження форм/подій',
      `Термін запуску: ${term} днів`,
      content === 'copy'
        ? 'Допомога з текстами і оффером'
        : 'Працюємо з вашими готовими текстами',
    ];
    return { pack, bullets, cta: '/preise' };
  }, [ads, content, goal, integration, languages, pages, seo, term]);

  return (
    <div className='card configurator-card'>
      <Segmented label='Ціль' value={goal} options={segmentData.goal} onChange={setGoal} />
      <Segmented
        label='Інтеграції'
        value={integration}
        options={segmentData.integrations}
        onChange={setIntegration}
      />
      <Segmented label='Реклама' value={ads} options={segmentData.ads} onChange={setAds} />
      <Segmented label='Термін' value={term} options={segmentData.term} onChange={setTerm} />
      <Segmented
        label='Рівень контенту'
        value={content}
        options={segmentData.content}
        onChange={setContent}
      />
      <Segmented
        label='Мови'
        value={languages}
        options={segmentData.languages}
        onChange={setLanguages}
      />
      <Segmented
        label='Сторінки'
        value={pages}
        options={segmentData.pages}
        onChange={setPages}
      />
      <Segmented label='SEO' value={seo} options={segmentData.seo} onChange={setSeo} />

      <div className='offer'>
        <div className='offer-title'>
          Рекомендовано: <strong>{offer.pack}</strong>
        </div>
        <ul className='offer-list'>
          {offer.bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <NavLink to={offer.cta} className='btn btn-primary'>
          Отримати ціну
        </NavLink>
      </div>
    </div>
  );
};

export default Configurator;
