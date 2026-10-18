import{u as q,x as X,a0 as p,a1 as J,j as i,a as Q,y as Z,o,F as S,K as F,h as z,i as C,a2 as L,k as M,S as m,a3 as s,s as ii,a4 as ri,a5 as ei,g as a,E as U,P as ai,b as ni}from"./CgsX1Taj.js";const si=""+new URL("BuX8SAh9.webp",import.meta.url).href,ti={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},oi=U`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,ci=U`
  0%, 100% { box-shadow: 0 0 0 rgba(214, 165, 66, 0); }
  50% { box-shadow: var(--gold-glow-md); }
`,pi=a(ai)`
  padding-top: 0;
`,di=a.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: -120px -20px auto;
    height: 420px;
    z-index: -2;
    background:
      radial-gradient(circle at 22% 12%, rgba(77, 55, 92, .14), transparent 52%),
      radial-gradient(circle at 78% 22%, rgba(214, 165, 66, .16), transparent 50%),
      radial-gradient(circle at 50% 75%, var(--obsidian-800), var(--obsidian-950));
    filter: blur(2px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -40px 0 auto;
    height: 460px;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 84%);
    opacity: 0.26;
  }
`,li=a.section`
  position: relative;
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  width: 100vw;
  min-height: calc(100svh - 76px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: clamp(72px, 12vh, 132px) max(var(--gutter), calc((100vw - 1320px) / 2 + var(--gutter)));
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(90deg, rgba(5, 8, 15, 0.92) 0%, rgba(5, 8, 15, 0.72) 40%, rgba(5, 8, 15, 0.3) 74%, rgba(5, 8, 15, 0.68) 100%),
    linear-gradient(180deg, rgba(5, 8, 15, 0.28) 0%, rgba(5, 8, 15, 0.18) 48%, rgba(5, 8, 15, 0.86) 100%),
    url(${si});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 1px solid var(--obsidian-border);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: calc(100svh - 72px);
    padding: clamp(64px, 12vh, 104px) var(--gutter);
  }

  @media (max-width: 767px) {
    min-height: calc(100svh - 66px);
  }
`,gi=a.div`
  h1 {
    font-size: var(--type-display-l);
    line-height: var(--leading-display);
    letter-spacing: -0.04em;
    margin: 0;
    text-wrap: balance;
  }

  p {
    margin: 18px 0 0;
    max-width: 52ch;
    color: var(--champagne-text);
    font-size: var(--type-body-lg);
    line-height: var(--leading-body);
  }

  @media (max-width: 767px) {
    h1 {
      max-width: 13ch;
    }
  }
`,xi=a.span`
  color: transparent;
  background: var(--gold-metal);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,hi=a.div`
  margin-top: 24px;
`,N=a(ni)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,bi=a(o.div)`
  position: relative;
  min-height: 340px;
  border-radius: 20px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at 80% 18%, rgba(214, 165, 66, .12), transparent 44%),
    linear-gradient(165deg, rgba(24, 21, 27, .95), rgba(5, 5, 6, .94));
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(4, 7, 15, 0.62);

  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    right: -70px;
    top: -70px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(77, 160, 255, 0.34), transparent 70%);
    filter: blur(14px);
  }
`,mi=a.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,v=a.div`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(8, 13, 26, 0.66);
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`,w=a.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`,y=a(o.div)`
  height: 100%;
  border-radius: 999px;
  background: var(--gold-metal-soft);
`,ui=a(o.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${oi} 5.2s ease-in-out infinite;
`,h=a(o.div)`
  border-radius: 10px;
  background: rgba(17, 27, 49, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 64px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 6px;
  font-size: 12px;

  svg {
    margin-bottom: 4px;
    color: #8dc4ff;
  }
`,ji=a(m)`
  margin-top: 26px;
`,fi=a.div`
  border-radius: 18px;
  border: 1px solid var(--obsidian-border);
  background: linear-gradient(180deg, rgba(22, 20, 25, .94), rgba(5, 5, 6, .92));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,vi=a.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,b=a(o.div)`
  position: relative;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(9, 14, 28, 0.8);
  min-height: 82px;
  display: grid;
  gap: 4px;
  place-content: center;
  text-align: center;

  svg {
    margin: 0 auto;
    color: #8cc2ff;
  }

  @media (min-width: 901px) {
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -14px;
      top: 50%;
      width: 18px;
      height: 2px;
      background: linear-gradient(90deg, rgba(82, 156, 255, 0.85), rgba(82, 156, 255, 0));
    }
  }
`,O=a.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,E=a.p`
  max-width: 760px;
  margin: -4px 0 14px;
  color: var(--muted-gold-text);
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.55;
`,wi=a.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid var(--obsidian-border);
  background: rgba(7, 7, 9, .76);
`,H=a.button`
  border: 0;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  color: ${({$active:r})=>r?"#171108":"var(--champagne-text)"};
  background: ${({$active:r})=>r?"var(--gold-metal-soft)":"transparent"};
  box-shadow: ${({$active:r})=>r?"0 8px 20px rgba(255, 201, 125, 0.24)":"none"};
  font-weight: 700;
  cursor: pointer;
  transition:
    background var(--dur-mid) var(--ease-smooth),
    color var(--dur-mid) var(--ease-smooth),
    transform var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }
`,R=a(o.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at 88% 0%, rgba(255, 242, 189, .08), transparent 30%),
    linear-gradient(145deg, rgba(23, 20, 26, .95), rgba(5, 5, 6, .96));
  padding: ${({$recommended:r})=>r?"24px":"20px"};
  box-shadow: ${({$recommended:r})=>r?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:r})=>r?"translateY(-6px)":"none"};
  border-color: ${({$recommended:r})=>r?"var(--obsidian-border-hot)":"var(--obsidian-border)"};
  animation: ${({$recommended:r})=>r?ci:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:r})=>r?"translateY(-9px)":"translateY(-5px)"};
    border-color: var(--obsidian-border-hot);
  }
`,B=a.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,T=a.div`
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,A=a.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: var(--gold-300);
`,G=a.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,yi=a.div`
  margin-top: 6px;
  color: rgba(255, 208, 138, 0.86);
  font-size: 13px;
  line-height: 1.35;
`,u=a.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,j=a.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  svg {
    color: #82beff;
    font-size: 13px;
  }
`,Y=a.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,ki=a.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,$i=a.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,Pi=a.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 700;
`,Ii=a.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,Si=a.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,Fi=a.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,zi=a.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,d=a.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 14px 16px;
  gap: 8px;
  align-items: center;
  transition: background var(--dur-mid) var(--ease-smooth);

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.03);
  }

  &:hover {
    background: rgba(77, 154, 255, 0.1);
  }

  span:last-child {
    background: rgba(255, 209, 137, 0.1);
    border-radius: 8px;
    padding: 4px 8px;
  }
`,t=a.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`,Ci=a.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,k=a.div`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.78);
  padding: 18px;
  display: grid;
  gap: 8px;
  min-height: 132px;

  svg {
    font-size: 24px;
    color: #ffd08a;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
  }
`,Li=a.section`
  margin-top: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at 15% 10%, rgba(74, 156, 255, 0.24), transparent 40%),
    radial-gradient(circle at 85% 12%, rgba(255, 194, 112, 0.22), transparent 44%),
    linear-gradient(140deg, rgba(8, 13, 27, 0.94), rgba(11, 18, 34, 0.9));
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 26px 70px rgba(3, 7, 15, 0.62);

  h2 {
    margin: 0;
    font-size: clamp(28px, 5.2vw, 42px);
  }

  p {
    margin: 12px auto 0;
    max-width: 64ch;
    color: rgba(255, 255, 255, 0.8);
  }
`,Mi=a(N)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,Ei=()=>{const{t:r,i18n:$}=q(),l=e=>new Intl.NumberFormat($.resolvedLanguage||$.language).format(e),f=(e,n)=>{const c=l(n),x=e.replace(/(EUR\s*)[\d.,]+/,`$1${c}`);if(x!==e)return x;const I=e.replace(/[\d.,]+/,c);return I!==e?I:`EUR ${c}`},V=(e,n,c)=>{const x=e.replace(/(EUR\s*)[\d.,]+\s*[-–]\s*[\d.,]+/,`$1${l(n)}–${l(c)}`);return x!==e?x:`EUR ${l(n)}–${l(c)}`},[g,P]=X.useState("monthly"),K=["starter","business","pro"],_=["basic","standard","premium"],W=K.map(e=>({key:e,recommended:e==="business",name:r(`pricing.packages.${e}.name`),desc:r(`pricing.packages.${e}.desc`),price:f(r(`pricing.packages.${e}.price`),p[e].priceFrom),range:V(r(`pricing.packages.${e}.range`),p[e].rangeFrom,p[e].rangeTo),core:r(`pricing.packages.${e}.core`,{returnObjects:!0}),plus:r(`pricing.packages.${e}.plus`,{returnObjects:!0}),outcome:r(`pricing.packages.${e}.outcome`),subscriptionPrice:f(r(`pricing.packages.${e}.subscription.${g}.price`),g==="monthly"?p[e].supportMonthly:p[e].supportYearly),subscriptionMeta:r(`pricing.packages.${e}.subscription.${g}.meta`),subscriptionItems:r(`pricing.packages.${e}.subscription.includes`,{returnObjects:!0})})),D=_.map(e=>({key:e,recommended:e==="standard",name:r(`pricing.aiMusic.packages.${e}.name`),desc:r(`pricing.aiMusic.packages.${e}.desc`),price:r(`pricing.aiMusic.packages.${e}.price`,{defaultValue:`EUR ${J[e].price}`}),range:r(`pricing.aiMusic.packages.${e}.range`),includes:r(`pricing.aiMusic.packages.${e}.includes`,{returnObjects:!0}),outcome:r(`pricing.aiMusic.packages.${e}.outcome`)}));return i.jsx(pi,{children:i.jsx(Q,{children:i.jsxs(di,{children:[i.jsxs(li,{as:o.section,initial:"hidden",animate:"show",variants:ti,transition:{duration:.64,ease:Z},children:[i.jsxs(gi,{children:[i.jsxs("h1",{children:[r("pricing.hero.titleLine1"),i.jsx("br",{}),r("pricing.hero.titleLine2"),i.jsx("br",{}),i.jsx(xi,{children:f(r("pricing.hero.titleLine3"),p.starter.priceFrom)})]}),i.jsx("p",{children:r("pricing.hero.subtitle")}),i.jsx(hi,{children:i.jsxs(N,{to:"/kontakt",children:[i.jsx(S,{})," ",r("pricing.hero.cta")]})})]}),i.jsx(bi,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:i.jsxs(mi,{children:[i.jsxs(v,{children:[i.jsx("strong",{children:r("pricing.hero.metrics.leadVolume")}),i.jsx(w,{children:i.jsx(y,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),i.jsxs(v,{children:[i.jsx("strong",{children:r("pricing.hero.metrics.qualifiedLeads")}),i.jsx(w,{children:i.jsx(y,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),i.jsxs(v,{children:[i.jsx("strong",{children:r("pricing.hero.metrics.costPerLead")}),i.jsx(w,{children:i.jsx(y,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),i.jsxs(ui,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[i.jsxs(h,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[i.jsx(F,{}),r("pricing.hero.funnel.traffic")]}),i.jsxs(h,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[i.jsx(z,{}),r("pricing.hero.funnel.landing")]}),i.jsxs(h,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[i.jsx(C,{}),r("pricing.hero.funnel.leads")]}),i.jsxs(h,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[i.jsx(L,{}),r("pricing.hero.funnel.crm")]}),i.jsxs(h,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[i.jsx(M,{}),r("pricing.hero.funnel.sales")]})]})]})})]}),i.jsxs(ji,{children:[i.jsx("h2",{children:r("pricing.flow.title")}),i.jsx(fi,{children:i.jsxs(vi,{children:[i.jsxs(b,{whileHover:{y:-3},children:[i.jsx(F,{}),r("pricing.flow.steps.traffic")]}),i.jsxs(b,{whileHover:{y:-3},children:[i.jsx(z,{}),r("pricing.flow.steps.landing")]}),i.jsxs(b,{whileHover:{y:-3},children:[i.jsx(C,{}),r("pricing.flow.steps.capture")]}),i.jsxs(b,{whileHover:{y:-3},children:[i.jsx(L,{}),r("pricing.flow.steps.crm")]}),i.jsxs(b,{whileHover:{y:-3},children:[i.jsx(M,{}),r("pricing.flow.steps.sales")]})]})})]}),i.jsxs(m,{children:[i.jsx("h2",{children:r("pricing.packages.title")}),i.jsx(E,{children:r("pricing.packages.subtitle")}),i.jsxs(wi,{role:"tablist","aria-label":r("pricing.packages.subscriptionTitle"),children:[i.jsx(H,{type:"button",$active:g==="monthly",onClick:()=>P("monthly"),children:r("pricing.packages.billing.monthly")}),i.jsx(H,{type:"button",$active:g==="yearly",onClick:()=>P("yearly"),children:r("pricing.packages.billing.yearly")})]}),i.jsx(O,{children:W.map(e=>i.jsxs(R,{$recommended:e.recommended,whileHover:{y:e.recommended?-6:-4},transition:{duration:.25},children:[e.recommended?i.jsx(B,{children:r("pricing.packages.badge")}):null,i.jsx("h3",{children:e.name}),i.jsx("p",{children:e.desc}),i.jsx(T,{children:r("pricing.packages.websiteCreationLabel")}),i.jsx(A,{children:e.price}),i.jsx(G,{children:e.range}),i.jsx(yi,{children:r("pricing.packages.introOfferNote")}),i.jsx(u,{children:r("pricing.packages.coreTitle")}),i.jsx(j,{children:e.core.map(n=>i.jsxs("li",{children:[i.jsx(s,{})," ",n]},n))}),i.jsx(u,{children:r("pricing.packages.plusTitle")}),i.jsx(j,{children:e.plus.map(n=>i.jsxs("li",{children:[i.jsx(s,{})," ",n]},n))}),i.jsxs(ki,{children:[i.jsx($i,{children:r("pricing.packages.optionalSupportLabel")}),i.jsx(Pi,{children:r("pricing.packages.subscriptionTitle")}),i.jsx(Ii,{children:e.subscriptionPrice}),i.jsx(Si,{children:e.subscriptionMeta}),i.jsx(u,{children:r("pricing.packages.subscriptionIncludesTitle")}),i.jsx(j,{children:e.subscriptionItems.map(n=>i.jsxs("li",{children:[i.jsx(s,{})," ",n]},n))})]}),i.jsxs(Y,{children:[i.jsx("strong",{children:r("pricing.packages.outcomeLabel")})," ",e.outcome]})]},e.key))})]}),i.jsxs(m,{children:[i.jsx("h2",{children:r("pricing.aiMusic.title")}),i.jsx(E,{children:r("pricing.aiMusic.subtitle")}),i.jsx(O,{children:D.map(e=>i.jsxs(R,{$recommended:e.recommended,whileHover:{y:e.recommended?-6:-4},transition:{duration:.25},children:[e.recommended?i.jsx(B,{children:r("pricing.packages.badge")}):null,i.jsx("h3",{children:e.name}),i.jsx("p",{children:e.desc}),i.jsx(T,{children:r("pricing.aiMusic.packageLabel")}),i.jsx(A,{children:e.price}),i.jsx(G,{children:e.range}),i.jsx(u,{children:r("pricing.packages.coreTitle")}),i.jsx(j,{children:e.includes.map(n=>i.jsxs("li",{children:[i.jsx(s,{})," ",n]},n))}),i.jsxs(Y,{children:[i.jsx("strong",{children:r("pricing.packages.outcomeLabel")})," ",e.outcome]})]},e.key))})]}),i.jsxs(m,{children:[i.jsx("h2",{children:r("pricing.comparison.title")}),i.jsxs(Fi,{children:[i.jsxs(zi,{children:[i.jsx("span",{children:r("pricing.comparison.headers.feature")}),i.jsx("span",{children:r("pricing.comparison.headers.starter")}),i.jsx("span",{children:r("pricing.comparison.headers.business")}),i.jsx("span",{children:r("pricing.comparison.headers.pro")})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.landing")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.multi")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.crm")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.ai")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.ads")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]}),i.jsxs(d,{children:[i.jsx("span",{children:r("pricing.comparison.rows.dashboard")}),i.jsx("span",{children:r("pricing.comparison.no")}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]}),i.jsxs(t,{children:[i.jsx(s,{})," ",r("pricing.comparison.yes")]})]})]})]}),i.jsxs(m,{children:[i.jsx("h2",{children:r("pricing.trust.title")}),i.jsxs(Ci,{children:[i.jsxs(k,{children:[i.jsx(ii,{}),i.jsx("strong",{children:r("pricing.trust.delivery.title")}),i.jsx("p",{children:r("pricing.trust.delivery.desc")})]}),i.jsxs(k,{children:[i.jsx(ri,{}),i.jsx("strong",{children:r("pricing.trust.support.title")}),i.jsx("p",{children:r("pricing.trust.support.desc")})]}),i.jsxs(k,{children:[i.jsx(ei,{}),i.jsx("strong",{children:r("pricing.trust.dsgvo.title")}),i.jsx("p",{children:r("pricing.trust.dsgvo.desc")})]})]})]}),i.jsxs(Li,{children:[i.jsx("h2",{children:r("pricing.final.title")}),i.jsx("p",{children:r("pricing.final.subtitle")}),i.jsxs(Mi,{to:"/kontakt",children:[i.jsx(S,{})," ",r("pricing.final.cta")]})]})]})})})};export{Ei as default};
