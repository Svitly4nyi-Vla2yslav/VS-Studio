import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaChevronRight,
  FaFilePdf,
  FaGithub,
  FaPlay,
} from 'react-icons/fa6';
import TerminalType from '../../components/Motion/TerminalType';
import plehnMediaLogo from '../../assets/plehn-media-logo.gif';
import logoVsStudio from '../../assets/logo-vs-studio.svg';
import {
  caseStudies,
  currentSkills,
  growingSkills,
  plehnApplication,
  stack,
  videoTranscript,
  workflowSteps,
  type PlehnCaseStudy,
} from './applicationData';
import { RecruiterAssistant } from './components/RecruiterAssistant';
import {
  ActionButton,
  AnswerPanel,
  Brand,
  BrandLabel,
  BrowserBar,
  BookingActions,
  BookingCloseButton,
  BookingDayButton,
  BookingDayGrid,
  BookingDialogBackdrop,
  BookingDialogHeader,
  BookingDialogPanel,
  BookingDialogTitle,
  BookingForm,
  BookingPrimaryButton,
  BookingSecondaryButton,
  BookingSlotButton,
  BookingSlotGrid,
  BookingStatus,
  BookingStep,
  BookingSummary,
  BookingSummaryRow,
  ButtonRow,
  CaseArticle,
  CaseCopy,
  CaseLinks,
  CaseList,
  CaseNumber,
  CasePurpose,
  CaseTitle,
  CaseVisual,
  Container,
  DashboardCanvas,
  DesignCanvas,
  DetailList,
  EvasiveLink,
  EvasiveNote,
  EvasiveStage,
  FinalActions,
  FinalBlob,
  FinalSection,
  FlowCanvas,
  Header,
  HeaderActions,
  HeaderBrandLockup,
  HeaderLink,
  HeaderNavGroup,
  Hero,
  HeroBlob,
  HeroContent,
  HeroLead,
  HeroTitle,
  Learning,
  MobileDemoToggle,
  PlehnLogoCard,
  PlehnMediaLogo,
  MobileMenuButton,
  OutputField,
  Page,
  PrimaryLink,
  RolePill,
  SecondaryLink,
  Section,
  SectionKicker,
  SectionLead,
  SectionNav,
  SectionNavLink,
  SectionTitle,
  SkillColumn,
  SkillsGrid,
  StackList,
  TechRow,
  Transcript,
  VideoFrame,
  VideoGrid,
  VideoPoster,
  VisualCanvas,
  VSBrandImage,
  VSBrandMark,
  Workbench,
  WorkbenchColumn,
  WorkbenchWrap,
  WorkField,
  WorkflowGrid,
  WorkflowShell,
  WorkflowStep,
} from './PlehnApplication.styled';

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.62, ease: 'easeOut' as const },
};

const ViewportType: React.FC<{ text: string; durationMs?: number; typeSpeedMs?: number }> = ({
  text,
  durationMs = 2200,
  typeSpeedMs = 24,
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const visible = useInView(textRef, { once: true, amount: 0.6 });

  return (
    <span ref={textRef}>
      <TerminalType
        text={text}
        durationMs={durationMs}
        typeSpeedMs={typeSpeedMs}
        start={visible}
        persistInSession={false}
        respectReducedMotion={false}
      />
    </span>
  );
};

const ProjectVisual: React.FC<{ project: PlehnCaseStudy }> = ({ project }) => {
  if (project.id === 'airtexno') {
    return (
      <FlowCanvas aria-label='Visualisierung eines Service-Request-Datenflusses'>
        <span className='node n1'>Anfrage</span><span className='node n2'>Kampagne</span>
        <span className='hub'>Service Flow</span>
        <span className='node n3'>E-Mail</span><span className='node n4'>Datenbank</span>
        <i className='line l1' /><i className='line l2' /><i className='line l3' /><i className='line l4' />
      </FlowCanvas>
    );
  }

  if (project.id === 'sabsus') {
    return (
      <DashboardCanvas aria-label='Abstrakte Vorschau einer SABSUS Produktoberfläche'>
        <div className='side'><div className='logo' /><div className='navline' /><div className='navline' /><div className='navline' /></div>
        <div className='stats'><div className='stat' /><div className='stat' /></div>
        <div className='chart' />
      </DashboardCanvas>
    );
  }

  if (project.id === 'design-workflow') {
    return (
      <DesignCanvas aria-label='Figma- und Canva-Workflow als gestapelte Designframes'>
        <div className='frame f1' /><div className='frame f2' /><div className='frame f3' />
        <span className='tag t1'>FIGMA</span><span className='tag t2'>CANVA MOTION</span>
      </DesignCanvas>
    );
  }

  return (
    <>
      <BrowserBar><span /><span /><span /><i /></BrowserBar>
      <VisualCanvas aria-label='Abstrakte Vorschau der VS Web Studio Website'>
        <div className='visual-title' /><div className='visual-copy' /><div className='visual-cta' /><div className='visual-panel' />
      </VisualCanvas>
    </>
  );
};

const CaseStudy: React.FC<{ project: PlehnCaseStudy; index: number }> = ({ project, index }) => {
  const reduceMotion = useReducedMotion();

  return (
  <CaseArticle
    $reverse={index % 2 === 1}
    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: 0.62, ease: 'easeOut' }}
  >
    <CaseVisual $accent={project.accent}><ProjectVisual project={project} /></CaseVisual>
    <CaseCopy>
      <CaseNumber>{project.number} · {project.label}</CaseNumber>
      <CaseTitle>{project.title}</CaseTitle>
      <CasePurpose>{project.purpose}</CasePurpose>
      <DetailList>
        <div><dt>Meine Rolle</dt><dd>{project.role}</dd></div>
        <div><dt>Umsetzung</dt><dd>{project.implementation}</dd></div>
        <div><dt>Ergebnis</dt><dd>{project.result}</dd></div>
      </DetailList>
      <Learning>„{project.learning}“</Learning>
      <TechRow>{project.tech.map(item => <li key={item}>{item}</li>)}</TechRow>
      <CaseLinks>
        {project.liveUrl ? <a href={project.liveUrl} target='_blank' rel='noreferrer'>Live / Design <FaArrowUpRightFromSquare /></a> : null}
        {project.repoUrl ? <a href={project.repoUrl} target='_blank' rel='noreferrer'>GitHub <FaGithub /></a> : null}
      </CaseLinks>
    </CaseCopy>
  </CaseArticle>
  );
};

const AIWorkbench: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('Shopware-Plugin');
  const [audience, setAudience] = useState('Shopware-Agenturen');
  const [headline, setHeadline] = useState('Mehr Effizienz für Ihren Shop');
  const [run, setRun] = useState(0);

  const result = useMemo(() => ({
    a: `Weniger manuelle Arbeit mit ${product}.`,
    b: `${audience}: Prozesse automatisieren, die jede Woche Zeit kosten.`,
    cta: run % 2 === 0 ? 'Workflow ansehen' : 'Potenzial prüfen',
    hypothesis: `Variante B testet einen konkreteren Zeitnutzen gegen „${headline}“ und macht die Zielgruppe direkt sichtbar.`,
  }), [audience, headline, product, run]);

  return (
    <>
      <MobileDemoToggle type='button' onClick={() => setOpen(value => !value)} aria-expanded={open}>
        {open ? 'KI-Demo schließen' : 'Kleine KI-Demo ausprobieren'}
      </MobileDemoToggle>
      <WorkbenchWrap $open={open}>
        <Workbench>
          <WorkbenchColumn>
            <strong>Eingabe</strong>
            <WorkField>Produkt<input value={product} onChange={event => setProduct(event.target.value)} /></WorkField>
            <WorkField>Zielgruppe<input value={audience} onChange={event => setAudience(event.target.value)} /></WorkField>
            <WorkField>Aktuelle Headline<input value={headline} onChange={event => setHeadline(event.target.value)} /></WorkField>
            <ActionButton type='button' onClick={() => setRun(value => value + 1)}>Varianten erzeugen <FaArrowRight /></ActionButton>
          </WorkbenchColumn>
          <WorkbenchColumn aria-live='polite'>
            <strong>Ergebnis</strong>
            <OutputField><span>Variante A</span><strong>{result.a}</strong></OutputField>
            <OutputField><span>Variante B</span><strong>{result.b}</strong></OutputField>
            <OutputField><span>CTA</span><strong>{result.cta}</strong></OutputField>
            <OutputField><span>A/B-Hypothese</span><strong>{result.hypothesis}</strong></OutputField>
          </WorkbenchColumn>
        </Workbench>
      </WorkbenchWrap>
    </>
  );
};

const formatDateKey = (date: Date) => date.toISOString().slice(0, 10);

const formatBookingDate = (dateKey: string) =>
  new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: '2-digit', month: 'short' }).format(new Date(`${dateKey}T12:00:00Z`));

const getUpcomingDates = () => Array.from({ length: 7 }, (_, index) => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + index);
  const dateKey = formatDateKey(date);
  return { dateKey, label: formatBookingDate(dateKey), dayName: new Intl.DateTimeFormat('de-DE', { weekday: 'short' }).format(date) };
});

const BookingDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>(() => getUpcomingDates()[0]?.dateKey ?? new Date().toISOString().slice(0, 10));
  const [slots, setSlots] = useState<Array<{ start: string; end: string; label: string }>>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', note: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!open) return;

    const controller = new AbortController();
    const fetchSlots = async () => {
      setIsLoading(true);
      setStatus('Verfügbare Slots werden geladen…');
      setIsError(false);
      setSelectedSlot(null);

      try {
        const response = await fetch(`/api/plehn/availability?date=${selectedDate}`, { signal: controller.signal });
        const data = (await response.json()) as { ok?: boolean; slots?: Array<{ start: string; end: string; label: string }>; error?: string; fallbackUrl?: string };

        if (!response.ok || !data.ok) {
          throw new Error(data.error || 'Keine Verfügbarkeiten gefunden.');
        }

        setSlots(data.slots ?? []);
        if ((data.slots ?? []).length === 0) {
          setStatus('Für diesen Tag sind aktuell keine Slots frei. Bitte wählen Sie einen anderen Tag oder schreiben Sie eine kurze E-Mail.');
        } else {
          setStatus('');
        }
      } catch (error) {
        if ((error as DOMException)?.name === 'AbortError') return;
        setSlots([]);
        setStatus(error instanceof Error ? error.message : 'Es konnte keine Verfügbarkeitsliste geladen werden.');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlots();
    return () => controller.abort();
  }, [open, selectedDate]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedSlot) {
      setStatus('Bitte wählen Sie zuerst einen verfügbaren Termin aus.');
      setIsError(true);
      return;
    }

    if (!form.name.trim() || !form.email.trim()) {
      setStatus('Bitte geben Sie Name und E-Mail an.');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setStatus('Termin wird bestätigt…');

    try {
      const response = await fetch('/api/plehn/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          note: form.note.trim(),
          start: selectedSlot,
          timezone: 'Europe/Berlin',
          source: 'plehn-landing',
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string; reservation?: { meetUrl?: string | null; eventUrl?: string | null }; fallbackUrl?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Der Termin konnte nicht bestätigt werden.');
      }

      const meetUrl = data.reservation?.meetUrl || data.reservation?.eventUrl || null;
      setStatus(meetUrl ? `Termin bestätigt. Google Meet-Link: ${meetUrl}` : 'Termin bestätigt. Sie erhalten die Bestätigung per E-Mail.');
      setIsError(false);
      setForm({ name: '', email: '', note: '' });
      setSelectedSlot(null);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Der Termin konnte nicht bestätigt werden.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <BookingDialogBackdrop onClick={onClose}>
      <BookingDialogPanel onClick={event => event.stopPropagation()} role='dialog' aria-modal='true' aria-labelledby='plehn-booking-title'>
        <BookingDialogHeader>
          <BookingDialogTitle id='plehn-booking-title'>Gespräch buchen</BookingDialogTitle>
          <BookingCloseButton type='button' aria-label='Dialog schließen' onClick={onClose}>×</BookingCloseButton>
        </BookingDialogHeader>

        <BookingStep>
          <div>
            <h4>1. Tag auswählen</h4>
            <BookingDayGrid>
              {getUpcomingDates().map(day => (
                <BookingDayButton key={day.dateKey} type='button' $active={selectedDate === day.dateKey} onClick={() => setSelectedDate(day.dateKey)}>
                  <strong>{day.dayName}</strong>
                  <span>{day.label}</span>
                </BookingDayButton>
              ))}
            </BookingDayGrid>
          </div>

          <div>
            <h4>2. Termin wählen</h4>
            {isLoading ? <BookingStatus>Verfügbarkeiten werden geladen…</BookingStatus> : (
              <BookingSlotGrid>
                {slots.length > 0 ? slots.map(slot => (
                  <BookingSlotButton key={slot.start} type='button' $active={selectedSlot === slot.start} onClick={() => setSelectedSlot(slot.start)}>
                    {slot.label}
                  </BookingSlotButton>
                )) : <BookingStatus $error>Keine Slots frei.</BookingStatus>}
              </BookingSlotGrid>
            )}
          </div>

          <BookingForm onSubmit={handleSubmit}>
            <label>
              Name
              <input value={form.name} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} placeholder='Ihr Name' />
            </label>
            <label>
              E-Mail
              <input type='email' value={form.email} onChange={event => setForm(current => ({ ...current, email: event.target.value }))} placeholder='name@email.de' />
            </label>
            <label>
              Hinweis
              <textarea value={form.note} onChange={event => setForm(current => ({ ...current, note: event.target.value }))} placeholder='Was möchten Sie konkret besprechen?' />
            </label>

            {selectedSlot ? (
              <BookingSummary>
                <BookingSummaryRow><span>Ausgewählter Termin</span><strong>{new Date(selectedSlot).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Berlin' })}</strong></BookingSummaryRow>
              </BookingSummary>
            ) : null}

            <BookingActions>
              <BookingSecondaryButton type='button' onClick={onClose}>Abbrechen</BookingSecondaryButton>
              <BookingPrimaryButton type='submit' disabled={isLoading || !selectedSlot}>Termin bestätigen</BookingPrimaryButton>
            </BookingActions>
            <BookingStatus $error={isError}>{status}</BookingStatus>
          </BookingForm>
        </BookingStep>
      </BookingDialogPanel>
    </BookingDialogBackdrop>
  );
};

const EvasiveBookingButton: React.FC<{ onRequestBooking?: () => void }> = ({ onRequestBooking }) => {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hasEscaped, setHasEscaped] = useState(false);
  const href = plehnApplication.bookingUrl || plehnApplication.emailUrl;

  const moveAwayFromPointer = (clientX: number, clientY: number) => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !finePointer || !stageRef.current || hasEscaped) {
      return;
    }

    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.hypot(dx, dy);
    const radius = 120;

    if (distance < radius) {
      const x = dx === 0 ? 0 : (-dx / distance) * 78;
      const y = dy === 0 ? 0 : (-dy / distance) * 62;
      const nextX = Math.max(-74, Math.min(74, x));
      const nextY = Math.max(-54, Math.min(54, y));
      setOffset({ x: nextX, y: nextY });
      setHasEscaped(true);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onRequestBooking) {
      event.preventDefault();
      onRequestBooking();
    }
  };

  return (
    <EvasiveStage
      ref={stageRef}
      onPointerMove={event => moveAwayFromPointer(event.clientX, event.clientY)}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      onPointerDown={() => setHasEscaped(false)}
    >
      <motion.div
        animate={reduceMotion ? { x: 0, y: 0 } : offset}
        transition={{ type: 'spring', stiffness: 310, damping: 24 }}
      >
        <EvasiveLink
          href={href}
          target={plehnApplication.bookingUrl ? '_blank' : undefined}
          rel={plehnApplication.bookingUrl ? 'noreferrer' : undefined}
          onClick={handleClick}
          onFocus={() => setOffset({ x: 0, y: 0 })}
          onBlur={() => setOffset({ x: 0, y: 0 })}
        >
          Gespräch vereinbaren <FaChevronRight />
        </EvasiveLink>
      </motion.div>
      <EvasiveNote aria-live='polite'>{hasEscaped ? 'Okay. Ein kleines bisschen mussten Sie noch um mich kämpfen. 🙂' : ' '}</EvasiveNote>
    </EvasiveStage>
  );
};

const PlehnApplication: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const employmentRef = useRef<HTMLDivElement | null>(null);
  const transcriptRef = useRef<HTMLElement | null>(null);
  const heroVisible = useInView(heroRef, { once: true, amount: 0.25 });
  const employmentVisible = useInView(employmentRef, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const revealProps = reduceMotion ? { initial: false as const } : sectionMotion;
  const navItems = [
    { id: 'assistent', label: 'Assistent' },
    { id: 'projekte', label: 'Projekte' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'video', label: 'Video' },
    { id: 'employment', label: 'Festanstellung' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Kontakt' },
  ];

  useEffect(() => {
    document.title = 'Vladyslav Svitlychnyi × plehn media | Web, KI & Conversion';
    const description = 'Personalisierte Bewerbung als Proof-of-Work für Webtechnik, Design, Conversion und verantwortungsvollen KI-Einsatz.';
    const upsert = (name: string, content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!meta) { meta = document.createElement('meta'); meta.name = name; document.head.appendChild(meta); }
      meta.content = content;
    };
    upsert('description', description);
    upsert('robots', 'noindex, nofollow');
    upsert('googlebot', 'noindex, nofollow');
    document.documentElement.lang = 'de';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 861px)');
    const handle = () => {
      if (mediaQuery.matches) setMobileMenuOpen(false);
    };
    handle();
    mediaQuery.addEventListener('change', handle);
    return () => mediaQuery.removeEventListener('change', handle);
  }, []);

  return (
    <Page>
      <Header>
        <Brand href='#start' aria-label='Zum Anfang der Bewerbung' onClick={() => setMobileMenuOpen(false)}>
          <HeaderBrandLockup>
            <VSBrandMark>
              <VSBrandImage src={logoVsStudio} alt='VS Web Studio Logo' />
            </VSBrandMark>
            <BrandLabel>Bewerbung für</BrandLabel>
            <PlehnLogoCard>
              <PlehnMediaLogo src={plehnMediaLogo} alt='Plehn Media Logo' />
            </PlehnLogoCard>
          </HeaderBrandLockup>
        </Brand>

        <HeaderNavGroup id='plehn-header-nav' $open={mobileMenuOpen}>
          <SectionNav aria-label='Seitenabschnitte'>
            {navItems.map(item => (
              <SectionNavLink key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)}>{item.label}</SectionNavLink>
            ))}
          </SectionNav>
        </HeaderNavGroup>

        <HeaderActions aria-label='Externe Profile'>
          <HeaderLink href={plehnApplication.githubUrl} target='_blank' rel='noreferrer'><FaGithub /><span>GitHub</span></HeaderLink>
          <HeaderLink
            $accent
            href={plehnApplication.cvUrl || plehnApplication.profileUrl}
            target='_blank'
            rel='noreferrer'
            title={plehnApplication.cvUrl ? 'Lebenslauf als PDF' : 'Derzeit ist das öffentliche GitHub-Profil verlinkt; PDF-URL ist konfigurierbar.'}
          ><FaFilePdf /><span>{plehnApplication.cvUrl ? 'Lebenslauf PDF' : 'Profil / CV'}</span></HeaderLink>
        </HeaderActions>

        <MobileMenuButton
          type='button'
          aria-label={mobileMenuOpen ? 'Mobile Navigation schließen' : 'Mobile Navigation öffnen'}
          aria-expanded={mobileMenuOpen}
          aria-controls='plehn-header-nav'
          $open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(value => !value)}
        >
          <span />
        </MobileMenuButton>
      </Header>

      <Hero id='start'>
        <HeroBlob $tone='gold' /><HeroBlob $tone='blue' /><HeroBlob $tone='cyan' />
        <Container>
          <HeroContent ref={heroRef}>
            <RolePill>React × TypeScript × KI × Conversion</RolePill>
            <HeroTitle>
              <TerminalType
                text='Ich könnte Ihnen schreiben, dass ich KI nutze. Ich zeige es lieber.'
                durationMs={3800}
                typeSpeedMs={46}
                storageKey='plehn_hero_once'
                start={heroVisible}
                persistInSession={false}
                respectReducedMotion={false}
              />
            </HeroTitle>
            <HeroLead>Eine Bewerbung als kleines Produkt: echte Projekte, echte Grenzen, echte KI-Workflows. Nicht nur erzählen, sondern zeigen.</HeroLead>
            <ButtonRow>
              <PrimaryLink href='#assistent'>KI-Assistent testen <FaArrowRight /></PrimaryLink>
              <SecondaryLink href='#video'>80-Sekunden-Demo ansehen <FaPlay /></SecondaryLink>
            </ButtonRow>
            <StackList aria-label='Verwendete Werkzeuge'>{stack.map(item => <li key={item}>{item}</li>)}</StackList>
          </HeroContent>
        </Container>
      </Hero>

      <Section id='assistent' {...revealProps}>
        <Container>
          <SectionKicker>01 · Belege statt Versprechen</SectionKicker>
          <SectionTitle><ViewportType text='KI-Bewerbungsassistent' /></SectionTitle>
          <SectionLead>Fragen Sie nicht nur meinen Lebenslauf ab. Testen Sie, wie ich Informationen strukturiere, Quellen begrenze und Unsicherheit sichtbar mache.</SectionLead>
          <RecruiterAssistant />
        </Container>
      </Section>

      <Section id='projekte' {...revealProps}>
        <Container>
          <SectionKicker>02 · Echte Case Studies</SectionKicker>
          <SectionTitle><ViewportType text='Nicht nur Code. Reale Ziele, Entscheidungen und Learnings.' /></SectionTitle>
          <SectionLead>Jeder Case zeigt Problem, Beitrag, Umsetzung, Ergebnis und Grenze. Unfertige Projekte bleiben bewusst außen vor.</SectionLead>
          <CaseList>{caseStudies.map((project, index) => <CaseStudy key={project.id} project={project} index={index} />)}</CaseList>
        </Container>
      </Section>

      <Section id='workflow' {...revealProps}>
        <Container>
          <SectionKicker>03 · Figma / Canva Workflow</SectionKicker>
          <SectionTitle><ViewportType text='Wie ich mit KI arbeite' /></SectionTitle>
          <SectionLead>Keine statische Behauptung, sondern eine ruhige, loopbare Prozess-Sequenz: vom Problem bis zur Conversion-Entscheidung.</SectionLead>
          <WorkflowShell>
            <WorkflowGrid>{workflowSteps.map((step, index) => <WorkflowStep key={step.number} $index={index}><span>{step.number}</span><strong>{step.title}</strong><p>{step.note}</p></WorkflowStep>)}</WorkflowGrid>
          </WorkflowShell>
        </Container>
      </Section>

      <Section {...revealProps}>
        <Container>
          <SectionKicker>04 · Kleine KI-Demo</SectionKicker>
          <SectionTitle><ViewportType text='KI-Werkbank' /></SectionTitle>
          <SectionLead>Produkt, Zielgruppe und aktuelle Headline eingeben. Zwei Varianten, CTA und eine kurze Testhypothese erhalten – in zehn Sekunden verständlich.</SectionLead>
          <AIWorkbench />
        </Container>
      </Section>

      <Section id='video' {...revealProps}>
        <Container>
          <SectionKicker>05 · 80 Sekunden</SectionKicker>
          <SectionTitle><ViewportType text='Kurzes Video. Kein Autoplay. Kein Hindernis.' /></SectionTitle>
          <SectionLead>Play auf Wunsch, Untertitel und vollständiges Transkript. Sie können schauen, lesen oder einfach weiterscrollen.</SectionLead>
          <VideoGrid>
            <VideoFrame>
              {plehnApplication.videoUrl ? (
                <video controls preload='metadata' playsInline>
                  <source src={plehnApplication.videoUrl} />
                  {plehnApplication.captionsUrl ? <track kind='captions' src={plehnApplication.captionsUrl} srcLang='de' label='Deutsch' default /> : null}
                  Ihr Browser kann dieses Video nicht wiedergeben. Das Transkript steht direkt daneben.
                </video>
              ) : (
                <VideoPoster>
                  <button type='button' onClick={() => transcriptRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })} aria-label='Zum Transkript springen'><FaPlay /></button>
                  <div><strong>80-Sekunden-Demo auf Deutsch</strong><span>Videoquelle konfigurierbar · Transkript verfügbar</span></div>
                </VideoPoster>
              )}
            </VideoFrame>
            <Transcript ref={transcriptRef} tabIndex={-1}>
              <h3>Transkript</h3>
              {videoTranscript.map((paragraph, index) => <p key={paragraph}><strong>{index === 0 ? '0–8s' : index === 1 ? '8–20s' : index === 2 ? '20–38s' : index === 3 ? '38–50s' : index === 4 ? '50–65s' : '65–78s'} · </strong>{paragraph}</p>)}
            </Transcript>
          </VideoGrid>
        </Container>
      </Section>

      <Section id='employment' {...revealProps}>
        <Container ref={employmentRef}>
          <SectionKicker>06 · Die Frage, die sowieso kommt</SectionKicker>
          <SectionTitle><ViewportType text='Warum suche ich eine Festanstellung, wenn ich VS Web Studio aufbaue?' /></SectionTitle>
          <AnswerPanel>
            <TerminalType
              text='Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein dauerhaft Entwicklung, Vertrieb und Bürokratie gleichzeitig zu jonglieren. VS Web Studio ist mein Weg, während der Jobsuche nicht stehenzubleiben. Eine passende Festanstellung bleibt für mich die attraktivere langfristige Perspektive.'
              durationMs={11200}
              typeSpeedMs={28}
              storageKey='plehn_employment_once'
              start={employmentVisible}
              persistInSession={false}
              respectReducedMotion={false}
            />
          </AnswerPanel>
        </Container>
      </Section>

      <Section id='skills' {...revealProps}>
        <Container>
          <SectionKicker>07 · Fit & Lernkurve</SectionKicker>
          <SectionTitle><ViewportType text='Was ich mitbringe. Was ich gezielt ausbaue.' /></SectionTitle>
          <SectionLead>Kein 100%-Match-Theater. Lieber klar zeigen, wo ich heute stark bin und was ich als Nächstes praktisch vertiefe.</SectionLead>
          <SkillsGrid>
            <SkillColumn><h3>Das bringe ich mit</h3><ul>{currentSkills.map(item => <li key={item}><FaCheck />{item}</li>)}</ul></SkillColumn>
            <SkillColumn $growing><h3>Das baue ich gerade aus</h3><ul>{growingSkills.map(item => <li key={item}><FaArrowRight />{item}</li>)}</ul></SkillColumn>
          </SkillsGrid>
        </Container>
      </Section>

      <FinalSection id='contact'>
        <FinalBlob $tone='gold' aria-hidden='true' />
        <FinalBlob $tone='blue' aria-hidden='true' />
        <FinalBlob $tone='cyan' aria-hidden='true' />
        <Container>
          <h2><ViewportType text='Wenn Sie bis hier gelesen haben, hat die Bewerbung ihren Job schon halb erfüllt.' durationMs={1200} /></h2>
          <p>Der Rest lässt sich besser in 20 Minuten Gespräch klären als in weiteren 800 Wörtern.</p>
          <FinalActions>
            <EvasiveBookingButton onRequestBooking={() => setBookingOpen(true)} />
            <SecondaryLink href={plehnApplication.githubUrl} target='_blank' rel='noreferrer'>GitHub ansehen <FaGithub /></SecondaryLink>
            <SecondaryLink href={plehnApplication.cvUrl || plehnApplication.profileUrl} target='_blank' rel='noreferrer'>{plehnApplication.cvUrl ? 'Lebenslauf PDF' : 'Profil / CV'} <FaFilePdf /></SecondaryLink>
          </FinalActions>
          <p>Vladyslav Svitlychnyi · Hildesheim · Deutsch B2 Beruf</p>
        </Container>
      </FinalSection>
      <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </Page>
  );
};

export default PlehnApplication;
