import{g as _,u as $,x as d,j as e,P as O,a as U,H,y as Y,o as u,T as X,M as m,C as y,S as k,a6 as D,k as Q,f as q,a7 as Z,a8 as A,a2 as L,G as J,n as W,B as ee,b as re,F as se}from"./DFLlu5Fn.js";const N=""+new URL("BZW9LnVG.jpg",import.meta.url).href,C=""+new URL("CZJ1euxS.jpg",import.meta.url).href,G=""+new URL("Byl6jOLf.jpg",import.meta.url).href,M=""+new URL("Bd-7i7_Y.jpg",import.meta.url).href,R=""+new URL("BefjFQXO.jpg",import.meta.url).href,P=""+new URL("CMYu6dTK.jpg",import.meta.url).href,ae=_.div`
  @keyframes chartPulse {
    0%,
    100% {
      opacity: 0.78;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes drawLine {
    from {
      stroke-dashoffset: 180;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes flowGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes neonPulse {
    0%,
    100% {
      opacity: 0.78;
      text-shadow: 0 0 10px rgba(104, 207, 255, 0.32);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 18px rgba(110, 236, 255, 0.62);
    }
  }

  @keyframes lineFlow {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -40;
    }
  }

  @keyframes dashboardBreath {
    0%,
    100% {
      border-color: rgba(124, 193, 255, 0.32);
      background-position: 0% 50%;
      box-shadow:
        0 0 0 1px rgba(125, 210, 255, 0.2) inset,
        0 24px 50px rgba(2, 8, 20, 0.52);
    }
    50% {
      border-color: rgba(124, 220, 255, 0.52);
      background-position: 100% 50%;
      box-shadow:
        0 0 0 1px rgba(141, 218, 255, 0.28) inset,
        0 30px 60px rgba(3, 12, 28, 0.62);
    }
  }

  @keyframes metricFloat {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes tileGlow {
    0%,
    100% {
      border-color: rgba(111, 178, 255, 0.18);
      background-color: rgba(11, 15, 27, 0.75);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
    }
    50% {
      border-color: rgba(116, 210, 255, 0.46);
      background-color: rgba(13, 22, 38, 0.92);
      box-shadow: 0 16px 34px rgba(8, 31, 61, 0.36);
    }
  }

  .references-page {
    background:
      radial-gradient(960px 400px at 12% -10%, rgba(27, 116, 255, 0.22), transparent 60%),
      radial-gradient(700px 360px at 86% 2%, rgba(33, 244, 178, 0.12), transparent 66%),
      linear-gradient(180deg, #060b14 0%, #0b1220 45%, #0b0f17 100%);
  }

  .references-hero h1,
  .references-title {
    font-family: 'Geist', 'Inter', 'Segoe UI', sans-serif;
    background: linear-gradient(90deg, #89d2ff, #4fb4ff, #9cefbf);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .references-hero-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1.1fr 1fr;
    align-items: stretch;
  }

  .references-hero-copy {
    display: grid;
    gap: 12px;
  }

  .references-hero-dashboard {
    position: relative;
    display: grid;
    gap: 12px;
    background:
      radial-gradient(360px 140px at 76% -16%, rgba(76, 151, 255, 0.35), transparent 64%),
      rgba(8, 19, 34, 0.88);
    background-size: 150% 150%;
    border-color: rgba(124, 193, 255, 0.42);
    box-shadow:
      0 0 0 1px rgba(125, 210, 255, 0.2) inset,
      0 24px 50px rgba(2, 8, 20, 0.52);
    animation: dashboardBreath 8.6s ease-in-out infinite;
  }

  .references-hero-dashboard::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 14px;
    pointer-events: none;
    background: radial-gradient(400px 90px at var(--glow-x, 20%) 0%, rgba(96, 206, 255, 0.15), transparent 65%);
    animation: shimmer 9.2s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      --glow-x: 10%;
      opacity: 0.45;
    }
    50% {
      --glow-x: 85%;
      opacity: 0.95;
    }
  }

  .references-dashboard-label {
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(194, 225, 255, 0.84);
  }

  .references-kpi-row {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .references-kpi-item {
    display: grid;
    gap: 2px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid rgba(137, 209, 255, 0.3);
    background: rgba(12, 29, 52, 0.64);
    animation: metricFloat 6.2s ease-in-out infinite;
  }

  .references-kpi-item:nth-child(2) {
    animation-delay: -1.7s;
  }

  .references-kpi-item:nth-child(3) {
    animation-delay: -3.4s;
  }

  .references-kpi-value {
    font-size: clamp(24px, 3.4vw, 38px);
    line-height: 1;
    font-weight: 800;
    color: #d6f5ff;
    text-shadow: 0 0 16px rgba(83, 170, 255, 0.36);
    animation: neonPulse 3.8s ease-in-out infinite;
  }

  .references-kpi-label {
    font-size: 13px;
    color: rgba(210, 230, 255, 0.84);
  }

  .references-growth-chart-wrap {
    border-radius: 12px;
    border: 1px solid rgba(135, 212, 255, 0.24);
    background: rgba(7, 18, 33, 0.76);
    padding: 10px 12px;
  }

  .references-chart-label {
    font-size: 12px;
    color: rgba(190, 214, 241, 0.82);
    margin-bottom: 6px;
  }

  .references-growth-chart {
    width: 100%;
    height: 96px;
  }

  .references-growth-chart path {
    fill: none;
    stroke: url(#refsGrowth);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: drawLine 1.2s ease-out both, chartPulse 2.2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(72, 186, 255, 0.45));
  }

  .references-filter-wrap {
    display: grid;
    gap: 10px;
  }

  .references-filter-groups {
    display: grid;
    gap: 12px;
  }

  .references-filter-group {
    display: grid;
    gap: 8px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid rgba(130, 177, 245, 0.2);
    background: rgba(7, 17, 33, 0.58);
  }

  .references-filter-group-label {
    font-size: 12px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(188, 215, 249, 0.75);
  }

  .references-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .references-filter-chip {
    border-radius: 999px;
    border: 1px solid rgba(169, 208, 255, 0.28);
    background: rgba(14, 34, 60, 0.72);
    color: rgba(219, 237, 255, 0.92);
    font-size: 15px;
    font-weight: 700;
    padding: 10px 16px;
    transition:
      border-color var(--dur-fast) var(--ease-smooth),
      background var(--dur-fast) var(--ease-smooth),
      transform var(--dur-fast) var(--ease-smooth),
      box-shadow var(--dur-fast) var(--ease-smooth);
  }

  .references-filter-chip:hover {
    transform: translateY(-1px) scale(1.02);
    border-color: rgba(122, 203, 255, 0.84);
    box-shadow: 0 8px 22px rgba(54, 134, 248, 0.28);
  }

  .references-filter-chip:focus-visible {
    outline: 2px solid rgba(121, 193, 255, 0.95);
    outline-offset: 2px;
  }

  .references-filter-chip.active {
    border-color: rgba(121, 200, 255, 0.96);
    background: linear-gradient(110deg, rgba(21, 67, 112, 0.9), rgba(11, 47, 86, 0.94));
    color: #dff5ff;
    box-shadow:
      0 0 0 1px rgba(119, 188, 255, 0.42) inset,
      0 8px 24px rgba(17, 95, 180, 0.3);
  }

  .references-metric-band .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .references-metric-card {
    position: relative;
    display: grid;
    gap: 8px;
    animation: tileGlow 7.8s ease-in-out infinite;
  }

  .references-metric-card > * {
    min-width: 0;
  }

  .references-metric-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    pointer-events: none;
    background: linear-gradient(120deg, rgba(75, 167, 255, 0.04), rgba(83, 251, 207, 0.14), rgba(75, 167, 255, 0.04));
    background-size: 220% 220%;
    animation: flowGlow 6.2s ease-in-out infinite;
    opacity: 0.8;
  }

  .references-metric-card:nth-child(2n) {
    animation-delay: -1.4s, -1.4s;
  }

  .references-metric-card:nth-child(3n) {
    animation-delay: -2.9s, -2.9s;
  }

  .references-metric-card:nth-child(5n) {
    animation-delay: -4.3s, -4.3s;
  }

  .references-metric-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-width: 0;
  }

  .references-metric-card h3 {
    flex: 1 1 150px;
    min-width: 0;
    margin-bottom: 0;
    overflow-wrap: anywhere;
  }

  .references-kpi-badge {
    display: inline-flex;
    flex: 0 1 auto;
    align-items: center;
    gap: 6px;
    max-width: 100%;
    box-sizing: border-box;
    border-radius: 999px;
    border: 1px solid rgba(106, 245, 191, 0.44);
    background: rgba(36, 190, 139, 0.18);
    color: #95f4cc;
    font-weight: 700;
    font-size: 13px;
    padding: 4px 10px;
    white-space: nowrap;
  }

  .references-metric-line {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    color: rgba(220, 234, 252, 0.86);
  }

  .references-sparkline {
    width: 100%;
    height: 52px;
    opacity: 0.9;
  }

  .references-sparkline path {
    fill: none;
    stroke: #66d4ff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 8px rgba(102, 212, 255, 0.45));
  }

  .references-case-card {
    display: grid;
    gap: 10px;
  }

  .references-case-label {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(140, 194, 255, 0.84);
    margin-bottom: 4px;
  }

  .references-case-block p {
    color: rgba(224, 235, 248, 0.92);
  }

  .references-case-result {
    padding: 10px;
    border-radius: 12px;
    border: 1px solid rgba(103, 245, 183, 0.3);
    background: rgba(20, 61, 51, 0.25);
    display: grid;
    gap: 6px;
    margin-top: 2px;
  }

  .references-case-result p {
    font-size: 22px;
    font-weight: 800;
  }

  .references-case-result span {
    color: #90f7cb;
    text-shadow: 0 0 12px rgba(63, 233, 163, 0.38);
  }

  .references-compare-shell {
    display: grid;
    gap: 14px;
  }

  .references-compare-chart {
    border-radius: 18px;
    border: 1px solid rgba(118, 173, 255, 0.34);
    background: linear-gradient(180deg, rgba(7, 18, 33, 0.94), rgba(6, 16, 29, 0.96));
    padding: 14px;
    box-shadow: 0 20px 40px rgba(2, 8, 20, 0.45);
  }

  .references-compare-graph {
    width: 100%;
    height: clamp(260px, 34vw, 420px);
    border-radius: 12px;
    background: rgba(5, 14, 26, 0.72);
  }

  .references-compare-graph .grid-line {
    stroke: rgba(145, 187, 245, 0.2);
    stroke-width: 0.5;
    stroke-dasharray: 2 2;
  }

  .references-compare-graph .axis-line {
    stroke: rgba(180, 215, 255, 0.45);
    stroke-width: 0.75;
  }

  .references-compare-graph .before-line {
    fill: none;
    stroke: #f97316;
    stroke-width: 2.2;
    filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.35));
  }

  .references-compare-graph .after-line {
    fill: none;
    stroke: #22d3ee;
    stroke-width: 2.8;
    filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.45));
  }

  .references-compare-graph .before-point {
    fill: #fb923c;
    stroke: rgba(26, 13, 5, 0.9);
    stroke-width: 0.45;
  }

  .references-compare-graph .after-point {
    fill: #22d3ee;
    stroke: rgba(3, 24, 30, 0.95);
    stroke-width: 0.5;
  }

  .references-compare-graph .point-delta {
    font-size: 2.6px;
    font-weight: 700;
    text-anchor: middle;
    paint-order: stroke;
    stroke: rgba(4, 11, 20, 0.85);
    stroke-width: 0.55px;
    stroke-linejoin: round;
  }

  .references-compare-graph .point-delta.before {
    fill: #ffb171;
  }

  .references-compare-graph .point-delta.after {
    fill: #a6f3ff;
  }

  .references-compare-days {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 8px;
    margin-top: 10px;
  }

  .references-compare-days span {
    font-size: 12px;
    color: rgba(189, 214, 243, 0.82);
    text-align: center;
  }

  .references-compare-legend {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    color: rgba(223, 239, 255, 0.9);
    font-size: 13px;
  }

  .references-compare-legend .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
  }

  .references-compare-legend .dot.before {
    background: #f97316;
    box-shadow: 0 0 8px rgba(249, 115, 22, 0.45);
  }

  .references-compare-legend .dot.after {
    background: #22d3ee;
    box-shadow: 0 0 8px rgba(34, 211, 238, 0.45);
  }

  .references-compare-kpis {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .references-compare-kpis .kpi-panel {
    border-radius: 14px;
    padding: 14px;
    border: 1px solid rgba(130, 176, 245, 0.28);
    background: rgba(7, 17, 33, 0.74);
    display: grid;
    gap: 6px;
  }

  .references-compare-kpis .kpi-panel h3 {
    margin-bottom: 4px;
  }

  .references-compare-kpis .kpi-panel p {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .references-compare-kpis .kpi-panel.before span {
    color: #fb923c;
    font-weight: 700;
  }

  .references-compare-kpis .kpi-panel.after span {
    color: #6ee7ff;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .references-hero-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 767px) {
    .references-kpi-row {
      grid-template-columns: 1fr;
    }

    .references-filter-chip {
      width: 100%;
      justify-content: center;
    }

    .references-compare-kpis {
      grid-template-columns: 1fr;
    }
  }

`,ne={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},ie=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],B=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:N,afterImage:C},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:G,afterImage:M},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:R,afterImage:P},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:G,afterImage:C},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:N,afterImage:P},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:R,afterImage:M}],ce=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],te=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],v={traffic:"-12%",leads:"-18%",conversion:"-9%"},K={traffic:"+32%",leads:"+41%",conversion:"+27%"},oe=[0,15,30,45,60,75,90],F=[11,10,10,9,10,9,10],V=[8,14,21,29,38,48,58],b=(r,a,i)=>Math.max(a,Math.min(i,r)),E="M 0 99 C 30 72, 70 30, 100 1",T="M 0 39 C 35 30, 68 14, 100 1",S=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],j=r=>{if(r.length<2)return E;const a=.1;let i=`M ${r[0].x.toFixed(2)} ${r[0].y.toFixed(2)}`;for(let t=0;t<r.length-1;t+=1){const f=r[t-1]??r[t],c=r[t],o=r[t+1],l=r[t+2]??o,g=c.x+(o.x-f.x)*a/6,h=c.y+(o.y-f.y)*a/6,p=o.x-(l.x-c.x)*a/6,x=o.y-(l.y-c.y)*a/6;i+=` C ${g.toFixed(2)} ${h.toFixed(2)}, ${p.toFixed(2)} ${x.toFixed(2)}, ${o.x.toFixed(2)} ${o.y.toFixed(2)}`}return i},le=r=>{const t=S.map((f,c)=>{const o=0+100*c/(S.length-1),l=Math.sin(r*1.1+c*1.05)*6.8,g=Math.sin(r*.72+c*.46)*3.4,h=Math.sin(r*1.8+c*1.7)*1.6,p=b(f+l+g+h,1,99);return{x:o,y:p}});return j(t)},fe=(r,a)=>{if(!r||r.length<2)return T;const i=Math.min(...r),t=Math.max(...r),f=Math.max(1,t-i),c=r.map((o,l)=>{const g=l/(r.length-1)*100,p=39-(o-i)/f*38,x=Math.sin(a*1.15+l*1.2)*3.6,w=Math.sin(a*.74+l*.52)*2,s=Math.sin(a*1.9+l*1.65)*.9,n=b(p+x+w+s,1,39);return{x:g,y:n}});return j(c)},I=r=>r.map((i,t)=>{const f=t/(r.length-1)*100,c=b(56-i/60*52,2,58);return{x:f,y:c,value:i}}),z=(r,a)=>{if(a===0)return"*";const i=r[a]-r[a-1];return i>0?`+${i}`:i<0?`${i}`:"0"},pe=()=>{const{t:r}=$(),[a,i]=d.useState("all"),[t,f]=d.useState(0),c=d.useMemo(()=>B.filter(s=>a==="all"||s.category===a),[a]),o=d.useMemo(()=>ie.filter(s=>a==="all"||s.niche===a),[a]),l=c[0]??B[0],g=d.useMemo(()=>le(t)||E,[t]),h=d.useMemo(()=>I(F),[]),p=d.useMemo(()=>I(V),[]),x=d.useMemo(()=>j(h),[h]),w=d.useMemo(()=>j(p),[p]);return d.useEffect(()=>{const s=window.setInterval(()=>{f(n=>(n+.12)%(Math.PI*8))},70);return()=>window.clearInterval(s)},[]),e.jsx(ae,{children:e.jsx(O,{className:"references-page",children:e.jsxs(U,{children:[e.jsx(H,{className:"references-hero",as:u.section,initial:"hidden",animate:"show",variants:ne,transition:{duration:.62,ease:Y},children:e.jsxs("div",{className:"references-hero-grid",children:[e.jsxs("div",{className:"references-hero-copy",children:[e.jsx("h1",{children:e.jsx(X,{text:r("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),e.jsx("p",{children:r("references.subtitle")}),e.jsx(m,{children:r("references.trustline")})]}),e.jsxs(y,{className:"references-hero-dashboard",as:u.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[e.jsx("p",{className:"references-dashboard-label",children:r("references.performanceDashboard")}),e.jsx("div",{className:"references-kpi-row",children:te.map((s,n)=>e.jsxs(u.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:n*.45,repeat:1/0,ease:"easeInOut"},children:[e.jsx("span",{className:"references-kpi-value",children:s.value}),e.jsx("span",{className:"references-kpi-label",children:r(s.label)})]},s.label))}),e.jsxs("div",{className:"references-growth-chart-wrap",children:[e.jsx("p",{className:"references-chart-label",children:r("references.growthCurve90")}),e.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":r("references.growthChartAria"),children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),e.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),e.jsx("path",{d:g})]})]})]})]})}),e.jsxs(k,{className:"references-filter-wrap",children:[e.jsxs("h2",{className:"references-title",children:[e.jsx(D,{})," ",r("references.filterTitle")]}),e.jsx(m,{children:r("references.counter",{count:c.length})}),e.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":r("references.filterAria"),children:ce.map(s=>e.jsxs("div",{className:"references-filter-group",children:[e.jsx("p",{className:"references-filter-group-label",children:r(s.label)}),e.jsx("div",{className:"references-filters",children:s.items.map(n=>e.jsx("button",{type:"button",className:`references-filter-chip ${a===n?"active":""}`,onClick:()=>i(n),role:"tab","aria-selected":a===n,children:r(n==="all"?"references.filters.all":`references.niches.${n}`)},n))})]},s.label))})]}),e.jsxs(k,{className:"references-metric-band",children:[e.jsxs("h2",{className:"references-title",children:[e.jsx(Q,{})," ",r("references.growthByNiche")]}),e.jsx(q,{className:"grid-3",children:o.map((s,n)=>e.jsxs(y,{className:"references-metric-card",as:u.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:n*.18,repeat:1/0,ease:"easeInOut"},children:[e.jsxs("div",{className:"references-metric-head",children:[e.jsx("h3",{children:r(s.labelKey)}),e.jsxs("span",{className:"references-kpi-badge",children:[e.jsx(Z,{})," ",s.metricValue]})]}),e.jsx("p",{className:"references-metric-line",children:r(s.metricLabelKey)}),e.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":r("references.trendAria",{niche:r(s.labelKey)}),children:e.jsx("path",{d:fe(s.sparkline,t+n*.9)||T})}),e.jsxs(m,{children:[e.jsx(A,{})," ",r("references.periodLabel"),": ",s.timeframe," ",r("references.daysUnit")]}),e.jsxs(m,{children:[e.jsx(L,{})," ",r("references.measurementLabel"),": ",s.source]})]},s.labelKey))})]}),e.jsxs(k,{className:"references-cases",children:[e.jsx("h2",{className:"references-title",children:r("references.selectedCases")}),c.length===0?e.jsxs(y,{children:[e.jsx("h3",{children:r("references.emptyTitle")}),e.jsx(m,{children:r("references.emptyText")})]}):e.jsx(J,{children:c.map(s=>e.jsxs(y,{className:"references-case-card",children:[e.jsx("h3",{children:r(s.titleKey)}),e.jsxs("div",{className:"references-case-block",children:[e.jsx("p",{className:"references-case-label",children:r("references.challengeLabel")}),e.jsx("p",{children:r(s.challengeKey)})]}),e.jsxs("div",{className:"references-case-block",children:[e.jsx("p",{className:"references-case-label",children:r("references.solutionLabel")}),e.jsx("p",{children:r(s.solutionKey)})]}),e.jsxs("div",{className:"references-case-result",children:[e.jsx("p",{className:"references-case-label",children:r("references.resultLabel")}),s.metrics.map(n=>e.jsxs("p",{children:[r(n.metricLabelKey),": ",e.jsx("span",{children:n.metricValue})]},`${s.id}-${n.metricLabelKey}`))]}),e.jsxs(m,{children:[e.jsx(A,{})," ",r("references.periodLabel"),": ",s.timeframe," ",r("references.daysUnit")]}),e.jsxs(m,{children:[e.jsx(L,{})," ",r("references.measurementLabel"),": ",s.source]})]},s.id))})]}),e.jsxs(k,{children:[e.jsx("h2",{className:"references-title",children:r("references.beforeAfter")}),e.jsxs("div",{className:"references-compare-shell",children:[e.jsxs("div",{className:"references-compare-chart",children:[e.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":r("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(s=>e.jsx("line",{x1:s,y1:"0",x2:s,y2:"60",className:"grid-line"},`vx-${s}`)),[8,16,24,32,40,48,56].map(s=>e.jsx("line",{x1:"0",y1:s,x2:"100",y2:s,className:"grid-line"},`hy-${s}`)),e.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),e.jsx("path",{className:"before-line",d:x}),e.jsx("path",{className:"after-line",d:w}),h.map((s,n)=>e.jsxs("g",{children:[e.jsx("circle",{className:"before-point",cx:s.x,cy:s.y,r:"1.2"}),e.jsx("text",{className:"point-delta before",x:s.x,y:b(s.y+4.4,4,59),children:z(F,n)})]},`before-point-${n}`)),p.map((s,n)=>e.jsxs("g",{children:[e.jsx("circle",{className:"after-point",cx:s.x,cy:s.y,r:"1.4"}),e.jsx("text",{className:"point-delta after",x:s.x,y:b(s.y-2.2,1.5,58),children:z(V,n)})]},`after-point-${n}`))]}),e.jsx("div",{className:"references-compare-days",children:oe.map(s=>e.jsx("span",{children:r("references.dayLabel",{day:s})},s))}),e.jsxs("div",{className:"references-compare-legend",children:[e.jsxs("span",{children:[e.jsx("i",{className:"dot before"})," ",r("references.beforeLegend")]}),e.jsxs("span",{children:[e.jsx("i",{className:"dot after"})," ",r("references.afterLegend")]})]})]}),e.jsxs("div",{className:"references-compare-kpis",children:[e.jsxs("div",{className:"kpi-panel before",children:[e.jsx("h3",{children:r("references.before")}),e.jsxs("p",{children:[r("references.kpis.traffic")," ",e.jsx("span",{children:v.traffic})]}),e.jsxs("p",{children:[r("references.kpis.leads")," ",e.jsx("span",{children:v.leads})]}),e.jsxs("p",{children:[r("references.kpis.conversion")," ",e.jsx("span",{children:v.conversion})]})]}),e.jsxs("div",{className:"kpi-panel after",children:[e.jsx("h3",{children:r("references.after")}),e.jsxs("p",{children:[r("references.kpis.traffic")," ",e.jsx("span",{children:K.traffic})]}),e.jsxs("p",{children:[r("references.kpis.leads")," ",e.jsx("span",{children:K.leads})]}),e.jsxs("p",{children:[r("references.kpis.conversion")," ",e.jsx("span",{children:K.conversion})]})]})]})]}),e.jsxs(m,{children:[r("references.periodLabel"),": ",l.timeframe," ",r("references.daysUnit")," · ",r("references.measurementLabel"),": ",l.source]})]}),e.jsxs(W,{children:[e.jsx("h2",{children:r("references.ctaTitle")}),e.jsx(m,{children:r("references.ctaText")}),e.jsx(ee,{children:e.jsxs(re,{to:"/kontakt",children:[e.jsx(se,{})," ",r("references.cta")]})})]})]})})})};export{pe as default};
