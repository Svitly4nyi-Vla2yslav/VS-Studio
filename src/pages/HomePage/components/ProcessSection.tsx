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
        <h2>Як ми працюємо</h2>
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
