import { useCallback, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  titleKey: string;
  descriptionKey: string;
  icon: WorkflowIconName;
};

// Тип WorkflowConfig зберігає налаштування однієї карти: назву, короткий опис і послідовність кроків.
type WorkflowConfig = {
  id: string;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
  steps: WorkflowStep[];
};

type TranslatedWorkflowStep = Omit<WorkflowStep, 'titleKey' | 'descriptionKey'> & {
  title: string;
  description: string;
};

type TranslatedWorkflowConfig = Omit<WorkflowConfig, 'labelKey' | 'titleKey' | 'descriptionKey' | 'steps'> & {
  label: string;
  title: string;
  description: string;
  steps: TranslatedWorkflowStep[];
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
  labelKey: 'home.aiAssistantWorkflow.flows.website.label',
  titleKey: 'home.aiAssistantWorkflow.flows.website.title',
  descriptionKey: 'home.aiAssistantWorkflow.flows.website.description',
  steps: [
    {
      id: 'website-request',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.request.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.request.description',
      icon: 'inbox',
    },
    {
      id: 'website-reaction',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.reaction.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.reaction.description',
      icon: 'spark',
    },
    {
      id: 'website-callback',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.callback.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.callback.description',
      icon: 'phone',
    },
    {
      id: 'website-details',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.details.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.details.description',
      icon: 'checklist',
    },
    {
      id: 'website-calendar',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.calendar.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.calendar.description',
      icon: 'calendarSearch',
    },
    {
      id: 'website-result',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.result.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.result.description',
      icon: 'calendarCheck',
    },
    {
      id: 'website-summary',
      titleKey: 'home.aiAssistantWorkflow.flows.website.steps.summary.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.website.steps.summary.description',
      icon: 'summary',
    },
  ],
};

// Константа missedCallWorkflow зберігає правий сценарій для пропущеного дзвінка.
const missedCallWorkflow: WorkflowConfig = {
  id: 'missed-call',
  labelKey: 'home.aiAssistantWorkflow.flows.missedCall.label',
  titleKey: 'home.aiAssistantWorkflow.flows.missedCall.title',
  descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.description',
  steps: [
    {
      id: 'call-start',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.start.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.start.description',
      icon: 'phone',
    },
    {
      id: 'call-busy',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.busy.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.busy.description',
      icon: 'clock',
    },
    {
      id: 'call-forward',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.forward.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.forward.description',
      icon: 'route',
    },
    {
      id: 'call-answer',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.answer.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.answer.description',
      icon: 'headset',
    },
    {
      id: 'call-details',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.details.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.details.description',
      icon: 'checklist',
    },
    {
      id: 'call-slot',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.slot.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.slot.description',
      icon: 'calendarSearch',
    },
    {
      id: 'call-task',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.task.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.task.description',
      icon: 'task',
    },
    {
      id: 'call-summary',
      titleKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.summary.title',
      descriptionKey: 'home.aiAssistantWorkflow.flows.missedCall.steps.summary.description',
      icon: 'summary',
    },
  ],
};

// Масив benefits зберігає короткі бізнес-переваги для нижнього компактного рядка.
const benefits = [
  'home.aiAssistantWorkflow.benefits.items.lessMissed',
  'home.aiAssistantWorkflow.benefits.items.fasterCallbacks',
  'home.aiAssistantWorkflow.benefits.items.structuredData',
  'home.aiAssistantWorkflow.benefits.items.fewerInterruptions',
  'home.aiAssistantWorkflow.benefits.items.professionalImpression',
];

const workflowTranslationRoot = 'home.aiAssistantWorkflow';

const isMissingWorkflowTranslation = (value: string) => value.startsWith(`${workflowTranslationRoot}.`);

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
  step: TranslatedWorkflowStep;
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
  workflow: TranslatedWorkflowConfig;
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
  const { t, i18n } = useTranslation();
  // Змінна websiteActiveStep зберігає активний крок лівої карти Website-Anfrage.
  const [websiteActiveStep, setWebsiteActiveStep] = useState(0);
  // Змінна missedCallActiveStep зберігає активний крок правої карти Verpasster Anruf.
  const [missedCallActiveStep, setMissedCallActiveStep] = useState(0);
  const [workflowReloadAttempted, setWorkflowReloadAttempted] = useState(false);
  const [workflowTranslationVersion, setWorkflowTranslationVersion] = useState(0);
  const translateWorkflow = useCallback((workflow: WorkflowConfig): TranslatedWorkflowConfig => ({
    id: workflow.id,
    label: t(workflow.labelKey),
    title: t(workflow.titleKey),
    description: t(workflow.descriptionKey),
    steps: workflow.steps.map(step => ({
      id: step.id,
      icon: step.icon,
      title: t(step.titleKey),
      description: t(step.descriptionKey),
    })),
  }), [t, workflowTranslationVersion]);
  const websiteWorkflowCopy = useMemo(() => translateWorkflow(websiteWorkflow), [translateWorkflow]);
  const missedCallWorkflowCopy = useMemo(() => translateWorkflow(missedCallWorkflow), [translateWorkflow]);
  // Змінна benefitItems мемоізує переваги, щоб рендер нижнього рядка залишався стабільним.
  const benefitItems = useMemo(() => benefits.map(benefitKey => t(benefitKey)), [t, workflowTranslationVersion]);

  useEffect(() => {
    if (workflowReloadAttempted) {
      return;
    }

    const translatedTitle = t(`${workflowTranslationRoot}.header.title`);

    if (!isMissingWorkflowTranslation(translatedTitle)) {
      return;
    }

    setWorkflowReloadAttempted(true);

    void i18n.reloadResources(i18n.resolvedLanguage || i18n.language, 'translation').then(() => {
      setWorkflowTranslationVersion(currentVersion => currentVersion + 1);
    });
  }, [i18n, t, workflowReloadAttempted]);

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
          <span>{t('home.aiAssistantWorkflow.header.eyebrow')}</span>
          <h2 id='ai-assistant-workflow-title'>{t('home.aiAssistantWorkflow.header.title')}</h2>
          <strong>{t('home.aiAssistantWorkflow.header.kicker')}</strong>
          <p>{t('home.aiAssistantWorkflow.header.description')}</p>
        </HeaderBlock>

        <FlowGrid>
          <WorkflowMap workflow={websiteWorkflowCopy} activeStep={websiteActiveStep} />
          <WorkflowMap workflow={missedCallWorkflowCopy} activeStep={missedCallActiveStep} />
        </FlowGrid>

        <CtaRow>
          <BenefitsRow aria-label={t('home.aiAssistantWorkflow.benefits.aria')}>
            {benefitItems.map((benefit, index) => (
              <BenefitChip key={benefit} label={benefit} index={index} />
            ))}
          </BenefitsRow>

          <CtaButton as={NavLink} to='/kontakt'>
            {t('home.aiAssistantWorkflow.cta')}
            <FaArrowRight aria-hidden='true' />
          </CtaButton>
        </CtaRow>

        <LegalNote>
          <FaInfoCircle aria-hidden='true' />
          <span>{t('home.aiAssistantWorkflow.legal')}</span>
        </LegalNote>
      </SectionInner>
    </AiAssistantSection>
  );
};

export default AiAssistantWorkflowSection;
