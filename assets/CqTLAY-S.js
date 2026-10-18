import{g as t,o as S,p as ee,E as i,C as be,q as me,r as he,u as ae,j as a,s as fe,t as h,v as ve,w as we,x as o,a as ye,y as A,z as je,T as ke,A as $e,D as Ve,J as G,K as Se,L as ze,N as Ce,O as _,Q as Le,R as b,U as Fe,V as Me,W as Ee,X as Re,d as Ie,Y as Te}from"./B8R3ppdB.js";const Ye=""+new URL("D23lH-wW.webp",import.meta.url).href,He=t.div`
  padding: 0 0 84px;

  @media (max-width: 991px) {
    padding: 0 0 72px;
  }
`,Pe=t(S.section)`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: stretch;
  min-height: calc(100svh - 76px);
  padding: clamp(22px, 5vw, 48px) 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  transform: none;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(90deg, rgba(4, 7, 13, 0.9) 0%, rgba(4, 7, 13, 0.74) 42%, rgba(4, 7, 13, 0.34) 76%, rgba(4, 7, 13, 0.7) 100%),
    linear-gradient(180deg, rgba(4, 7, 13, 0.28) 0%, rgba(4, 7, 13, 0.18) 48%, rgba(4, 7, 13, 0.86) 100%),
    url(${Ye});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 991px) {
    min-height: calc(100svh - 72px);
  }

  @media (max-width: 767px) {
    min-height: calc(100svh - 66px);
    padding: 18px 0;
  }
`,We=t.div`
  position: relative;
  overflow: hidden;
  min-height: calc(100svh - 112px);
  box-sizing: border-box;
  width: min(1440px, calc(100vw - 40px));
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  transform: none;
  padding: 28px;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 188, 97, 0.12), transparent 24%),
    radial-gradient(circle at 100% 0%, rgba(72, 129, 255, 0.16), transparent 30%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.05), transparent 36%),
    rgba(5, 9, 18, 0.34);
  backdrop-filter: blur(2px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 32px 80px rgba(2, 8, 22, 0.36);

  &::before {
    content: '';
    position: absolute;
    inset: 18px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 28px 0 28px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.18), rgba(72, 129, 255, 0.18), rgba(72, 129, 255, 0));
    pointer-events: none;
  }

  @media (max-width: 767px) {
    min-height: auto;
    width: calc(100vw - 24px);
    margin-left: auto;
    margin-right: auto;
    transform: none;
    padding: 20px;
    border-radius: 24px;
  }
`,Xe=t.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 28px;
  align-items: stretch;

  @media (max-width: 1279px) {
    gap: 24px;
  }

  @media (max-width: 991px) {
    min-height: auto;
    gap: 24px;
  }
`,Ne=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 0 0;
`,Be=t.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-self: stretch;
  grid-template-columns: minmax(420px, 1.12fr) minmax(420px, 1fr);
  gap: 20px;
  align-items: stretch;
  padding: 14px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background:
    radial-gradient(circle at top right, rgba(255, 188, 97, 0.08), transparent 24%),
    linear-gradient(180deg, rgba(8, 13, 25, 0.82), rgba(6, 10, 20, 0.86));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.22), transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 1279px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 12px;
  }
`,De=t.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`,Ae=t.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 7px 14px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-size: var(--type-small);
  font-weight: 600;
  line-height: 1.4;
`,Ge=t.h1`
  width: min(100%, 48ch);
  margin: 0;
  margin-inline: auto;
  margin-bottom: 16px;
  font-size: var(--type-display-l);
  line-height: var(--leading-display);
  letter-spacing: -0.04em;
  /* text-wrap: balance; */

  @media (max-width: 1279px) {
    width: min(100%, 15ch);
  }

  @media (max-width: 767px) {
    max-width: 12ch;
  }
`,_e=t.p`
  max-width: 620px;
  margin: 0;
  margin-bottom: 0;
  color: var(--champagne-text);
  font-size: var(--type-body-lg);
  line-height: var(--leading-body);

  @media (max-width: 767px) {
    max-width: 52ch;
  }
`,te=ee`
  padding: 24px;
  border-radius: 28px;
  border-color: rgba(255, 255, 255, 0.09);
  background:
    radial-gradient(circle at top right, rgba(255, 180, 80, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(15, 21, 37, 0.96), rgba(9, 13, 24, 0.94));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 22px 52px rgba(2, 8, 22, 0.26);

  @media (max-width: 767px) {
    padding: 24px;
  }
`,qe=t(be)`
  ${te}
`,Ke=t(S.form)`
  ${te}
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(20px);
`,q=t(qe)`
  display: grid;
  gap: 14px;
`,V=t.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 10px;
  color: #ffcf94;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,K=t.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.02;
`,Ue=t.p`
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  line-height: 1.35;
`,g=t.div`
  display: grid;
  gap: 4px;
`,x=t.label`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
`,u=t(me)`
  gap: 8px;
  min-height: 46px;
  padding: 7px 12px;
  border-radius: 16px;
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.045);

  svg {
    color: rgba(255, 200, 138, 0.88);
  }

  input,
  textarea,
  select {
    font: inherit;
  }

  input,
  select {
    min-height: 26px;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  select {
    width: 100%;
    border: 0;
    background: transparent;
    color: #ffffff;
    outline: none;
  }

  option {
    color: #101321;
  }

  textarea {
    min-height: 82px;
    max-height: 96px;
  }
`,Oe=t.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.58);
  max-width: 36ch;
  font-size: 11px;
  line-height: 1.35;
`,U=t.p`
  margin: 8px 0 0;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid
    ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.35)":"rgba(255, 150, 150, 0.32)"};
  background: ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.12)":"rgba(255, 120, 120, 0.12)"};
  color: ${({$tone:e})=>e==="success"?"#bef7d0":"#ffd0d0"};
  font-size: 12px;
  line-height: 1.45;
`,Je=t.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Ze=t(he)`
  width: fit-content;
  min-height: auto;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 600;
  margin-top: 10px;

  &:disabled {
    cursor: wait;
    opacity: 0.7;
    transform: none;
    animation: none;
    box-shadow: none;
    filter: saturate(0.8);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`,Qe=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-weight: 600;
  line-height: 1.5;
`,ea=t.div`
  display: grid;
  gap: 8px;
`,re=ee`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  svg {
    margin-top: 3px;
    color: #ffb450;
  }

  strong {
    display: block;
    font-size: 15px;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 13px;
    line-height: 1.45;
  }
`;t.div`
  ${re}
`;const $=t.a`
  ${re}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`,aa=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ta=t.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.4;

  svg {
    color: #ffcf94;
  }
`,ra=t(S.section)`
  padding-top: 8px;
`,na=t.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`,ia=t(V)`
  color: rgba(255, 211, 148, 0.88);
`,oa=t.h3`
  margin: 0;
  font-size: clamp(22px, 2.8vw, 30px);
  line-height: 1.12;
`,sa=t.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.55;
`,la=t.div`
  display: grid;
  gap: 10px;
`,da=t.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    color: #121723;
    font-size: 13px;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(255, 190, 100, 0.96), rgba(255, 221, 173, 0.78));
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.78);
    font-size: 14px;
    line-height: 1.5;
  }
`,ne=i`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  30% {
    transform: translate3d(8px, -6px, 0) scale(1.03);
  }
  50% {
    transform: translate3d(14px, -10px, 0) scale(1.06);
  }
  70% {
    transform: translate3d(7px, -4px, 0) scale(1.025);
  }
`,ca=i`
  0%, 100% {
    transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1);
  }
  18% {
    transform: perspective(1200px) rotateX(0.8deg) rotateY(-1.2deg) translateY(-3px) scale(1.006);
  }
  36% {
    transform: perspective(1200px) rotateX(1.6deg) rotateY(-2deg) translateY(-6px) scale(1.012);
  }
  54% {
    transform: perspective(1200px) rotateX(-1.2deg) rotateY(2deg) translateY(6px) scale(0.996);
  }
  74% {
    transform: perspective(1200px) rotateX(0.7deg) rotateY(1.1deg) translateY(-2px) scale(1.004);
  }
`,pa=i`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`,ga=i`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`,xa=i`
  0% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.9;
  }
  100% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
`,ua=i`
  0% {
    transform: translateX(0) scale(0.84);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  55% {
    transform: translateX(calc(var(--beam-width) * 0.56)) scale(1.24);
    opacity: 1;
  }
  100% {
    transform: translateX(var(--beam-width)) scale(0.92);
    opacity: 0;
  }
`,ba=i`
  0% {
    transform: translate(-50%, -50%) scale(0.64);
    opacity: 0;
  }
  18% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.76);
    opacity: 0;
  }
`,ma=i`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`,ha=i`
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
    opacity: 0.96;
  }
  18% {
    transform: translate3d(calc(var(--move-one-x) * 0.42), calc(var(--move-one-y) * 0.42), 0) scale(1.014)
      rotate(calc(var(--rotate-one) * 0.4));
    opacity: 0.98;
  }
  36% {
    transform: translate3d(calc(var(--move-one-x) * 0.82), calc(var(--move-one-y) * 0.82), 0) scale(1.026)
      rotate(calc(var(--rotate-one) * 0.82));
    opacity: 1;
  }
  58% {
    transform: translate3d(calc(var(--move-two-x) * 0.9), calc(var(--move-two-y) * 0.9), 0) scale(0.99)
      rotate(calc(var(--rotate-two) * 0.9));
    opacity: 0.96;
  }
  78% {
    transform: translate3d(calc(var(--move-three-x) * 0.88), calc(var(--move-three-y) * 0.88), 0) scale(1.016)
      rotate(calc(var(--rotate-three) * 0.88));
    opacity: 1;
  }
  100% {
    transform: translate3d(var(--move-three-x), var(--move-three-y), 0) scale(1.02) rotate(var(--rotate-three));
    opacity: 0.98;
  }
`,ie=i`
  0%, 100% {
    transform: translateX(-160%) skewX(-18deg);
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  48% {
    opacity: 0.4;
  }
  60% {
    opacity: 0;
  }
  100% {
    transform: translateX(220%) skewX(-18deg);
  }
`,fa=i`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,va=t.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 100%;
  padding: 20px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background:
    linear-gradient(180deg, rgba(10, 16, 30, 0.92), rgba(7, 11, 20, 0.96)),
    radial-gradient(circle at 20% 12%, rgba(255, 195, 110, 0.1), transparent 42%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 22px 52px rgba(2, 8, 22, 0.28);
  isolation: isolate;
  backdrop-filter: blur(18px);
`,oe=t.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`,wa=t(oe)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${ne} 12s ease-in-out infinite;
`,ya=t(oe)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${ne} 14s ease-in-out infinite reverse;
`,ja=t.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`,ka=t.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,$a=t.p`
  margin: 0;
  max-width: 24ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  line-height: 1.3;
`,Va=t.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
`,Sa=t.div`
  display: grid;
  gap: 8px;
`,za=t.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px minmax(98px, 0.78fr);
  gap: 8px;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr) 30px minmax(96px, 0.86fr);
  }
`,O=t.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid
    ${({$tone:e})=>{switch(e){case"blue":return"rgba(102, 156, 255, 0.24)";case"green":return"rgba(84, 219, 174, 0.24)";case"gold":default:return"rgba(255, 188, 97, 0.24)"}}};
  background:
    ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(180deg, rgba(55, 96, 176, 0.18), rgba(18, 27, 45, 0.74))";case"green":return"linear-gradient(180deg, rgba(28, 118, 89, 0.18), rgba(18, 27, 45, 0.74))";case"gold":default:return"linear-gradient(180deg, rgba(143, 102, 34, 0.18), rgba(18, 27, 45, 0.74))"}}};
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
`,Ca=t.div`
  position: relative;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.36), rgba(88, 145, 255, 0.92));

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 10px;
    height: 10px;
    border-top: 2px solid rgba(88, 145, 255, 0.9);
    border-right: 2px solid rgba(88, 145, 255, 0.9);
    transform: translateY(-50%) rotate(45deg);
  }
`,La=t.div`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at top center, rgba(255, 188, 97, 0.16), transparent 34%),
    linear-gradient(180deg, rgba(13, 18, 31, 0.92), rgba(9, 12, 22, 0.96));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 56px rgba(3, 9, 20, 0.24);
`,Fa=t.span`
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,Ma=t.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  line-height: 1.05;
`,Ea=t.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
  line-height: 1.3;
`,Ra=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,J=t.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.78);
  font-size: 11px;
  line-height: 1.3;
`,Ia=t.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
`,Ta=t.div`
  display: grid;
  gap: 2px;
  padding: 8px 10px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  strong {
    color: rgba(255, 255, 255, 0.96);
    font-size: 14px;
    line-height: 1.2;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    line-height: 1.25;
  }
`;t.div`
  position: relative;
  min-height: 346px;
  z-index: 1;
  animation: ${ca} 12.6s ease-in-out infinite;
  transform-style: preserve-3d;
`;t.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  min-height: 260px;
`;t.div`
  position: relative;
  overflow: hidden;
  padding: 14px 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 46%, rgba(255, 255, 255, 0.02));
    pointer-events: none;
  }
`;t.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;t.strong`
  display: block;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
`;t.span`
  display: block;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
`;t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 28px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 186, 94, 0.14);
  border: 1px solid rgba(255, 186, 94, 0.22);
  color: #ffd59d;
  font-size: 11px;
  font-weight: 700;
  animation: ${ga} 1.8s ease-in-out infinite;
`;t.div`
  display: grid;
  gap: 10px;
`;t.div`
  position: relative;
  overflow: hidden;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 15, 28, 0.7);
`;t.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${({$width:e})=>`${e}%`};
  border-radius: inherit;
  transform-origin: left center;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(90deg, rgba(72, 129, 255, 0.18), rgba(108, 183, 255, 0.62))";case"green":return"linear-gradient(90deg, rgba(42, 189, 141, 0.18), rgba(88, 227, 178, 0.62))";case"gold":default:return"linear-gradient(90deg, rgba(255, 184, 87, 0.16), rgba(255, 214, 144, 0.62))"}}};
  animation: ${pa} 1.6s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;t.div`
  --beam-width: ${({$width:e})=>`${e}px`};
  position: absolute;
  width: ${({$width:e})=>`${e}px`};
  height: 4px;
  border-radius: 999px;
  transform: rotate(${({$rotate:e})=>`${e}deg`});
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.08), rgba(87, 147, 255, 0.84), rgba(255, 188, 97, 0.08));
  background-size: 200% 100%;
  animation: ${xa} ${({$duration:e})=>`${e}s`} ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  pointer-events: none;
  opacity: 0.44;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 184, 87, 0.2));
    box-shadow: 0 0 18px rgba(255, 205, 126, 0.56);
    transform: translateY(-50%);
    animation: ${ua} ${({$duration:e})=>`${Math.max(e-.4,1.2)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e*.5}s`};
  }
`;t.div`
  position: absolute;
  width: ${({$size:e})=>`${e}px`};
  height: ${({$size:e})=>`${e}px`};
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    border: 1px solid rgba(98, 160, 255, 0.3);
    box-shadow: 0 0 20px rgba(98, 160, 255, 0.14);
    animation: ${ba} ${({$duration:e})=>`${e}s`} ease-out infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${ma} ${({$duration:e})=>`${Math.max(e-.4,1.1)}s`} ease-in-out infinite;
    animation-delay: ${({$delay:e})=>`${(e*.5).toFixed(2)}s`};
  }
`;t.div`
  --move-one-x: ${({$x1:e})=>`${e}px`};
  --move-one-y: ${({$y1:e})=>`${e}px`};
  --move-two-x: ${({$x2:e})=>`${e}px`};
  --move-two-y: ${({$y2:e})=>`${e}px`};
  --move-three-x: ${({$x3:e})=>`${e}px`};
  --move-three-y: ${({$y3:e})=>`${e}px`};
  --rotate-one: ${({$r1:e})=>`${e}deg`};
  --rotate-two: ${({$r2:e})=>`${e}deg`};
  --rotate-three: ${({$r3:e})=>`${e}deg`};
  position: absolute;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(12, 16, 28, 0.62);
  backdrop-filter: blur(18px);
  box-shadow:
    0 22px 44px rgba(3, 9, 20, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${ha} ${({$duration:e})=>`${e}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform, opacity;

  &::after {
    content: '';
    position: absolute;
    top: -30%;
    bottom: -30%;
    width: 34%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
    filter: blur(6px);
    animation: ${ie} ${({$duration:e})=>`${Math.max(e-.4,1.4)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
    pointer-events: none;
  }
`;t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.88), rgba(92, 181, 255, 0.7))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.88), rgba(96, 230, 188, 0.66))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.84), rgba(173, 110, 255, 0.66))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.92), rgba(255, 211, 136, 0.7))"}}}; 
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  animation: ${fa} 2.4s ease-in-out infinite;
`;t.div`
  display: grid;
  gap: 3px;
`;t.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
`;t.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
`;const Ya=i`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,Ha=i`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`,Pa=i`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`,Wa=i`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`,Z=i`
  0% {
    transform: translate(-50%, -50%) scale(0.88);
    opacity: 0.18;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.28);
    opacity: 0.48;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.42);
    opacity: 0;
  }
`,Xa=i`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`,Na=i`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;t.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.88fr);
  gap: 18px;
  min-height: 344px;
`;t.div`
  display: grid;
  gap: 14px;
  align-content: start;
`;t.div`
  position: relative;
  overflow: hidden;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(16, 21, 36, 0.78), rgba(10, 14, 24, 0.84)),
    radial-gradient(circle at left center, rgba(255, 188, 97, 0.08), transparent 44%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  animation: ${Pa} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${Ha} 3.4s ease-in-out infinite;
    pointer-events: none;
  }
`;t.div`
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`;t.span`
  color: rgba(255, 211, 148, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;t.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  line-height: 1.4;
`;t.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }
`;t.div`
  --lane-gap: 12px;
  display: flex;
  gap: var(--lane-gap);
  width: max-content;
  transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  animation: ${Ya} ${({$duration:e})=>`${e}s`} linear infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform;
`;t.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
`;t.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  min-width: 188px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
  box-shadow:
    0 16px 32px rgba(3, 9, 20, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  animation: ${Na} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${ie} 6.8s linear infinite;
    pointer-events: none;
  }
`;t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 11px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.92), rgba(92, 181, 255, 0.72))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.92), rgba(96, 230, 188, 0.68))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.88), rgba(173, 110, 255, 0.68))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.94), rgba(255, 211, 136, 0.72))"}}};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`;t.div`
  display: grid;
  gap: 2px;
`;t.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`;t.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
`;t.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: start;
  gap: 16px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 50% 28%, rgba(255, 186, 94, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(13, 18, 31, 0.86), rgba(9, 12, 22, 0.92));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 56px rgba(3, 9, 20, 0.24);
  animation: ${Wa} 8.6s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 42%;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 112px;
    height: 112px;
    border: 1px solid rgba(255, 188, 97, 0.14);
    animation: ${Z} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${Z} 5.8s ease-out infinite;
    animation-delay: 1.1s;
  }
`;t.span`
  position: relative;
  z-index: 1;
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;t.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;t.div`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  gap: 4px;
  min-height: 116px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;t.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;t.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
`;t.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
`;t.div`
  display: grid;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  animation: ${Xa} 3.8s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;t.strong`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;t.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.35;
`;const d={eyebrow:"Lead Flow",title:"Website, Ads und Calls gehen direkt in den CRM-Flow.",lanes:[{source:"Website",target:"Lead",tone:"gold"},{source:"Ads",target:"Lead",tone:"blue"},{source:"Calls",target:"Lead",tone:"green"}],routerEyebrow:"CRM Hub",routerTitle:"CRM Router",routerMeta:"Capture, Routing und Rueckmeldung.",miniMeta:["1-2h Antwort","Live in CRM"],stats:[{value:"1-2h",label:"Response"},{value:"Live",label:"Assigned in CRM"}]},Ba=()=>{const{t:e}=ae();return a.jsxs(va,{"aria-hidden":"true",children:[a.jsx(wa,{}),a.jsx(ya,{}),a.jsxs(ja,{children:[a.jsx(ka,{children:e("contact.visual.eyebrow",{defaultValue:d.eyebrow})}),a.jsx($a,{children:e("contact.visual.title",{defaultValue:d.title})})]}),a.jsxs(Va,{children:[a.jsx(Sa,{children:d.lanes.map((l,p)=>a.jsxs(za,{children:[a.jsx(O,{$tone:l.tone,children:e(`contact.visual.lanes.${p}.source`,{defaultValue:l.source})}),a.jsx(Ca,{}),a.jsx(O,{children:e(`contact.visual.lanes.${p}.target`,{defaultValue:l.target})})]},l.source))}),a.jsxs(La,{children:[a.jsx(Fa,{children:e("contact.visual.routerEyebrow",{defaultValue:d.routerEyebrow})}),a.jsx(Ma,{children:e("contact.visual.routerTitle",{defaultValue:d.routerTitle})}),a.jsx(Ea,{children:e("contact.visual.routerMeta",{defaultValue:d.routerMeta})}),a.jsxs(Ra,{children:[a.jsxs(J,{children:[a.jsx(fe,{}),e("contact.visual.miniMeta.0",{defaultValue:d.miniMeta[0]})]}),a.jsxs(J,{children:[a.jsx(h,{}),e("contact.visual.miniMeta.1",{defaultValue:d.miniMeta[1]})]})]}),a.jsx(Ia,{children:d.stats.map((l,p)=>a.jsxs(Ta,{children:[a.jsx("strong",{children:e(`contact.visual.stats.${p}.value`,{defaultValue:l.value})}),a.jsx("span",{children:e(`contact.visual.stats.${p}.label`,{defaultValue:l.label})})]},l.label))})]})]})]})},Q={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},r={headline:"Erzaehlen Sie uns von Ihrem Projekt",responseTime:"Durchschnittliche Antwortzeit: 1-2h",subtitle:"Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den nächsten Schritt.",quickContacts:"Direkter Kontakt",responseNote:"Antwort meist innerhalb von 1-2 Stunden",formTitle:"Projektanfrage",formIntro:"Drei Angaben reichen für den Start.",formHelp:"Name, Unternehmen und Ziel genuegen.",nextStepsTitle:"So geht es weiter",nextStepsLead:"Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.",labels:{name:"Ihr Name",business:"Unternehmen",email:"E-Mail",phone:"Telefon optional",website:"Website optional",service:"Gewünschte Leistung",message:"Projekt oder Ziel"},submitLoading:"Wird gesendet...",submitSuccess:"Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.",submitError:"Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",contactMeta:{email:"Projektanfragen per E-Mail",phone:"Kurzes Erstgespraech oder Rueckruf"},trustItems:["Direkte Kommunikation","Klare Ersteinschaetzung","Schnelle Rueckmeldung"],nextSteps:["Ihre Anfrage landet direkt im Intake-Flow.","Wir melden uns meist innerhalb von 1-2 Stunden zurueck.","Sie erhalten einen klaren nächsten Schritt statt langer Rückfragen."]},Da=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Aa={linkedin:Re,facebook:Ee,instagram:Me,youtube:Fe},_a=()=>{var D;const{t:e}=ae(),l=ve(),p=we(),z=o.useRef(!1),m=((D=l.state)==null?void 0:D.prefillNeed)||"",[C,L]=o.useState(""),[F,M]=o.useState(""),[f,E]=o.useState(""),[R,I]=o.useState(""),[T,Y]=o.useState("Website erstellen lassen"),[H,v]=o.useState(m),[P,W]=o.useState(""),[X,N]=o.useState(""),[w,y]=o.useState(!1),[se,B]=o.useState(!1),[le,j]=o.useState(!1),[de,k]=o.useState("");o.useEffect(()=>{m&&v(m)},[m]);const ce=()=>["/.netlify/functions/contact","/api/contact"],pe=async n=>{if(n.preventDefault(),B(!1),j(!1),k(""),!Da.test(f.trim())){j(!0),k(e("contact.form.error",{defaultValue:r.submitError}));return}if(y(!0),X.trim()){y(!1);return}try{const s=crypto.randomUUID(),ge=JSON.stringify({name:C.trim(),business:F.trim(),email:f.trim(),phone:R.trim(),service:T.trim(),message:H.trim(),website:P.trim(),attribution:Te(),conversionId:s}),xe=ce();let c=null;for(const ue of xe)if(c=await fetch(ue,{method:"POST",headers:{"Content-Type":"application/json"},body:ge}),c.ok||c.status!==404)break;if(!c||!c.ok)throw new Error(`Request failed with status ${(c==null?void 0:c.status)??"unknown"}`);L(""),M(""),E(""),I(""),Y("Website erstellen lassen"),v(""),W(""),N(""),B(!0),_("generate_lead",{lead_source:"contact_form",form_id:"contact-form",page_location:window.location.href},s),p("/danke",{replace:!0,state:{confirmedSubmission:!0}})}catch(s){console.error("Contact form submit failed",s),j(!0),k(e("contact.form.error",{defaultValue:r.submitError}))}finally{y(!1)}};return a.jsx(He,{children:a.jsxs(ye,{children:[a.jsx(Pe,{initial:"hidden",animate:"show",variants:Q,transition:{duration:.62,ease:A},children:a.jsx(We,{children:a.jsxs(Xe,{children:[a.jsxs(Ne,{children:[a.jsxs(Ae,{children:[a.jsx(je,{}),a.jsx("span",{children:e("contact.responseTime",{defaultValue:r.responseTime})})]}),a.jsx(Ge,{children:a.jsx(ke,{text:e("contact.h1",{defaultValue:r.headline}),durationMs:2200,storageKey:"kontakt_h1_once"})}),a.jsx(_e,{children:e("contact.subtitle",{defaultValue:r.subtitle})})]}),a.jsxs(Be,{children:[a.jsxs(Ke,{id:"contact-form",onSubmit:pe,onFocusCapture:()=>{z.current||(z.current=!0,_("form_start",{lead_source:"contact_form",form_id:"contact-form",page_location:window.location.href}))},noValidate:!0,children:[a.jsx(V,{children:"VS Web Studio"}),a.jsx(K,{children:e("contact.form.title",{defaultValue:r.formTitle})}),a.jsx(Ue,{children:e("contact.form.intro",{defaultValue:r.formIntro})}),a.jsxs(Je,{"aria-hidden":"true",children:[a.jsx("label",{htmlFor:"contact-website",children:"Website"}),a.jsx("input",{id:"contact-website",type:"text",name:"website",value:X,onChange:n=>N(n.target.value),tabIndex:-1,autoComplete:"off"})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-name",children:e("contact.form.labels.name",{defaultValue:r.labels.name})}),a.jsxs(u,{children:[a.jsx($e,{}),a.jsx("input",{id:"contact-name",type:"text",name:"name",value:C,onChange:n=>L(n.target.value),placeholder:e("contact.form.name",{defaultValue:r.labels.name}),"aria-label":e("contact.form.labels.name",{defaultValue:r.labels.name}),required:!0})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-business",children:e("contact.form.labels.business",{defaultValue:r.labels.business})}),a.jsxs(u,{children:[a.jsx(Ve,{}),a.jsx("input",{id:"contact-business",type:"text",name:"business",value:F,onChange:n=>M(n.target.value),placeholder:e("contact.form.business",{defaultValue:r.labels.business}),"aria-label":e("contact.form.labels.business",{defaultValue:r.labels.business}),required:!0})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-email",children:e("contact.form.labels.email",{defaultValue:r.labels.email})}),a.jsxs(u,{children:[a.jsx(h,{}),a.jsx("input",{id:"contact-email",type:"email",name:"email",value:f,onChange:n=>E(n.target.value),placeholder:e("contact.form.email",{defaultValue:r.labels.email}),"aria-label":e("contact.form.labels.email",{defaultValue:r.labels.email}),autoComplete:"email",required:!0})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-phone",children:e("contact.form.labels.phone",{defaultValue:r.labels.phone})}),a.jsxs(u,{children:[a.jsx(G,{}),a.jsx("input",{id:"contact-phone",type:"tel",name:"phone",value:R,onChange:n=>I(n.target.value),placeholder:e("contact.form.phone",{defaultValue:r.labels.phone}),"aria-label":e("contact.form.labels.phone",{defaultValue:r.labels.phone}),autoComplete:"tel"})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-visible-website",children:e("contact.form.labels.website",{defaultValue:r.labels.website})}),a.jsxs(u,{children:[a.jsx(Se,{}),a.jsx("input",{id:"contact-visible-website",type:"url",name:"visibleWebsite",value:P,onChange:n=>W(n.target.value),placeholder:"https://","aria-label":e("contact.form.labels.website",{defaultValue:r.labels.website}),autoComplete:"url"})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-service",children:e("contact.form.labels.service",{defaultValue:r.labels.service})}),a.jsxs(u,{children:[a.jsx(ze,{}),a.jsxs("select",{id:"contact-service",name:"service",value:T,onChange:n=>Y(n.target.value),"aria-label":e("contact.form.labels.service",{defaultValue:r.labels.service}),children:[a.jsx("option",{children:"Website erstellen lassen"}),a.jsx("option",{children:"Landingpage"}),a.jsx("option",{children:"SEO-Grundstruktur"}),a.jsx("option",{children:"Lead-System"}),a.jsx("option",{children:"Website modernisieren"}),a.jsx("option",{children:"Sonstiges"})]})]})]}),a.jsxs(g,{children:[a.jsx(x,{htmlFor:"contact-message",children:e("contact.form.labels.message",{defaultValue:r.labels.message})}),a.jsxs(u,{children:[a.jsx(Ce,{}),a.jsx("textarea",{id:"contact-message",name:"message",placeholder:e("contact.form.need",{defaultValue:r.labels.message}),value:H,onChange:n=>v(n.target.value),"aria-label":e("contact.form.labels.message",{defaultValue:r.labels.message}),required:!0})]})]}),a.jsx(Oe,{children:e("contact.form.help",{defaultValue:r.formHelp})}),se?a.jsx(U,{$tone:"success",role:"status","aria-live":"polite",children:e("contact.form.success",{defaultValue:r.submitSuccess})}):null,le?a.jsx(U,{$tone:"error",role:"alert",children:de||e("contact.form.error",{defaultValue:r.submitError})}):null,a.jsxs(Ze,{type:"submit",disabled:w,"aria-busy":w,children:[a.jsx(h,{}),w?e("contact.form.submitLoading",{defaultValue:r.submitLoading}):e("contact.form.submit",{defaultValue:"Projekt anfragen"})]})]}),a.jsx(De,{children:a.jsx(Ba,{})})]})]})})}),a.jsx(ra,{initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.18},variants:Q,transition:{duration:.52,ease:A},children:a.jsxs(na,{children:[a.jsxs(q,{children:[a.jsx(V,{children:"VS Web Studio"}),a.jsx(K,{children:e("contact.quickContacts",{defaultValue:r.quickContacts})}),a.jsxs(Qe,{children:[a.jsx(Le,{}),a.jsx("span",{children:e("contact.responseNote",{defaultValue:r.responseNote})})]}),a.jsxs(ea,{children:[a.jsxs($,{href:b.emailHref,children:[a.jsx(h,{}),a.jsxs("div",{children:[a.jsx("strong",{children:b.email}),a.jsx("span",{children:e("contact.contactMeta.email",{defaultValue:r.contactMeta.email})})]})]}),a.jsxs($,{href:b.phoneHref,children:[a.jsx(G,{}),a.jsxs("div",{children:[a.jsx("strong",{children:b.phone}),a.jsx("span",{children:e("contact.contactMeta.phone",{defaultValue:r.contactMeta.phone})})]})]}),b.socialLinks.map(n=>{const s=Aa[n.id];return a.jsxs($,{href:n.url,target:"_blank",rel:"me noopener noreferrer",children:[a.jsx(s,{}),a.jsxs("div",{children:[a.jsx("strong",{children:n.label}),a.jsx("span",{children:"VS Web Studio"})]})]},n.id)})]}),a.jsx(aa,{children:r.trustItems.map((n,s)=>a.jsxs(ta,{children:[a.jsx(Ie,{}),e(`contact.trustItems.${s}`,{defaultValue:n})]},n))})]}),a.jsxs(q,{children:[a.jsx(ia,{children:e("contact.nextStepsEyebrow",{defaultValue:"Lead Intake"})}),a.jsx(oa,{children:e("contact.nextStepsTitle",{defaultValue:r.nextStepsTitle})}),a.jsx(sa,{children:e("contact.nextStepsLead",{defaultValue:r.nextStepsLead})}),a.jsx(la,{children:r.nextSteps.map((n,s)=>a.jsxs(da,{children:[a.jsxs("span",{children:["0",s+1]}),a.jsx("p",{children:e(`contact.nextSteps.${s}`,{defaultValue:n})})]},n))})]})]})})]})})};export{_a as default};
