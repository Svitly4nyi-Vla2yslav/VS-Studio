import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons';
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheck,
  FaClipboardList,
  FaClock,
  FaEnvelopeOpenText,
  FaHeadset,
  FaInbox,
  FaInfoCircle,
  FaMagic,
  FaPhone,
  FaRoute,
  FaSearch,
  FaTasks,
} from 'react-icons/fa';
import {
  AiAssistantSection,
  BenefitChipWrapper,
  BenefitsRow,
  CardHeader,
  ConnectorDot,
  ConnectorLayer,
  ConnectorSegment,
  CtaButton,
  CtaRow,
  FlowGrid,
  FlowMapCanvas,
  FlowNode,
  FlowNodeIcon,
  FlowNodeText,
  FlowNodeStatus,
  GlowParticle,
  HeaderBlock,
  LegalNote,
  SectionInner,
  StepGrid,
  WorkflowCardShell,
} from './AiAssistantWorkflowSection.styled';

// Тип WorkflowIconName зберігає ключ іконки, щоб дані залишались простими, а JSX не дублював React-елементи вручну.
type WorkflowIconName =
  | 'inbox'
  | 'spark'
  | 'phone'
  | 'checklist'
  | 'calendarSearch'
  | 'calendarCheck'
  | 'summary'
  | 'clock'
  | 'route'
  | 'headset'
  | 'task';

// Тип WorkflowStep описує один короткий вузол карти процесу, який клієнт швидко зчитує візуально.
type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  icon: WorkflowIconName;
};

// Тип WorkflowConfig зберігає налаштування однієї карти: назву, короткий опис і послідовність кроків.
type WorkflowConfig = {
  id: string;
  label: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
};

// Тип WorkflowStepState потрібен для стилів вузла: неактивний, активний або завершений.
type WorkflowStepState = 'inactive' | 'active' | 'completed';

// Об'єкт workflowIcons пов'язує текстові ключі з іконками, щоб дані не містили важкої JSX-логіки.
const workflowIcons: Record<WorkflowIconName, IconType> = {
  inbox: FaInbox,
  spark: FaMagic,
  phone: FaPhone,
  checklist: FaClipboardList,
  calendarSearch: FaSearch,
  calendarCheck: FaCalendarCheck,
  summary: FaEnvelopeOpenText,
  clock: FaClock,
  route: FaRoute,
  headset: FaHeadset,
  task: FaTasks,
};

// Масив connectorPoints7 описує чистий змієподібний шлях для карти з сімома кроками.
const connectorPoints7 = [
  '18 18 50 18',
  '50 18 50 42',
  '50 42 18 42',
  '18 42 18 66',
  '18 66 50 66',
  '50 66 50 88',
];

// Масив connectorPoints8 описує чистий змієподібний шлях для карти з вісьмома кроками.
const connectorPoints8 = [
  '18 18 50 18',
  '50 18 50 42',
  '50 42 18 42',
  '18 42 18 66',
  '18 66 50 66',
  '50 66 50 88',
  '50 88 18 88',
];

// Константа websiteWorkflow зберігає лівий сценарій для заявки із сайту або email.
const websiteWorkflow: WorkflowConfig = {
  id: 'website',
  label: 'Website Flow',
  title: 'Website-Anfrage',
  description: 'Formular oder E-Mail wird zu einem klaren nächsten Schritt.',
  steps: [
    {
      id: 'website-request',
      title: 'Anfrage kommt rein',
      description: 'Formular oder E-Mail.',
      icon: 'inbox',
    },
    {
      id: 'website-reaction',
      title: 'AI reagiert',
      description: 'Anfrage wird erkannt.',
      icon: 'spark',
    },
    {
      id: 'website-callback',
      title: 'Rückruf',
      description: 'AI kann Kontakt aufnehmen.',
      icon: 'phone',
    },
    {
      id: 'website-details',
      title: 'Details klären',
      description: 'Problem, Ort, Wunschzeit.',
      icon: 'checklist',
    },
    {
      id: 'website-calendar',
      title: 'Kalender prüfen',
      description: 'Freie Zeiten suchen.',
      icon: 'calendarSearch',
    },
    {
      id: 'website-result',
      title: 'Termin vorbereiten',
      description: 'Nächster Schritt steht.',
      icon: 'calendarCheck',
    },
    {
      id: 'website-summary',
      title: 'Zusammenfassung',
      description: 'Klare Infos für Sie.',
      icon: 'summary',
    },
  ],
};

// Константа missedCallWorkflow зберігає правий сценарій для пропущеного дзвінка.
const missedCallWorkflow: WorkflowConfig = {
  id: 'missed-call',
  label: 'Telefon Flow',
  title: 'Verpasster Anruf',
  description: 'Ein unbeantworteter Anruf wird zu einer geordneten Aufgabe.',
  steps: [
    {
      id: 'call-start',
      title: 'Kunde ruft an',
      description: 'Neuer Anruf kommt rein.',
      icon: 'phone',
    },
    {
      id: 'call-busy',
      title: 'Niemand hebt ab',
      description: 'Team ist beschäftigt.',
      icon: 'clock',
    },
    {
      id: 'call-forward',
      title: 'Weiterleitung',
      description: 'Anruf geht an AI.',
      icon: 'route',
    },
    {
      id: 'call-answer',
      title: 'AI nimmt ab',
      description: 'Kunde wird begrüßt.',
      icon: 'headset',
    },
    {
      id: 'call-details',
      title: 'Anfrage erfassen',
      description: 'Problem und Dringlichkeit.',
      icon: 'checklist',
    },
    {
      id: 'call-slot',
      title: 'Termin finden',
      description: 'Passender Slot gesucht.',
      icon: 'calendarSearch',
    },
    {
      id: 'call-task',
      title: 'Aufgabe erstellen',
      description: 'Rückruf vorbereiten.',
      icon: 'task',
    },
    {
      id: 'call-summary',
      title: 'Zusammenfassung',
      description: 'Alles geordnet sichtbar.',
      icon: 'summary',
    },
  ],
};

// Масив benefits зберігає короткі бізнес-переваги для нижнього компактного рядка.
const benefits = [
  'Weniger verpasste Anfragen',
  'Schnellere Rückrufe',
  'Strukturierte Kundendaten',
  'Weniger Unterbrechungen',
  'Professioneller erster Eindruck',
];

// Функція getStepState визначає візуальний стан вузла відносно активного кроку.
const getStepState = (activeStep: number, stepIndex: number): WorkflowStepState => {
  if (stepIndex === activeStep) {
    return 'active';
  }

  if (stepIndex < activeStep) {
    return 'completed';
  }

  return 'inactive';
};

// Функція getConnectorState визначає стан сегмента між двома вузлами карти.
const getConnectorState = (activeStep: number, segmentIndex: number): WorkflowStepState => {
  if (segmentIndex === activeStep) {
    return 'active';
  }

  if (segmentIndex < activeStep) {
    return 'completed';
  }

  return 'inactive';
};

// Компонент WorkflowConnectorLayer малює напрямні SVG-лінії та активний світловий імпульс між вузлами.
const WorkflowConnectorLayer: React.FC<{
  stepCount: number;
  activeStep: number;
}> = ({ stepCount, activeStep }) => {
  // Змінна connectorPoints вибирає координати шляху відповідно до кількості кроків у сценарії.
  const connectorPoints = stepCount === 7 ? connectorPoints7 : connectorPoints8;

  return (
    <ConnectorLayer viewBox='0 0 68 106' aria-hidden='true' focusable='false'>
      {connectorPoints.map((points, index) => {
        // Змінна connectorState зберігає статус конкретного відрізка між двома вузлами.
        const connectorState = getConnectorState(activeStep, index);

        return <ConnectorSegment key={points} points={points} $state={connectorState} />;
      })}
      <ConnectorDot $activeStep={activeStep} $stepCount={stepCount} />
    </ConnectorLayer>
  );
};

// Компонент WorkflowNode показує один великий зрозумілий вузол карти процесу.
const WorkflowNode: React.FC<{
  step: WorkflowStep;
  index: number;
  stepCount: number;
  state: WorkflowStepState;
}> = ({ step, index, stepCount, state }) => {
  // Змінна IconComponent зберігає компонент іконки для поточного кроку.
  const IconComponent = workflowIcons[step.icon];

  return (
    <FlowNode $state={state} $index={index} $stepCount={stepCount} aria-current={state === 'active' ? 'step' : undefined}>
      <FlowNodeStatus $state={state}>{state === 'completed' ? <FaCheck aria-hidden='true' /> : index + 1}</FlowNodeStatus>
      <FlowNodeIcon $state={state}>
        <IconComponent aria-hidden='true' />
      </FlowNodeIcon>
      <FlowNodeText>
        <strong>{step.title}</strong>
        <span>{step.description}</span>
      </FlowNodeText>
    </FlowNode>
  );
};

// Компонент WorkflowMap показує одну повну карту: заголовок, шлях, вузли та анімовані конектори.
const WorkflowMap: React.FC<{
  workflow: WorkflowConfig;
  activeStep: number;
}> = ({ workflow, activeStep }) => (
  <WorkflowCardShell $flowId={workflow.id} aria-label={workflow.title}>
    <CardHeader>
      <span>{workflow.label}</span>
      <h3>{workflow.title}</h3>
      <p>{workflow.description}</p>
    </CardHeader>

    <FlowMapCanvas>
      <WorkflowConnectorLayer stepCount={workflow.steps.length} activeStep={activeStep} />
      <StepGrid $stepCount={workflow.steps.length}>
        {workflow.steps.map((step, index) => {
          // Змінна state зберігає стан вузла для анімації та доступності.
          const state = getStepState(activeStep, index);

          return (
            <WorkflowNode
              key={step.id}
              step={step}
              index={index}
              stepCount={workflow.steps.length}
              state={state}
            />
          );
        })}
      </StepGrid>
    </FlowMapCanvas>
  </WorkflowCardShell>
);

// Компонент BenefitChip показує одну компактну перевагу AI-помічника.
const BenefitChip: React.FC<{ label: string; index: number }> = ({ label, index }) => (
  <BenefitChipWrapper>
    <span>{String(index + 1).padStart(2, '0')}</span>
    <strong>{label}</strong>
  </BenefitChipWrapper>
);

// Компонент AiAssistantWorkflowSection збирає преміальну секцію з двома простими візуальними workflow-картами.
const AiAssistantWorkflowSection: React.FC = () => {
  // Змінна websiteActiveStep зберігає активний крок лівої карти Website-Anfrage.
  const [websiteActiveStep, setWebsiteActiveStep] = useState(0);
  // Змінна missedCallActiveStep зберігає активний крок правої карти Verpasster Anruf.
  const [missedCallActiveStep, setMissedCallActiveStep] = useState(0);
  // Змінна benefitItems мемоізує переваги, щоб рендер нижнього рядка залишався стабільним.
  const benefitItems = useMemo(() => benefits, []);

  useEffect(() => {
    // Змінна websiteIntervalId запускає лівий workflow одразу і циклічно переводить активний крок.
    const websiteIntervalId = window.setInterval(() => {
      setWebsiteActiveStep(currentStep => (currentStep + 1) % websiteWorkflow.steps.length);
    }, 2800);

    return () => {
      window.clearInterval(websiteIntervalId);
    };
  }, []);

  useEffect(() => {
    let missedCallIntervalId: number | undefined;

    // Змінна missedCallDelayId створює затримку старту, щоб дві карти не рухались синхронно.
    const missedCallDelayId = window.setTimeout(() => {
      missedCallIntervalId = window.setInterval(() => {
        setMissedCallActiveStep(currentStep => (currentStep + 1) % missedCallWorkflow.steps.length);
      }, 3000);
    }, 2000);

    return () => {
      window.clearTimeout(missedCallDelayId);

      if (missedCallIntervalId) {
        window.clearInterval(missedCallIntervalId);
      }
    };
  }, []);

  return (
    <AiAssistantSection aria-labelledby='ai-assistant-workflow-title'>
      <GlowParticle $variant='gold' aria-hidden='true' />
      <GlowParticle $variant='blue' aria-hidden='true' />
      <GlowParticle $variant='cyan' aria-hidden='true' />

      <SectionInner>
        <HeaderBlock>
          <span>AI BUSINESS AUTOMATION</span>
          <h2 id='ai-assistant-workflow-title'>So arbeitet Ihr AI-Assistent</h2>
          <strong>Zwei Wege, ein Ziel: keine Anfrage geht verloren.</strong>
          <p>
            Website-Anfrage oder verpasster Anruf — der AI-Assistent erfasst die Anfrage, klärt Details und bereitet den
            nächsten Schritt vor.
          </p>
        </HeaderBlock>

        <FlowGrid>
          <WorkflowMap workflow={websiteWorkflow} activeStep={websiteActiveStep} />
          <WorkflowMap workflow={missedCallWorkflow} activeStep={missedCallActiveStep} />
        </FlowGrid>

        <CtaRow>
          <BenefitsRow aria-label='Vorteile des AI-Assistenten'>
            {benefitItems.map((benefit, index) => (
              <BenefitChip key={benefit} label={benefit} index={index} />
            ))}
          </BenefitsRow>

          <CtaButton as={NavLink} to='/kontakt'>
            Kostenlose Beratung anfragen
            <FaArrowRight aria-hidden='true' />
          </CtaButton>
        </CtaRow>

        <LegalNote>
          <FaInfoCircle aria-hidden='true' />
          <span>
            Hinweis: Telefon-, Kalender- und CRM-Integrationen werden individuell eingerichtet. Datenschutz, Einwilligung
            und technische Voraussetzungen werden je nach Unternehmen geprüft.
          </span>
        </LegalNote>
      </SectionInner>
    </AiAssistantSection>
  );
};

export default AiAssistantWorkflowSection;
