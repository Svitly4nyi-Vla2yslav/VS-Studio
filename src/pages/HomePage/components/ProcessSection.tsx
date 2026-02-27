import { useEffect, useRef, useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { processSteps } from './homePageData';
import { ProcessSectionScope } from './styles/ProcessSection.styles';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-step-index') || 0);
            setActiveStep(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <ProcessSectionScope>
      <section className='section sticky-process'>
        <div className='section-header'>
          <h2>{'\u042f\u043a \u043c\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u043c\u043e'}</h2>
          <p className='section-description'>
            {
              '\u041f\u0440\u043e\u0437\u043e\u0440\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441 \u0431\u0435\u0437 \u0437\u0430\u0439\u0432\u0438\u0445 \u0435\u0442\u0430\u043f\u0456\u0432: \u0432\u0456\u0434 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e \u0431\u0440\u0438\u0444\u0443 \u0434\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0430 \u043e\u043f\u0442\u0438\u043c\u0456\u0437\u0430\u0446\u0456\u0457 \u0437 \u0447\u0456\u0442\u043a\u0438\u043c\u0438 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430\u043c\u0438.'
            }
          </p>
        </div>
        <div className='sticky-process-grid'>
          <div className='sticky-steps'>
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`sticky-step ${activeStep === index ? 'active' : ''}`}
                ref={el => {
                  stepRefs.current[index] = el;
                }}
                data-step-index={index}
              >
                <span>{item.step}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <motion.article
            className='sticky-process-card card'
            key={activeStep}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <h3>{processSteps[activeStep].title}</h3>
            <p>{processSteps[activeStep].text}</p>
          </motion.article>
        </div>
      </section>
    </ProcessSectionScope>
  );
};

export default ProcessSection;
