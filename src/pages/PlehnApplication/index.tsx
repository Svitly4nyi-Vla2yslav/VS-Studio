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

const EvasiveBookingButton: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const href = plehnApplication.bookingUrl || plehnApplication.emailUrl;
  const maxEscapes = 3;

  const moveAwayFromPointer = (clientX: number, clientY: number) => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const compactViewport = window.matchMedia('(max-width: 390px)').matches;
    if (reduceMotion || !finePointer || compactViewport || !stageRef.current || escapeCount >= maxEscapes) {
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
      const nextEscapeCount = Math.min(escapeCount + 1, maxEscapes);
      const strength = 72 + escapeCount * 20;
      const x = dx === 0 ? 0 : (-dx / distance) * strength;
      const y = dy === 0 ? 0 : (-dy / distance) * strength;
      const nextX = Math.max(-96, Math.min(96, x));
      const nextY = Math.max(-72, Math.min(72, y));
      setOffset({ x: nextX, y: nextY });
      setEscapeCount(nextEscapeCount);
    }
  };

  const finalEscapeReached = escapeCount >= maxEscapes;

  return (
    <EvasiveStage
      ref={stageRef}
      onPointerMove={event => moveAwayFromPointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        if (!finalEscapeReached) {
          setOffset({ x: 0, y: 0 });
        }
      }}
      onPointerDown={() => {
        if (!finalEscapeReached) {
          setOffset({ x: 0, y: 0 });
          setEscapeCount(0);
        }
      }}
    >
      <motion.div
        animate={reduceMotion ? { x: 0, y: 0 } : offset}
        transition={{ type: 'spring', stiffness: 310, damping: 24 }}
      >
        <EvasiveLink
          href={href}
          target={plehnApplication.bookingUrl ? '_blank' : undefined}
          rel={plehnApplication.bookingUrl ? 'noreferrer' : undefined}
          onFocus={() => setOffset({ x: 0, y: 0 })}
          onBlur={() => setOffset({ x: 0, y: 0 })}
        >
          Gespräch vereinbaren <FaChevronRight />
        </EvasiveLink>
      </motion.div>
      <EvasiveNote aria-live='polite'>{finalEscapeReached ? 'Okay. Ein kleines bisschen mussten Sie noch um mich kämpfen. 🙂' : ' '}</EvasiveNote>
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
            <EvasiveBookingButton />
            <SecondaryLink href={plehnApplication.githubUrl} target='_blank' rel='noreferrer'>GitHub ansehen <FaGithub /></SecondaryLink>
            <SecondaryLink href={plehnApplication.cvUrl || plehnApplication.profileUrl} target='_blank' rel='noreferrer'>{plehnApplication.cvUrl ? 'Lebenslauf PDF' : 'Profil / CV'} <FaFilePdf /></SecondaryLink>
          </FinalActions>
          <p>Vladyslav Svitlychnyi · Hildesheim · Deutsch B2 Beruf</p>
        </Container>
      </FinalSection>
    </Page>
  );
};

export default PlehnApplication;
