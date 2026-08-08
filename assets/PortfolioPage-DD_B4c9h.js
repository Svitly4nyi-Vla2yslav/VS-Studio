import{f as xe,i as q,J as me,r as h,M as fe,b as u,c as he,d as be,g as o,E as w,j as e,e as T,m as p,h as z,F as H,k as f,l as ue,n as F,o as ee,p as te,q as oe,s as ie,t as we,v as re,w as ae,x as ye,y as ve,z as ne,B as je,C as ke,D as $e,G as Ke,H as E,I as Y,K as se,L as Se,N as ze,O as Ce,Q as D,S as Ie,R as Pe}from"./index-CDrMdaeK.js";function Fe(t,r,a){const d=t.get();let n=null,b=d,l;const c=typeof d=="string"?d.replace(/[\d.-]/g,""):void 0,y=()=>{n&&(n.stop(),n=null)},x=()=>{y(),n=new me({keyframes:[N(t.get()),N(b)],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...a,onUpdate:l})};if(t.attach((g,m)=>(b=g,l=s=>m(X(s,c)),xe.postRender(x),t.get()),y),q(r)){const g=r.on("change",s=>t.set(X(s,c))),m=t.on("destroy",g);return()=>{g(),m()}}return y}function X(t,r){return r?t+r:t}function N(t){return typeof t=="number"?t:parseFloat(t)}function Me(t,r,a){h.useInsertionEffect(()=>t.on(r,a),[t,r,a])}function O(t,r={}){const{isStatic:a}=h.useContext(fe),d=()=>q(t)?t.get():t;if(a)return u(d);const n=he(d());return h.useInsertionEffect(()=>Fe(n,t,r),[n,JSON.stringify(r)]),n}const Ae={some:0,all:1};function Le(t,r,{root:a,margin:d,amount:n="some"}={}){const b=be(t),l=new WeakMap,c=x=>{x.forEach(g=>{const m=l.get(g.target);if(g.isIntersecting!==!!m)if(g.isIntersecting){const s=r(g.target,g);typeof s=="function"?l.set(g.target,s):y.unobserve(g.target)}else typeof m=="function"&&(m(g),l.delete(g.target))})},y=new IntersectionObserver(c,{root:a,rootMargin:d,threshold:typeof n=="number"?n:Ae[n]});return b.forEach(x=>y.observe(x)),()=>y.disconnect()}function Re(t,{root:r,margin:a,amount:d,once:n=!1,initial:b=!1}={}){const[l,c]=h.useState(b);return h.useEffect(()=>{if(!t.current||n&&l)return;const y=()=>(c(!0),n?void 0:()=>c(!1)),x={root:r&&r.current||void 0,margin:a,amount:d};return Le(t.current,y,x)},[r,t,a,n,d]),l}const Be=w`
  0% { transform: translate3d(-2%, -2%, 0); }
  100% { transform: translate3d(2%, 2%, 0); }
`,Ee=w`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -18px, 0) scale(1.02); }
`,Ve=w`
  0% { transform: translate3d(0, 40px, 0) rotate(45deg); opacity: 0; }
  18% { opacity: 0.7; }
  100% { transform: translate3d(18px, -120px, 0) rotate(135deg); opacity: 0; }
`,Ge=w`
  to { transform: rotate(360deg); }
`,He=o.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  contain: paint;
  background:
    radial-gradient(circle at 50% 8%, rgba(56, 189, 248, 0.14), transparent 22%),
    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at 15% 72%, rgba(246, 211, 101, 0.09), transparent 30%);
`,Te=o.div`
  position: absolute;
  inset: -8%;
  opacity: 0.22;
  background:
    repeating-conic-gradient(from 18deg at 50% 20%, transparent 0deg 5deg, rgba(248, 250, 252, 0.08) 5deg 5.8deg, transparent 5.8deg 9deg),
    repeating-linear-gradient(115deg, transparent 0 18px, rgba(34, 211, 238, 0.08) 18px 19px);
  mask-image: radial-gradient(circle at 50% 32%, black 0%, transparent 64%);
  animation: ${Be} 10s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ye=o.span`
  position: absolute;
  left: ${({$index:t})=>[58,6,76,28][t]}%;
  top: ${({$index:t})=>[10,48,70,82][t]}%;
  width: ${({$index:t})=>[380,260,310,190][t]}px;
  max-width: 60vw;
  aspect-ratio: 1;
  border: 1px solid rgba(34, 211, 238, 0.14);
  border-radius: 50%;
  box-shadow:
    0 0 44px rgba(124, 58, 237, 0.12),
    inset 0 0 36px rgba(246, 211, 101, 0.06);
  transform-origin: center;
  animation: ${Ge} ${({$index:t})=>18+t*7}s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 12%;
    border: 1px dashed rgba(246, 211, 101, 0.12);
    border-radius: 50%;
  }

  &::after {
    inset: 28%;
    border-color: rgba(168, 85, 247, 0.16);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Oe=o.div`
  position: absolute;
  left: ${({$left:t})=>`${t}%`};
  top: ${({$top:t})=>`${t}%`};
  width: ${({$size:t})=>`${t}px`};
  aspect-ratio: 0.62;
  opacity: ${({$kind:t})=>t==="guild"?.07:.12};
  filter: drop-shadow(0 0 26px rgba(34, 211, 238, 0.26));
  animation: ${Ee} ${({$size:t})=>`${9+t%5}s`} ease-in-out infinite;
  animation-delay: ${({$left:t})=>`${t*-.08}s`};

  @media (max-width: 720px) {
    opacity: 0.05;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,De=o.span`
  position: absolute;
  left: 9%;
  top: 20%;
  width: 78%;
  height: 70%;
  clip-path: polygon(48% 0, 100% 100%, 56% 86%, 4% 100%);
  background: linear-gradient(180deg, rgba(168, 85, 247, 0.95), rgba(5, 5, 16, 0.3));
`,Xe=o.span`
  position: absolute;
  left: 35%;
  top: 2%;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50% 50% 44% 44%;
  background: #f8fafc;
`,Ne=o.span`
  position: absolute;
  left: 28%;
  top: 25%;
  width: 44%;
  height: 38%;
  clip-path: polygon(50% 0, 86% 24%, 70% 100%, 30% 100%, 14% 24%);
  background: #f8fafc;
`,Ue=o.span`
  position: absolute;
  right: 6%;
  top: 18%;
  width: 5%;
  height: 74%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.95), rgba(246, 211, 101, 0));
  transform: rotate(28deg);
`,We=o.span`
  position: absolute;
  left: ${({$index:t})=>`${t*13%100}%`};
  bottom: -10%;
  width: ${({$index:t})=>`${4+t%4}px`};
  height: ${({$index:t})=>`${18+t%5*8}px`};
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.85), rgba(246, 211, 101, 0.8));
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);
  animation: ${Ve} ${({$index:t})=>`${8+t%7}s`} linear infinite;
  animation-delay: ${({$index:t})=>`${t*-.7}s`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.22;
  }
`,_e=[{kind:"warrior",left:6,top:18,size:170},{kind:"mage",left:78,top:14,size:150},{kind:"swordsman",left:84,top:62,size:180},{kind:"spirit",left:14,top:70,size:118},{kind:"guild",left:48,top:42,size:210}],Qe=Array.from({length:28},(t,r)=>r),Ze=Array.from({length:4},(t,r)=>r),Je=()=>e.jsxs(He,{"aria-hidden":"true",children:[e.jsx(Te,{}),Ze.map(t=>e.jsx(Ye,{$index:t},`circle-${t}`)),_e.map(t=>e.jsxs(Oe,{$left:t.left,$top:t.top,$size:t.size,$kind:t.kind,children:[e.jsx(De,{}),e.jsx(Xe,{}),e.jsx(Ne,{}),e.jsx(Ue,{})]},t.kind)),Qe.map(t=>e.jsx(We,{$index:t},`shard-${t}`))]}),qe="/assets/Contact%20section-video-C46qwA7Z.mp4",et="/assets/Hero%20section-4xnONyAA.mp4",tt="/assets/Network%20section-video-DZDuf_bs.mp4",ot="/assets/Profile%20%20System%20section-r7iC3KHM.png",it="/assets/Projects%20section-CntVwrdJ.png",rt="/assets/Skills%20section-video-DUslJTdn.mp4",at="/assets/Timeline%20section-video-CRAO9MGS.mp4",j={hero:{type:"video",src:et,altKey:"portfolio.media.hero"},profile:{src:ot,altKey:"portfolio.media.profile"},skills:{type:"video",src:rt,altKey:"portfolio.media.skills"},projects:{src:it,altKey:"portfolio.media.projects"},timeline:{type:"video",src:at,altKey:"portfolio.media.timeline"},network:{type:"video",src:tt,altKey:"portfolio.media.network"},contact:{type:"video",src:qe,altKey:"portfolio.media.contact"}},M={once:!0,amount:.22},U={hidden:{opacity:0,y:32,filter:"blur(14px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.78,ease:T}}},A={hidden:{},visible:{transition:{staggerChildren:.075,delayChildren:.06}}},$={hidden:{opacity:0,y:68,scale:.955,filter:"blur(12px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{duration:.72,ease:T}}},le={hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.9,ease:T}}},i={colors:{background:"#070A12",backgroundSoft:"#0B101D",backgroundPanel:"#101827",purpleSoft:"#C084FC",cyan:"#67E8F9",goldSoft:"#FDE68A",white:"#F8FAFC",muted:"#B6C2D2",danger:"#FB7185"},fonts:{body:'"Geist", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Geist", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',display:'"Bebas Neue", "Geist", sans-serif'},radii:{panel:"20px",compact:"12px",pill:"999px"},motion:{fast:"160ms",base:"240ms",ease:"cubic-bezier(0.22, 1, 0.36, 1)"},z:{content:10,header:40,skipLink:60},shadows:{panel:"0 24px 90px rgba(0, 0, 0, 0.45)",cyanGlow:"0 0 30px rgba(34, 211, 238, 0.3)",goldGlow:"0 0 30px rgba(246, 211, 101, 0.26)"}},nt=w`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.6deg); }
  50% { transform: translate3d(0, -12px, 0) rotate(0.8deg); }
`,st=w`
  0%, 100% { opacity: 0.58; transform: scale(0.96); }
  50% { opacity: 0.92; transform: scale(1.04); }
`,lt=w`
  0% { transform: translateX(-130%) rotate(18deg); opacity: 0; }
  22% { opacity: 0.55; }
  52%, 100% { transform: translateX(180%) rotate(18deg); opacity: 0; }
`,pe=o.figure`
  position: relative;
  isolation: isolate;
  display: flex;
  width: min(100%, var(--portfolio-media-size, clamp(220px, 31vw, 470px)));
  aspect-ratio: 1 / 1;
  margin: 0;
  overflow: hidden;
  contain: paint;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 28px;
  background:
    radial-gradient(circle at 22% 18%, rgba(168, 85, 247, 0.2), transparent 34%),
    radial-gradient(circle at 76% 72%, rgba(34, 211, 238, 0.16), transparent 34%),
    linear-gradient(145deg, rgba(5, 5, 16, ${({$type:t})=>t==="video"?"0.82":"0.46"}), rgba(11, 11, 24, 0.5));
  box-shadow:
    inset 0 0 32px rgba(248, 250, 252, 0.035),
    0 0 42px rgba(34, 211, 238, 0.14),
    0 26px 90px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(16px);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    z-index: -1;
    border: 1px solid rgba(246, 211, 101, 0.16);
    border-radius: 22px;
    background: repeating-linear-gradient(135deg, transparent 0 22px, rgba(248, 250, 252, 0.035) 22px 23px);
  }

  &::after {
    content: '';
    position: absolute;
    top: -32%;
    left: -46%;
    width: 34%;
    height: 160%;
    background: linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.18), transparent);
    animation: ${lt} 7.8s ease-in-out infinite;
  }

  @media (max-width: 940px) {
    --portfolio-media-size: clamp(220px, 64vw, 420px);
  }

  @media (max-width: 560px) {
    --portfolio-media-size: min(100%, 330px);
    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      display: none;
    }
  }
`,pt=o.span`
  position: absolute;
  inset: 8%;
  z-index: -1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent 62%),
    conic-gradient(from 120deg, rgba(124, 58, 237, 0.24), rgba(246, 211, 101, 0.22), rgba(34, 211, 238, 0.28), rgba(124, 58, 237, 0.24));
  filter: blur(10px);
  animation: ${st} 5.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dt=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({$type:t})=>t==="video"?"0":"clamp(12px, 2vw, 22px)"};
`,ct=o.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  filter:
    drop-shadow(0 0 18px rgba(34, 211, 238, 0.2))
    drop-shadow(0 18px 36px rgba(0, 0, 0, 0.34));
  animation: ${nt} 6.8s ease-in-out infinite;

  @media (hover: hover) and (pointer: fine) {
    ${pe}:hover & {
      transform: translate3d(0, -8px, 0) scale(1.015);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gt=o.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  filter: saturate(1.08) contrast(1.04) drop-shadow(0 0 22px rgba(34, 211, 238, 0.14));
  pointer-events: none;

  @media (max-width: 560px) {
    border-radius: 18px;
  }
`,xt=o.figcaption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  color: ${i.colors.white};
`,L=({type:t,src:r,alt:a,className:d,eager:n=!1})=>{const b=h.useRef(null),l=h.useRef(null),[c,y]=h.useState(n),x=h.useRef(n),g=h.useRef(!1);return h.useEffect(()=>{const m=l.current;!m||t!=="video"||!c||(m.load(),(g.current||n)&&m.play().catch(()=>{}))},[n,c,r,t]),h.useEffect(()=>{const m=b.current,s=l.current;if(!m||!s||t!=="video")return;const v=()=>{s.preload="metadata",x.current||(x.current=!0,y(!0))};if(!("IntersectionObserver"in window)){v(),g.current=!0,s.play().catch(()=>{});return}const k=new IntersectionObserver(([C])=>{C.isIntersecting&&(v(),k.disconnect())},{rootMargin:"800px 0px",threshold:0}),K=new IntersectionObserver(([C])=>{g.current=C.isIntersecting,C.isIntersecting?(v(),s.play().catch(()=>{})):s.pause()},{rootMargin:"80px 0px",threshold:.08}),S=()=>{document.visibilityState==="visible"&&g.current&&s.play().catch(()=>{})};return n&&v(),k.observe(m),K.observe(m),document.addEventListener("visibilitychange",S),()=>{k.disconnect(),K.disconnect(),document.removeEventListener("visibilitychange",S)}},[n,t]),e.jsxs(pe,{ref:b,className:d,$type:t,children:[e.jsx(pt,{"aria-hidden":"true"}),e.jsx(dt,{$type:t,children:t==="image"?e.jsx(ct,{src:r,alt:a,loading:n?"eager":"lazy",decoding:"async",fetchPriority:n?"high":"low"}):e.jsx(gt,{ref:l,src:c?r:void 0,"aria-label":a,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,controls:!1,preload:n||c?"metadata":"none",disablePictureInPicture:!0,onCanPlay:()=>{const m=l.current;m&&(g.current||n)&&m.play().catch(()=>{})}})}),e.jsx(xt,{children:a})]})},mt=w`
  to { transform: rotate(360deg); }
`,ft=w`
  0%, 100% { opacity: 0.58; filter: blur(0); }
  50% { opacity: 0.86; filter: blur(1px); }
`,ht=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
  gap: clamp(24px, 5vw, 72px);
  align-items: start;
  padding: clamp(90px, 10vw, 124px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 78% 42%, rgba(124, 58, 237, 0.2), transparent 30%),
    radial-gradient(circle at 18% 76%, rgba(34, 211, 238, 0.12), transparent 32%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`,bt=o(p.div)`
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: min(76svh, 740px);

  figure {
    --portfolio-media-size: 100%;
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }

  @media (max-width: 940px) {
    grid-column: 1;
    grid-row: auto;
    height: min(46svh, 380px);
  }
`,ut=o(p.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(246, 211, 101, 0.3);
  border-radius: 8px;
  padding: clamp(22px, 4vw, 54px);
  clip-path: polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px));
  background:
    radial-gradient(circle at 78% 45%, rgba(34, 211, 238, 0.17), transparent 28%),
    linear-gradient(135deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  box-shadow: ${i.shadows.panel};
`,wt=o.div`
  position: absolute;
  right: clamp(-120px, -8vw, -42px);
  top: 50%;
  display: grid;
  place-items: center;
  width: clamp(260px, 35vw, 470px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(124, 58, 237, 0.08),
    rgba(34, 211, 238, 0.55),
    rgba(246, 211, 101, 0.36),
    rgba(124, 58, 237, 0.08)
  );
  transform: translateY(-50%);
  animation:
    ${mt} 14s linear infinite,
    ${ft} 4s ease-in-out infinite;

  @media (max-width: 760px) {
    opacity: 0.28;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yt=o.div`
  width: 56%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(5, 5, 16, 0.96), rgba(124, 58, 237, 0.24), transparent 70%);
`,vt=o.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${i.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,jt=o.h2`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 16px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(1.95rem, 4.2vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,kt=o.p`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 18px 0 0;
  color: rgba(248, 250, 252, 0.76);
  line-height: 1.55;
`,$t=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
`,Kt=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(246, 211, 101, 0.45);
  border-radius: 999px;
  padding: 0 18px;
  background: linear-gradient(135deg, ${i.colors.goldSoft}, ${i.colors.cyan});
  color: #050510;
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-2px);
    outline: none;
  }
`,V=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(56, 189, 248, 0.24);
  border-radius: 999px;
  padding: 0 18px;
  background: rgba(5, 5, 16, 0.68);
  color: ${i.colors.white};
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: ${i.colors.cyan};
    transform: translateY(-2px);
    outline: none;
  }
`,St=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 0;
  overflow-x: hidden;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,zt=o(p.a)`
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 8px;
  padding: 16px;
  background: rgba(11, 11, 24, 0.74);

  svg {
    color: ${i.colors.cyan};
  }

  span {
    display: block;
    margin-top: 12px;
    color: ${i.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 8px;
    color: ${i.colors.white};
    line-height: 1.35;
    word-break: break-word;
  }

  &:hover,
  &:focus-visible {
    border-color: rgba(34, 211, 238, 0.46);
    outline: none;
  }
`,Ct={linkedin:ie,facebook:oe,instagram:te,youtube:ee},It=()=>{const{t}=z(),r=[{id:"email",label:t("portfolio.contact.channels.email"),value:f.email,href:f.emailHref,icon:H,external:!1},{id:"phone",label:t("portfolio.contact.channels.phone"),value:f.phone,href:f.phoneHref,icon:ue,external:!1},{id:"website",label:t("portfolio.contact.channels.website"),value:f.websiteLabel,href:f.websiteUrl,icon:F,external:!0},...f.socialLinks.map(a=>({id:a.id,label:a.label,value:"VS Web Studio",href:a.url,icon:Ct[a.id],external:!0,rel:"me noopener noreferrer"}))];return e.jsxs(ht,{id:"portfolio-contact","aria-labelledby":"portfolio-contact-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsx(bt,{variants:$,"data-portfolio-media":"contact",children:e.jsx(L,{type:j.contact.type,src:j.contact.src,alt:t(j.contact.altKey)})}),e.jsxs(ut,{variants:$,children:[e.jsx(wt,{"aria-hidden":"true",children:e.jsx(yt,{})}),e.jsx(vt,{children:t("portfolio.contact.eyebrow")}),e.jsx(jt,{id:"portfolio-contact-title",children:t("portfolio.contact.title")}),e.jsx(kt,{children:t("portfolio.contact.description")}),e.jsxs($t,{children:[e.jsxs(Kt,{href:f.emailHref,children:[e.jsx(we,{"aria-hidden":"true"})," ",t("portfolio.contact.buttons.project")]}),e.jsxs(V,{href:f.emailHref,children:[e.jsx(H,{"aria-hidden":"true"})," ",t("portfolio.contact.buttons.email")]}),e.jsxs(V,{href:f.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[t("portfolio.contact.buttons.website")," ",e.jsx(F,{"aria-hidden":"true"})]}),e.jsxs(V,{href:f.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(re,{"aria-hidden":"true"})," ",t("portfolio.contact.buttons.github")]})]})]}),e.jsx(St,{children:r.map(a=>{const d=a.icon;return e.jsxs(zt,{href:a.href,target:a.external?"_blank":void 0,rel:"rel"in a?a.rel:a.external?"noopener noreferrer":void 0,variants:$,children:[e.jsx(d,{"aria-hidden":"true"}),e.jsx("span",{children:a.label}),e.jsx("strong",{children:a.value})]},a.id)})})]})},R=[{id:"hero",labelKey:"portfolio.nav.hero",href:"#portfolio-top"},{id:"profile",labelKey:"portfolio.nav.profile",href:"#portfolio-profile"},{id:"skills",labelKey:"portfolio.nav.skills",href:"#portfolio-skills"},{id:"projects",labelKey:"portfolio.nav.projects",href:"#portfolio-projects"},{id:"timeline",labelKey:"portfolio.nav.timeline",href:"#portfolio-timeline"},{id:"network",labelKey:"portfolio.nav.network",href:"#portfolio-network"},{id:"contact",labelKey:"portfolio.nav.contact",href:"#portfolio-contact"}],Pt=[{labelKey:"portfolio.system.rank",valueKey:"portfolio.profile.role"},{labelKey:"portfolio.system.class",valueKey:"portfolio.system.values.mainClass"},{labelKey:"portfolio.system.guild",valueKey:"portfolio.profile.brand"},{labelKey:"portfolio.system.location",valueKey:"portfolio.profile.location"},{labelKey:"portfolio.system.mission",valueKey:"portfolio.system.values.mainMission"}],Ft=[{labelKey:"portfolio.system.xpItems.german",level:72},{labelKey:"portfolio.system.xpItems.reactTypeScript",level:84},{labelKey:"portfolio.system.xpItems.node",level:68},{labelKey:"portfolio.system.xpItems.firebaseSupabase",level:70},{labelKey:"portfolio.system.xpItems.aiAutomation",level:76},{labelKey:"portfolio.system.xpItems.localBusinessWebsites",level:88}],Mt=[{id:"frontend",titleKey:"portfolio.skills.categories.frontend",descriptionKey:"portfolio.skills.descriptions.frontend",rank:"A-",icon:ae,skills:[{labelKey:"portfolio.skills.items.html",level:88},{labelKey:"portfolio.skills.items.css",level:86},{labelKey:"portfolio.skills.items.javascript",level:82},{labelKey:"portfolio.skills.items.typescript",level:78},{labelKey:"portfolio.skills.items.react",level:84},{labelKey:"portfolio.skills.items.vite",level:80},{labelKey:"portfolio.skills.items.styledComponents",level:82},{labelKey:"portfolio.skills.items.framerMotion",level:72},{labelKey:"portfolio.skills.items.i18next",level:70}]},{id:"backend",titleKey:"portfolio.skills.categories.backend",descriptionKey:"portfolio.skills.descriptions.backend",rank:"B+",icon:ye,skills:[{labelKey:"portfolio.skills.items.node",level:70},{labelKey:"portfolio.skills.items.firebase",level:74},{labelKey:"portfolio.skills.items.firebaseFunctions",level:64},{labelKey:"portfolio.skills.items.supabase",level:68},{labelKey:"portfolio.skills.items.mongodb",level:62},{labelKey:"portfolio.skills.items.netlifyFunctions",level:66}]},{id:"business",titleKey:"portfolio.skills.categories.business",descriptionKey:"portfolio.skills.descriptions.business",rank:"B+",icon:ve,skills:[{labelKey:"portfolio.skills.items.landingPages",level:84},{labelKey:"portfolio.skills.items.localSeoBasics",level:70},{labelKey:"portfolio.skills.items.ga4Tracking",level:68},{labelKey:"portfolio.skills.items.googleAdsBasics",level:58},{labelKey:"portfolio.skills.items.metaAutomationBasics",level:60},{labelKey:"portfolio.skills.items.leadForms",level:80},{labelKey:"portfolio.skills.items.crmPosConcepts",level:66}]},{id:"automation",titleKey:"portfolio.skills.categories.automation",descriptionKey:"portfolio.skills.descriptions.automation",rank:"B",icon:ne,skills:[{labelKey:"portfolio.skills.items.aiAssistantForWebsites",level:78},{labelKey:"portfolio.skills.items.leadQualification",level:74},{labelKey:"portfolio.skills.items.chatbotFlows",level:72},{labelKey:"portfolio.skills.items.googleCalendarIntegrationIdea",level:58},{labelKey:"portfolio.skills.items.socialMediaAutoRepliesConcept",level:62},{labelKey:"portfolio.skills.items.businessProcessAutomation",level:70}]}],At=[{id:"vs-web-studio",titleKey:"portfolio.projects.items.vs.title",typeKey:"portfolio.projects.items.vs.type",descriptionKey:"portfolio.projects.items.vs.description",rewardKey:"portfolio.projects.items.vs.reward",difficulty:"A",link:"https://vs-web-studio.de/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.typescript","portfolio.projects.tags.styledComponents","portfolio.projects.tags.i18n","portfolio.projects.tags.leadGeneration","portfolio.projects.tags.aiAssistant"]},{id:"lumina-atelier",titleKey:"portfolio.projects.items.lumina.title",typeKey:"portfolio.projects.items.lumina.type",descriptionKey:"portfolio.projects.items.lumina.description",rewardKey:"portfolio.projects.items.lumina.reward",difficulty:"B+",link:"https://lumina-atelier-salon.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.landingPage","portfolio.projects.tags.beautyBusiness","portfolio.projects.tags.responsiveDesign"]},{id:"autowerk",titleKey:"portfolio.projects.items.autowerk.title",typeKey:"portfolio.projects.items.autowerk.type",descriptionKey:"portfolio.projects.items.autowerk.description",rewardKey:"portfolio.projects.items.autowerk.reward",difficulty:"B+",link:"https://auto-werkstatt.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.localBusiness","portfolio.projects.tags.workshop","portfolio.projects.tags.cta"]},{id:"handwerk-shk",titleKey:"portfolio.projects.items.handwerk.title",typeKey:"portfolio.projects.items.handwerk.type",descriptionKey:"portfolio.projects.items.handwerk.description",rewardKey:"portfolio.projects.items.handwerk.reward",difficulty:"B+",link:"https://handwerken.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.handwerk","portfolio.projects.tags.shk","portfolio.projects.tags.localSeo"]},{id:"ai-assistant",titleKey:"portfolio.projects.items.ai.title",typeKey:"portfolio.projects.items.ai.type",descriptionKey:"portfolio.projects.items.ai.description",rewardKey:"portfolio.projects.items.ai.reward",difficulty:"A-",tagKeys:["portfolio.projects.tags.ai","portfolio.projects.tags.automation","portfolio.projects.tags.leadCapture","portfolio.projects.tags.chatbot","portfolio.projects.tags.businessProcess"]},{id:"business-platform",titleKey:"portfolio.projects.items.research.title",typeKey:"portfolio.projects.items.research.type",descriptionKey:"portfolio.projects.items.research.description",rewardKey:"portfolio.projects.items.research.reward",difficulty:"B",tagKeys:["portfolio.projects.tags.crm","portfolio.projects.tags.pos","portfolio.projects.tags.orders","portfolio.projects.tags.inventory","portfolio.projects.tags.automation","portfolio.projects.tags.saasResearch"]}],Lt=[{id:"course",titleKey:"portfolio.timeline.items.course.title",descriptionKey:"portfolio.timeline.items.course.description",statusKey:"portfolio.timeline.status.completed"},{id:"platforms",titleKey:"portfolio.timeline.items.platforms.title",descriptionKey:"portfolio.timeline.items.platforms.description",statusKey:"portfolio.timeline.status.active"},{id:"studio",titleKey:"portfolio.timeline.items.studio.title",descriptionKey:"portfolio.timeline.items.studio.description",statusKey:"portfolio.timeline.status.active"},{id:"demos",titleKey:"portfolio.timeline.items.demos.title",descriptionKey:"portfolio.timeline.items.demos.description",statusKey:"portfolio.timeline.status.active"},{id:"german",titleKey:"portfolio.timeline.items.german.title",descriptionKey:"portfolio.timeline.items.german.description",statusKey:"portfolio.timeline.status.training"},{id:"selfEmployment",titleKey:"portfolio.timeline.items.selfEmployment.title",descriptionKey:"portfolio.timeline.items.selfEmployment.description",statusKey:"portfolio.timeline.status.preparing"},{id:"scale",titleKey:"portfolio.timeline.items.scale.title",descriptionKey:"portfolio.timeline.items.scale.description",statusKey:"portfolio.timeline.status.next"}],Rt=[{id:"linkedin",titleKey:"portfolio.network.items.linkedin.title",descriptionKey:"portfolio.network.items.linkedin.description",icon:je},{id:"localSmb",titleKey:"portfolio.network.items.localSmb.title",descriptionKey:"portfolio.network.items.localSmb.description",icon:ke},{id:"ecosystem",titleKey:"portfolio.network.items.ecosystem.title",descriptionKey:"portfolio.network.items.ecosystem.description",icon:ae},{id:"research",titleKey:"portfolio.network.items.research.title",descriptionKey:"portfolio.network.items.research.description",icon:ne}],Bt=[{labelKey:"portfolio.hero.fragments.react",x:9,y:22},{labelKey:"portfolio.hero.fragments.typescript",x:66,y:16},{labelKey:"portfolio.hero.fragments.node",x:74,y:54},{labelKey:"portfolio.hero.fragments.firebase",x:18,y:68},{labelKey:"portfolio.hero.fragments.ai",x:52,y:76},{labelKey:"portfolio.hero.fragments.automation",x:4,y:44}],Et=w`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -16px, 0) scale(1.018); }
`,Vt=w`
  0%, 100% {
    filter:
      drop-shadow(0 0 18px rgba(34, 211, 238, 0.24))
      drop-shadow(0 0 34px rgba(124, 58, 237, 0.2))
      drop-shadow(0 20px 58px rgba(0, 0, 0, 0.44));
  }
  50% {
    filter:
      drop-shadow(0 0 30px rgba(34, 211, 238, 0.44))
      drop-shadow(0 0 54px rgba(246, 211, 101, 0.24))
      drop-shadow(0 26px 70px rgba(0, 0, 0, 0.52));
  }
`,Gt=w`
  0%, 100% { opacity: 0.4; transform: scale(0.96); }
  50% { opacity: 0.74; transform: scale(1.05); }
`,Ht=o.figure`
  position: relative;
  isolation: isolate;
  width: min(100%, var(--portfolio-image-width, 42vw));
  height: var(--portfolio-image-height, 86svh);
  margin: 0;
  pointer-events: none;
`,Tt=o.span`
  position: absolute;
  inset: 10% 4%;
  z-index: -1;
  border-radius: 48% 52% 44% 56%;
  background:
    radial-gradient(circle at 50% 38%, rgba(34, 211, 238, 0.28), transparent 56%),
    radial-gradient(circle at 44% 68%, rgba(124, 58, 237, 0.26), transparent 58%),
    conic-gradient(from 140deg, rgba(246, 211, 101, 0.16), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.18), rgba(246, 211, 101, 0.16));
  filter: blur(18px);
  animation: ${Gt} 6.4s ease-in-out infinite;
`,Yt=o.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  animation: ${Et} 7.6s ease-in-out infinite, ${Vt} 5.8s ease-in-out infinite;
  user-select: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,de=({src:t,alt:r,className:a})=>e.jsxs(Ht,{className:a,"aria-hidden":"true",children:[e.jsx(Tt,{}),e.jsx(Yt,{src:t,alt:r,loading:"lazy",decoding:"async",fetchPriority:"low"})]}),Ot=w`
  0% { transform: translateY(-120%); opacity: 0; }
  12% { opacity: 0.8; }
  100% { transform: translateY(120%); opacity: 0; }
`,Dt=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  background:
    radial-gradient(circle at 76% 34%, rgba(246, 211, 101, 0.12), transparent 26%),
    radial-gradient(circle at 18% 76%, rgba(34, 211, 238, 0.14), transparent 32%);
`,Xt=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: min(1440px, calc(100% - 48px));
  min-height: 100vh;
  min-height: 100svh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  padding: clamp(90px, 10vw, 124px) 0 clamp(34px, 5vw, 60px);

  @media (max-width: 560px) {
    width: min(100% - 24px, 1440px);
  }
`,Nt=o.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.16) 48%, transparent 52%);
  animation: ${Ot} 7s ease-in-out infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.12;
  }
`,Ut=o(p.div)`
  position: relative;
  z-index: 2;
  max-width: 760px;
`,Wt=o.span`
  display: inline-flex;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${i.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,_t=o.h2`
  margin: 16px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 5.2rem);
  line-height: 0.98;
  letter-spacing: 0;
`,Qt=o.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.76);
  font-size: clamp(0.98rem, 1.6vw, 1.14rem);
  line-height: 1.75;
`,Zt=o.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: clamp(18px, 3vw, 32px);
  padding-right: min(24vw, 340px);

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,Jt=o(p.article)`
  min-height: 104px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 8px;
  padding: 16px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background:
    linear-gradient(135deg, rgba(11, 11, 24, 0.92), rgba(8, 8, 18, 0.76)),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.2), transparent 50%);
  box-shadow: ${i.shadows.panel};

  span {
    display: block;
    color: ${i.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 10px;
    color: ${i.colors.white};
    line-height: 1.35;
  }
`,qt=o.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
  padding-right: min(18vw, 280px);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,eo=o(p.div)`
  position: absolute;
  right: clamp(-120px, 0vw, 0px);
  /* top: 50%; */
  z-index: 0;
  width: min(100vw, 650px);
  transform: translateY(-50%);
  opacity: 0.9;

  figure {
    --portfolio-image-width: min(100vw, 650px);
    --portfolio-image-height: 92svh;
  }

  @media (max-width: 1120px) {
    right: -120px;
    width: min(56vw, 520px);
    opacity: 0.4;
  }

  @media (max-width: 720px) {
    right: -160px;
    width: 620px;
    opacity: 0.22;
  }
`,to=o(p.article)`
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 8px;
  padding: 14px;
  background: rgba(5, 5, 16, 0.68);
  backdrop-filter: blur(10px);

  span,
  strong {
    color: ${i.colors.white};
  }

  strong {
    float: right;
    color: ${i.colors.goldSoft};
  }
`,oo=o.div`
  clear: both;
  height: 8px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.08);
`,io=o.span`
  display: block;
  width: ${({$level:t})=>`${t}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${i.colors.purpleSoft}, ${i.colors.cyan}, ${i.colors.goldSoft});
  box-shadow: ${i.shadows.cyanGlow};
`,ro=()=>{const{t}=z();return e.jsxs(Dt,{id:"portfolio-profile","aria-labelledby":"portfolio-profile-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsx(Nt,{"aria-hidden":"true"}),e.jsxs(Xt,{children:[e.jsx(eo,{variants:$,"data-portfolio-media":"profile",children:e.jsx(de,{src:j.profile.src,alt:t(j.profile.altKey)})}),e.jsxs(Ut,{variants:$,children:[e.jsx(Wt,{children:t("portfolio.system.eyebrow")}),e.jsx(_t,{id:"portfolio-profile-title",children:t("portfolio.system.title")}),e.jsx(Qt,{children:t("portfolio.positioning")})]}),e.jsx(Zt,{children:Pt.map(r=>e.jsxs(Jt,{variants:$,children:[e.jsx("span",{children:t(r.labelKey)}),e.jsx("strong",{children:t(r.valueKey)})]},r.labelKey))}),e.jsx(qt,{"aria-label":t("portfolio.system.xpFocus"),children:Ft.map(r=>e.jsxs(to,{variants:$,children:[e.jsx("span",{children:t(r.labelKey)}),e.jsxs("strong",{children:[r.level,"%"]}),e.jsx(oo,{children:e.jsx(io,{as:p.span,$level:r.level,variants:le,style:{transformOrigin:"left center"}})})]},r.labelKey))})]})]})},ao=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
  gap: clamp(24px, 5vw, 72px);
  align-items: center;
  padding:
    clamp(90px, 10vw, 124px)
    max(24px, calc((100% - 1440px) / 2))
    clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 76% 30%, rgba(246, 211, 101, 0.1), transparent 26%),
    radial-gradient(circle at 20% 70%, rgba(34, 211, 238, 0.12), transparent 32%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`,no=o(p.div)`
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: min(76svh, 740px);

  figure {
    --portfolio-media-size: 100%;
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }

  @media (max-width: 940px) {
    grid-column: 1;
    grid-row: auto;
    height: min(46svh, 380px);
  }
`,so=o.span`
  display: inline-flex;
  border: 1px solid rgba(246, 211, 101, 0.3);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(246, 211, 101, 0.08);
  color: ${i.colors.goldSoft};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,lo=o.h2`
  margin: 16px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,po=o.p`
  max-width: 780px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`,co=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: clamp(18px, 3vw, 28px);
  overflow-x: hidden;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,go=o(p.article)`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 8px;
  padding: 16px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));
  background:
    linear-gradient(180deg, rgba(11, 11, 24, 0.86), rgba(5, 5, 16, 0.72)),
    radial-gradient(circle at top, rgba(34, 211, 238, 0.12), transparent 48%);

  h3 {
    margin: 16px 0 0;
    color: ${i.colors.white};
    font-size: 1.05rem;
    letter-spacing: 0;
  }

  p {
    margin: 10px 0 0;
    color: rgba(248, 250, 252, 0.72);
    line-height: 1.45;
  }
`,xo=o.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(168, 85, 247, 0.32);
  border-radius: 50%;
  color: ${i.colors.cyan};
  background: rgba(124, 58, 237, 0.1);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.14);
`,mo=()=>{const{t}=z();return e.jsxs(ao,{id:"portfolio-network","aria-labelledby":"portfolio-network-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsx(no,{variants:$,"data-portfolio-media":"network",children:e.jsx(L,{type:j.network.type,src:j.network.src,alt:t(j.network.altKey)})}),e.jsxs("div",{children:[e.jsx(so,{children:t("portfolio.network.eyebrow")}),e.jsx(lo,{id:"portfolio-network-title",children:t("portfolio.network.title")}),e.jsx(po,{children:t("portfolio.network.description")})]}),e.jsx(co,{children:Rt.map(r=>{const a=r.icon;return e.jsxs(go,{variants:$,children:[e.jsx(xo,{children:e.jsx(a,{"aria-hidden":"true"})}),e.jsx("h3",{children:t(r.titleKey)}),e.jsx("p",{children:t(r.descriptionKey)})]},r.id)})})]})},fo=w`
  0% { transform: translateX(-35%); }
  100% { transform: translateX(35%); }
`,ho=o.footer`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-top: 1px solid rgba(56, 189, 248, 0.22);
  padding: clamp(34px, 6vw, 56px) 0;
  background:
    linear-gradient(135deg, rgba(5, 5, 16, 0.96), rgba(11, 11, 24, 0.92)),
    repeating-linear-gradient(115deg, rgba(248, 250, 252, 0.04) 0 1px, transparent 1px 22px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12%;
    width: 76%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${i.colors.purpleSoft}, ${i.colors.cyan}, ${i.colors.goldSoft}, transparent);
    animation: ${fo} 6s ease-in-out infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`,bo=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.7fr) minmax(220px, 0.9fr);
  gap: 16px;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,uo=o.div`
  border: 1px solid rgba(246, 211, 101, 0.18);
  border-radius: 8px;
  padding: 18px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background: rgba(8, 8, 18, 0.7);

  strong {
    display: block;
    margin-top: 4px;
    color: ${i.colors.cyan};
  }

  p {
    max-width: 54ch;
    margin: 14px 0 0;
    color: rgba(248, 250, 252, 0.7);
    line-height: 1.65;
  }
`,wo=o.h2`
  margin: 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  letter-spacing: 0;
`,W=o.div`
  border: 1px solid rgba(34, 211, 238, 0.16);
  border-radius: 8px;
  padding: 18px;
  background: rgba(8, 8, 18, 0.6);

  h2 {
    margin: 0 0 12px;
    color: ${i.colors.goldSoft};
    font-size: 0.9rem;
    letter-spacing: 0;
    text-transform: uppercase;
  }
`,_=o.div`
  display: grid;
  gap: 9px;

  a {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    width: fit-content;
    color: rgba(248, 250, 252, 0.76);
    font-weight: 800;
  }

  a:hover,
  a:focus-visible {
    color: ${i.colors.cyan};
    outline: none;
  }
`,yo=o.div`
  width: min(1180px, calc(100% - 32px));
  margin: 18px auto 0;
`,vo=o.p`
  margin: 0;
  color: ${i.colors.muted};
  font-size: 0.86rem;
`,jo={linkedin:ie,facebook:oe,instagram:te,youtube:ee},ko=()=>{const{t}=z();return e.jsxs(ho,{children:[e.jsxs(bo,{children:[e.jsxs(uo,{children:[e.jsx(wo,{children:f.founderName}),e.jsx("strong",{children:f.brandName}),e.jsx("p",{children:t("portfolio.footer.description")})]}),e.jsxs(W,{children:[e.jsx("h2",{children:t("portfolio.footer.navigation")}),e.jsx(_,{children:R.map(r=>e.jsx("a",{href:r.href,children:t(r.labelKey)},r.id))})]}),e.jsxs(W,{children:[e.jsx("h2",{children:t("portfolio.footer.contact")}),e.jsxs(_,{children:[e.jsx("a",{href:f.emailHref,children:f.email}),e.jsx("a",{href:f.phoneHref,children:f.phone}),e.jsxs("a",{href:f.mapsUrl,target:"_blank",rel:"noopener noreferrer",children:[t("portfolio.profile.location")," ",e.jsx(F,{"aria-hidden":"true"})]}),e.jsxs("a",{href:f.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[f.websiteLabel," ",e.jsx(F,{"aria-hidden":"true"})]}),e.jsxs("a",{href:f.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(re,{"aria-hidden":"true"})," GitHub"]}),f.socialLinks.map(r=>{const a=jo[r.id];return e.jsxs("a",{href:r.url,target:"_blank",rel:"me noopener noreferrer",children:[e.jsx(a,{"aria-hidden":"true"})," ",r.label]},r.id)})]})]})]}),e.jsx(yo,{children:e.jsx(vo,{children:t("portfolio.footer.note")})})]})},$o=o.header`
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  z-index: ${i.z.header};
  padding: 0 16px;
  pointer-events: none;
  --portfolio-header-bg: ${({$scrolled:t})=>t?"rgba(5, 5, 16, 0.9)":"rgba(5, 5, 16, 0.62)"};

  @media (max-width: 520px) {
    top: 8px;
    padding: 0 8px;
  }
`,Ko=o.div`
  position: fixed;
  inset: 0 0 auto;
  height: 2px;
  overflow: hidden;
  background: rgba(148, 163, 184, 0.08);
  pointer-events: none;
`,So=o.span`
  display: block;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    ${i.colors.cyan},
    ${i.colors.purpleSoft},
    ${i.colors.goldSoft}
  );
  box-shadow: 0 0 18px rgba(103, 232, 249, 0.75);
  will-change: transform;
`,zo=o.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto auto auto;
  gap: 12px;
  align-items: center;
  width: min(1180px, 100%);
  min-height: 66px;
  margin: 0 auto;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-bottom-color: rgba(246, 211, 101, 0.24);
  border-radius: ${i.radii.panel};
  padding: 10px 12px;
  background: var(--portfolio-header-bg);
  box-shadow:
    0 14px 60px rgba(0, 0, 0, 0.34),
    inset 0 -1px 0 rgba(246, 211, 101, 0.18);
  backdrop-filter: blur(18px);
  pointer-events: auto;
  transition:
    background ${i.motion.base} ${i.motion.ease},
    border-color ${i.motion.base} ${i.motion.ease},
    box-shadow ${i.motion.base} ${i.motion.ease};

  @media (max-width: 1040px) {
    grid-template-columns: auto minmax(0, 1fr) auto auto;
  }

  @media (max-width: 520px) {
    gap: 6px;
    min-height: 60px;
    padding: 8px;
  }
`,Co=o.a`
  display: grid;
  gap: 1px;
  min-width: max-content;

  strong {
    color: ${i.colors.white};
    font-family: ${i.fonts.heading};
    font-size: 1rem;
    letter-spacing: 0;
  }

  span {
    color: ${i.colors.cyan};
    font-size: 0.78rem;
    font-weight: 800;
  }

  @media (max-width: 420px) {
    strong {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.68rem;
    }
  }
`,Io=o.span`
  border: 1px solid rgba(246, 211, 101, 0.36);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${i.colors.goldSoft};
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 760px) {
    display: none;
  }
`,Po=o.nav`
  display: flex;
  justify-content: center;
  gap: 6px;

  a {
    position: relative;
    border-radius: 999px;
    padding: 9px 10px;
    color: rgba(248, 250, 252, 0.78);
    font-size: 0.82rem;
    font-weight: 800;
    transition:
      color ${i.motion.fast} ease,
      background ${i.motion.fast} ease;
  }

  a::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 3px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${i.colors.cyan};
    box-shadow: 0 0 10px ${i.colors.cyan};
    transform: translateX(-50%) scale(0);
    transition: transform ${i.motion.fast} ${i.motion.ease};
  }

  a:hover,
  a:focus-visible,
  a[data-active='true'] {
    outline: none;
    color: ${i.colors.white};
    background: rgba(34, 211, 238, 0.12);
    box-shadow: 0 0 18px rgba(34, 211, 238, 0.18);
  }

  a[data-active='true']::after {
    transform: translateX(-50%) scale(1);
  }

  @media (max-width: 1040px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: ${({$open:t})=>t?"grid":"none"};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid rgba(34, 211, 238, 0.2);
    border-radius: ${i.radii.panel};
    padding: 10px;
    background: rgba(5, 5, 16, 0.96);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,Fo=o.div`
  display: flex;
  gap: 4px;
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 999px;
  padding: 4px;
  background: rgba(8, 8, 18, 0.7);
`,Mo=o.button`
  min-width: 36px;
  min-height: 36px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  color: ${({$active:t})=>t?"#050510":i.colors.muted};
  background: ${({$active:t})=>t?`linear-gradient(135deg, ${i.colors.cyan}, ${i.colors.goldSoft})`:"transparent"};
  font-size: 0.72rem;
  font-weight: 900;

  @media (max-width: 420px) {
    min-width: 32px;
    min-height: 32px;
  }

  &:focus-visible {
    outline: 2px solid ${i.colors.cyan};
    outline-offset: 2px;
  }
`,Ao=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  border: 1px solid rgba(246, 211, 101, 0.42);
  border-radius: 999px;
  padding: 0 13px;
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.96), rgba(34, 211, 238, 0.88));
  color: #050510;
  font-size: 0.82rem;
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-1px);
  }

  @media (max-width: 760px) {
    display: none;
  }
`,Lo=o.button`
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  padding: 0;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  color: ${i.colors.white};

  @media (max-width: 1040px) {
    display: grid;
  }

  @media (max-width: 420px) {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
  }
`,Ro=["de","en","uk"],Bo=()=>{const{t,i18n:r}=z(),[a,d]=h.useState(!1),[n,b]=h.useState(!1),[l,c]=h.useState("hero"),[y,x]=h.useState(0);h.useEffect(()=>{let s=0;const v=()=>{s||(s=window.requestAnimationFrame(()=>{const k=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);d(window.scrollY>18),x(Math.min(window.scrollY/k,1)),s=0}))};return v(),window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),s&&window.cancelAnimationFrame(s)}},[]),h.useEffect(()=>{if(!n)return;const s=v=>{v.key==="Escape"&&b(!1)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n]),h.useEffect(()=>{const s=new IntersectionObserver(v=>{const k=v.filter(K=>K.isIntersecting).sort((K,S)=>S.intersectionRatio-K.intersectionRatio)[0];if(k!=null&&k.target.id){const K=R.find(S=>S.href===`#${k.target.id}`);K&&c(K.id)}},{rootMargin:"-34% 0px -48% 0px",threshold:[.18,.34,.5]});return R.forEach(v=>{const k=document.querySelector(v.href);k&&s.observe(k)}),()=>s.disconnect()},[]);const g=s=>{r.changeLanguage(s),b(!1)},m=r.resolvedLanguage||r.language;return e.jsxs($o,{$scrolled:a,children:[e.jsx(Ko,{"aria-hidden":"true",children:e.jsx(So,{style:{transform:`scaleX(${y})`}})}),e.jsxs(zo,{children:[e.jsxs(Co,{href:"#portfolio-top","aria-label":t("portfolio.header.brandAria"),children:[e.jsx("strong",{children:"Vladyslav"}),e.jsxs("span",{children:["/ ",f.brandName]})]}),e.jsx(Io,{children:t("portfolio.header.rank")}),e.jsx(Po,{$open:n,"aria-label":t("portfolio.header.navigation"),children:R.map(s=>e.jsx("a",{href:s.href,"aria-current":l===s.id?"page":void 0,"data-active":l===s.id?"true":void 0,onClick:()=>b(!1),children:t(s.labelKey)},s.id))}),e.jsx(Fo,{"aria-label":t("portfolio.header.language"),children:Ro.map(s=>e.jsx(Mo,{type:"button",$active:m.startsWith(s),onClick:()=>g(s),children:s.toUpperCase()},s))}),e.jsx(Ao,{href:f.emailHref,children:t("portfolio.header.cta")}),e.jsx(Lo,{type:"button","aria-label":t(n?"portfolio.header.closeMenu":"portfolio.header.openMenu"),"aria-expanded":n,onClick:()=>b(s=>!s),children:n?e.jsx($e,{"aria-hidden":"true"}):e.jsx(Ke,{"aria-hidden":"true"})})]})]})},Eo=w`
  0%, 100% { filter: drop-shadow(0 0 26px rgba(124, 58, 237, 0.42)); transform: scale(1); }
  50% { filter: drop-shadow(0 0 46px rgba(34, 211, 238, 0.46)); transform: scale(1.03); }
`,Vo=w`
  to { transform: rotate(360deg); }
`,Go=w`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -12px, 0); }
`,Ho=w`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg); }
  50% { transform: translate3d(10px, -18px, 0) rotate(8deg); }
`,To=o.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(360px, 1.04fr);
  gap: clamp(28px, 5vw, 74px);
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  scroll-margin-top: 96px;
  padding: clamp(50px, 10vw, 50px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 64px);
  background:
    radial-gradient(circle at 70% 42%, rgba(34, 211, 238, 0.12), transparent 28%),
    radial-gradient(circle at 20% 72%, rgba(168, 85, 247, 0.14), transparent 34%);

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, auto) minmax(220px, 36svh);
    gap: 18px;
  }

  @media (max-width: 560px) {
    padding: clamp(86px, 16svh, 108px) 16px 24px;
  }

  @media (max-height: 760px) and (min-width: 941px) {
    gap: 32px;
    padding-top: 92px;
    padding-bottom: 28px;
  }
`,Yo=o(p.div)`
  position: relative;
  z-index: 2;
  min-width: 0;
`,Oo=o.span`
  display: inline-flex;
  width: fit-content;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 999px;
  padding: 9px 13px;
  background: rgba(34, 211, 238, 0.08);
  color: ${i.colors.cyan};
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.16);
`,Do=o.span`
  display: block;
  width: fit-content;
  margin-top: 14px;
  border: 1px solid rgba(246, 211, 101, 0.34);
  border-radius: 999px;
  padding: 9px 13px;
  color: ${i.colors.goldSoft};
  font-size: 0.82rem;
  font-weight: 900;
`,Xo=o.h1`
  max-width: 900px;
  margin: 22px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(3.3rem, 6.2vw, 6.6rem);
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -0.055em;
  text-transform: uppercase;
  text-shadow:
    0 0 24px rgba(168, 85, 247, 0.5),
    0 0 54px rgba(34, 211, 238, 0.2);
  overflow-wrap: anywhere;

  @media (max-height: 760px) and (min-width: 941px) {
    font-size: clamp(3.1rem, 5.4vw, 5.7rem);
  }

  @media (max-width: 560px) {
    font-size: clamp(2.85rem, 10.8vw, 3.5rem);
    line-height: 0.9;
    letter-spacing: -0.045em;
  }
`,No=o.p`
  max-width: 760px;
  margin: 24px 0 0;
  color: rgba(248, 250, 252, 0.78);
  font-size: clamp(0.94rem, 1.7vw, 1.12rem);
  line-height: 1.62;
`,Uo=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;

  span {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    border: 1px solid rgba(168, 85, 247, 0.22);
    border-radius: 999px;
    padding: 9px 12px;
    background: rgba(5, 5, 16, 0.62);
    color: rgba(248, 250, 252, 0.76);
  }

  svg {
    color: ${i.colors.cyan};
  }
`,Wo=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`,_o=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(246, 211, 101, 0.5);
  border-radius: 999px;
  padding: 0 19px;
  background: linear-gradient(135deg, ${i.colors.goldSoft}, ${i.colors.cyan});
  color: #050510;
  font-weight: 900;
  box-shadow: ${i.shadows.goldGlow};

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-2px);
    outline: none;
  }
`,Q=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(56, 189, 248, 0.28);
  border-radius: 999px;
  padding: 0 18px;
  background: rgba(11, 11, 24, 0.72);
  color: ${i.colors.white};
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: ${i.colors.cyan};
    transform: translateY(-2px);
    outline: none;
  }
`,Qo=o(p.aside)`
  position: relative;
  z-index: 1;
  height: clamp(430px, 72svh, 760px);
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.26);
  border-radius: 8px;
  clip-path: polygon(0 0, calc(100% - 42px) 0, 100% 42px, 100% 100%, 42px 100%, 0 calc(100% - 42px));
  background:
    radial-gradient(circle at 50% 42%, rgba(34, 211, 238, 0.16), transparent 28%),
    radial-gradient(circle at 66% 18%, rgba(168, 85, 247, 0.22), transparent 28%), rgba(5, 5, 16, 0.58);
  box-shadow: ${i.shadows.panel};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(108deg, transparent 0 24px, rgba(248, 250, 252, 0.05) 24px 25px);
    opacity: 0.6;
  }

  @media (max-width: 940px) {
    height: 100%;
    min-height: 220px;
  }
`,Zo=o.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: clamp(14px, 3vw, 34px);

  figure {
    --portfolio-media-size: min(100%, clamp(260px, 42vw, 540px));
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }
`;o.div`
  position: absolute;
  left: 50%;
  top: 48%;
  width: min(74%, 480px);
  aspect-ratio: 1;
  border: 1px solid rgba(34, 211, 238, 0.42);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    0 0 80px rgba(34, 211, 238, 0.26),
    inset 0 0 70px rgba(124, 58, 237, 0.18);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 8%;
    border: 1px dashed rgba(246, 211, 101, 0.36);
    border-radius: 50%;
    animation: ${Vo} 18s linear infinite;
  }

  &::after {
    inset: 23%;
    border-color: rgba(168, 85, 247, 0.42);
    animation-duration: 12s;
    animation-direction: reverse;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;o.div`
  position: absolute;
  left: 50%;
  bottom: 8%;
  width: min(42%, 260px);
  aspect-ratio: 0.48;
  transform: translateX(-50%);
  animation: ${Eo} 4.8s ease-in-out infinite;

  .head,
  .coat,
  .core,
  .arm {
    position: absolute;
    display: block;
    background: linear-gradient(180deg, #f8fafc, rgba(56, 189, 248, 0.2));
  }

  .head {
    left: 37%;
    top: 0;
    width: 26%;
    aspect-ratio: 1;
    border-radius: 50% 50% 42% 42%;
  }

  .coat {
    left: 16%;
    top: 16%;
    width: 68%;
    height: 80%;
    clip-path: polygon(50% 0, 88% 16%, 100% 100%, 58% 86%, 50% 100%, 42% 86%, 0 100%, 12% 16%);
    background: linear-gradient(180deg, rgba(248, 250, 252, 0.95), rgba(124, 58, 237, 0.3), rgba(5, 5, 16, 0.4));
  }

  .core {
    left: 35%;
    top: 24%;
    width: 30%;
    height: 38%;
    clip-path: polygon(50% 0, 86% 26%, 72% 100%, 28% 100%, 14% 26%);
  }

  .arm {
    top: 30%;
    width: 10%;
    height: 44%;
    border-radius: 999px;
  }

  .left {
    left: 24%;
    transform: rotate(24deg);
  }

  .right {
    right: 24%;
    transform: rotate(-24deg);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;o.span`
  position: absolute;
  right: 22%;
  bottom: 18%;
  width: 8px;
  height: 54%;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    transparent,
    ${i.colors.cyan},
    ${i.colors.goldSoft},
    transparent
  );
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.6);
  transform: rotate(28deg);
`;o.span`
  position: absolute;
  left: 18%;
  top: 24%;
  width: 68px;
  aspect-ratio: 1;
  border-radius: 50% 50% 45% 50%;
  background:
    radial-gradient(circle at 36% 34%, #f8fafc 0 6px, transparent 7px),
    radial-gradient(circle at 62% 34%, #f8fafc 0 6px, transparent 7px),
    radial-gradient(circle, rgba(34, 211, 238, 0.34), rgba(168, 85, 247, 0.16));
  box-shadow: 0 0 34px rgba(34, 211, 238, 0.36);
  animation: ${Ho} 5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;const Jo=o.span`
  position: absolute;
  left: ${({$x:t})=>`${t}%`};
  top: ${({$y:t})=>`${t}%`};
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 7px 10px;
  background: rgba(5, 5, 16, 0.74);
  color: ${i.colors.white};
  font-size: 0.78rem;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.14);
  animation: ${Go} 4.8s ease-in-out infinite;
  animation-delay: ${({$x:t})=>`${t*-.04}s`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qo=()=>{const{t}=z(),r=h.useRef(null),a=E(),{scrollYProgress:d}=Y({target:r,offset:["start start","end start"]}),n=O(d,{stiffness:90,damping:24,mass:.3}),b=u(n,[0,1],[0,-150]),l=u(n,[0,1],[0,180]),c=u(n,[0,1],[1,1.14]),y=u(n,[0,1],[0,3]);return e.jsxs(To,{ref:r,id:"portfolio-top","aria-labelledby":"portfolio-title",children:[e.jsxs(Yo,{variants:U,initial:"hidden",animate:"visible",style:{y:a?0:b},children:[e.jsx(Oo,{children:t("portfolio.hero.systemAwakened")}),e.jsx(Do,{children:t("portfolio.profile.role")}),e.jsx(Xo,{id:"portfolio-title",children:t("portfolio.hero.title")}),e.jsx(No,{children:t("portfolio.hero.subtitle")}),e.jsxs(Uo,{children:[e.jsxs("span",{children:[e.jsx(se,{"aria-hidden":"true"})," ",t("portfolio.profile.location")]}),e.jsx("span",{children:t("portfolio.profile.languages")})]}),e.jsxs(Wo,{children:[e.jsxs(_o,{href:"#portfolio-projects",children:[t("portfolio.hero.buttons.projects")," ",e.jsx(Se,{"aria-hidden":"true"})]}),e.jsxs(Q,{href:f.emailHref,children:[e.jsx(H,{"aria-hidden":"true"})," ",t("portfolio.hero.buttons.contact")]}),e.jsxs(Q,{href:f.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[t("portfolio.hero.buttons.studio")," ",e.jsx(F,{"aria-hidden":"true"})]})]})]}),e.jsx(Qo,{variants:U,initial:"hidden",animate:"visible",style:{y:a?0:l,scale:a?1:c,rotate:a?0:y},children:e.jsxs(Zo,{children:[e.jsx(L,{type:j.hero.type,src:j.hero.src,alt:t(j.hero.altKey),eager:!0}),Bt.map(x=>e.jsx(Jo,{$x:x.x,$y:x.y,children:t(x.labelKey)},x.labelKey))]})})]})},ei=w`
  0% { transform: translateX(-140%) rotate(18deg); }
  100% { transform: translateX(260%) rotate(18deg); }
`,ti=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(90px, 10vw, 124px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 78% 22%, rgba(251, 113, 133, 0.12), transparent 28%),
    radial-gradient(circle at 18% 78%, rgba(246, 211, 101, 0.08), transparent 34%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }
`,oi=o(p.div)`
  position: absolute;
  right: clamp(-150px, 0vw, 0px);
  bottom: 7svh;
  z-index: 1;
  width: min(42vw, 650px);
  opacity: 0.86;

  figure {
    --portfolio-image-width: min(100%, 650px);
    --portfolio-image-height: 96svh;
  }

  @media (max-width: 1100px) {
    right: -190px;
    width: 620px;
    opacity: 0.24;
  }
`,ii=o(p.div)`
  max-width: 820px;
`,ri=o.span`
  display: inline-flex;
  border: 1px solid rgba(168, 85, 247, 0.32);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(124, 58, 237, 0.12);
  color: ${i.colors.purpleSoft};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,ai=o.h2`
  margin: 16px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,ni=o.p`
  max-width: 780px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`,si=o.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  max-width: 1030px;
  gap: 12px;
  margin-top: clamp(14px, 2vw, 20px);
  overflow-x: hidden;
  padding-right: min(0vw, 0px);

  > article {
    grid-column: span 2;
  }

  > article:nth-child(1),
  > article:nth-child(5) {
    grid-column: span 3;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;

    > article,
    > article:nth-child(1),
    > article:nth-child(5) {
      grid-column: span 1;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,li=o(p.article)`
  position: relative;
  display: flex;
  min-height: 218px;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: ${i.radii.compact};
  padding: 13px;
  clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px));
  background:
    radial-gradient(circle at 78% 18%, rgba(124, 58, 237, 0.22), transparent 32%),
    linear-gradient(160deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    left: -70%;
    width: 40%;
    height: 190%;
    background: linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.16), transparent);
    opacity: 0;
  }

  &:hover {
    border-color: rgba(34, 211, 238, 0.58);
    box-shadow:
      0 0 46px rgba(34, 211, 238, 0.2),
      inset 0 0 36px rgba(124, 58, 237, 0.1);
    transform: translateY(-6px);
  }

  &:hover::after {
    opacity: 1;
    animation: ${ei} 900ms ${i.motion.ease} both;
  }

  &:focus-within {
    border-color: rgba(103, 232, 249, 0.72);
    box-shadow:
      0 0 0 3px rgba(103, 232, 249, 0.12),
      0 24px 70px rgba(0, 0, 0, 0.34);
  }

  h3 {
    margin: 12px 0 0;
    color: ${i.colors.white};
    font-size: clamp(1rem, 1.35vw, 1.16rem);
    letter-spacing: 0;
  }

  p {
    margin: 8px 0 0;
    color: rgba(248, 250, 252, 0.72);
    line-height: 1.34;
    font-size: 0.88rem;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      display: none;
    }

    &:hover {
      transform: none;
    }
  }
`,pi=o.span`
  position: absolute;
  right: 14px;
  top: 14px;
  border: 1px solid rgba(251, 113, 133, 0.36);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${i.colors.danger};
  font-size: 0.74rem;
  font-weight: 900;
`,di=o.span`
  align-self: flex-start;
  max-width: calc(100% - 88px);
  border: 1px solid rgba(246, 211, 101, 0.28);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${i.colors.goldSoft};
  font-size: 0.78rem;
  font-weight: 900;
`,ci=o.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 10px;
  border-left: 2px solid rgba(246, 211, 101, 0.42);
  padding-left: 12px;
  color: rgba(248, 250, 252, 0.8);
  line-height: 1.3;
  font-size: 0.84rem;

  svg {
    flex: 0 0 auto;
    margin-top: 3px;
    color: ${i.colors.goldSoft};
  }
`,gi=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 12px;

  span {
    border: 1px solid rgba(168, 85, 247, 0.22);
    border-radius: 999px;
    padding: 5px 8px;
    background: rgba(124, 58, 237, 0.1);
    color: rgba(248, 250, 252, 0.76);
    font-size: 0.72rem;
    font-weight: 800;
  }
`,Z=o.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-top: auto;
  color: ${i.colors.cyan};
  font-weight: 900;
`,xi=()=>{const{t}=z();return e.jsxs(ti,{id:"portfolio-projects","aria-labelledby":"portfolio-projects-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsx(oi,{variants:$,"data-portfolio-media":"projects",children:e.jsx(de,{src:j.projects.src,alt:t(j.projects.altKey)})}),e.jsxs(ii,{variants:$,children:[e.jsx(ri,{children:t("portfolio.projects.eyebrow")}),e.jsx(ai,{id:"portfolio-projects-title",children:t("portfolio.projects.title")}),e.jsx(ni,{children:t("portfolio.projects.description")})]}),e.jsx(si,{children:At.map(r=>e.jsxs(li,{variants:$,children:[e.jsxs(pi,{children:[t("portfolio.projects.difficulty")," ",r.difficulty]}),e.jsx(di,{children:t(r.typeKey)}),e.jsx("h3",{children:t(r.titleKey)}),e.jsx("p",{children:t(r.descriptionKey)}),e.jsxs(ci,{children:[e.jsx(ze,{"aria-hidden":"true"}),e.jsx("span",{children:t(r.rewardKey)})]}),e.jsx(gi,{children:r.tagKeys.map(a=>e.jsx("span",{children:t(a)},a))}),r.link?e.jsxs(Z,{href:r.link,target:"_blank",rel:"noopener noreferrer","aria-label":`${t("portfolio.projects.open")} ${t(r.titleKey)}`,children:[t("portfolio.projects.open")," ",e.jsx(F,{"aria-hidden":"true"})]}):e.jsxs(Z,{as:"span",children:[t("portfolio.projects.concept")," ",e.jsx(Ce,{"aria-hidden":"true"})]})]},r.id))})]})},mi=w`
  0%, 100% { filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.25)); }
  50% { filter: drop-shadow(0 0 18px rgba(246, 211, 101, 0.34)); }
`,fi=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: clamp(90px, 10vw, 124px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 75% 35%, rgba(34, 211, 238, 0.12), transparent 30%),
    radial-gradient(circle at 18% 72%, rgba(124, 58, 237, 0.16), transparent 34%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
    margin-left: min(4vw, 50px);
    min-width: 0;
    flex: 1 1 auto;
  }

  @media (max-width: 900px) {
    min-height: auto;
    display: block;
    padding: 82px max(16px, env(safe-area-inset-left)) 42px max(16px, env(safe-area-inset-right));

    > :not([data-portfolio-media]) {
      margin-left: 0;
      width: 100%;
    }
  }
`,hi=o(p.div)`
  /* position: absolute; */
  left: clamp(-230px, -11vw, -96px);
  bottom: -8svh;
  /* z-index: 1; */
  width: min(48vw, 576px);
  opacity: 0.82;

  figure {
    --portfolio-media-size: 100%;
    width: 48vw;
    height: min(75svh, 674px);
    aspect-ratio: auto;
  }

  @media (max-width: 1024px) {
    position: absolute;
    inset: auto auto;
    width: auto;
    opacity: 0.14;
    pointer-events: none;

    figure {
      width: 100%;
      height: 62svh;
    }
  }

  @media (max-width: 560px) {
    inset: auto auto;
    max-width: 520px;
    width: auto;
    opacity: 0.1;
  }
`,bi=o.span`
  display: inline-flex;
  max-width: 100%;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${i.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  overflow-wrap: anywhere;
`,ui=o.h2`
  margin: 16px 0 0;
  color: ${i.colors.white};
  font-family: ${i.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: clamp(1.8rem, 10vw, 2.55rem);
  }
`,wi=o.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: 0.96rem;
  }
`,yi=o.div`
  width: min(94%, 760px);
  position: relative;
  display: grid;
  gap: 10px;
  margin-top: clamp(18px, 3vw, 28px);
  overflow: visible;
  padding-left: 69px;
  padding-right: min(0vw, 0px);

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    gap: 12px;
  }
`,vi=o.div`
  /* position: absolute; */
  /* top: 18px;
  bottom: 18px;
  left: 15px; */
  width: 2px;
  background: linear-gradient(
    180deg,
    ${i.colors.cyan},
    ${i.colors.purpleSoft},
    ${i.colors.goldSoft}
  );
  animation: ${mi} 3.8s ease-in-out infinite;

  @media (max-width: 700px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ji=o(p.article)`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px 18px;
  align-items: center;
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 8px;
  padding: 10px 14px;
  background:
    linear-gradient(135deg, rgba(11, 11, 24, 0.86), rgba(5, 5, 16, 0.7)),
    repeating-linear-gradient(110deg, transparent 0 22px, rgba(248, 250, 252, 0.04) 22px 23px);

  > span {
    color: ${i.colors.goldSoft};
    font-weight: 900;
  }

  h3 {
    margin: 0;
    color: ${i.colors.white};
    font-size: 0.98rem;
    letter-spacing: 0;
  }

  p {
    margin: 5px 0 0;
    color: rgba(248, 250, 252, 0.68);
    line-height: 1.3;
    font-size: 0.84rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 8px 12px;
    align-items: start;
    padding: 13px 14px;

    > span {
      grid-column: 2;
      grid-row: 1;
      line-height: 1;
    }

    > div:nth-of-type(2) {
      grid-column: 2;
      min-width: 0;
    }

    h3 {
      font-size: 0.96rem;
      overflow-wrap: anywhere;
    }

    p {
      font-size: 0.83rem;
      overflow-wrap: anywhere;
    }
  }
`,ki=o.div`
  position: absolute;
  left: -55px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(34, 211, 238, 0.44);
  border-radius: 50%;
  background: ${i.colors.backgroundPanel};
  color: ${i.colors.cyan};
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);

  @media (max-width: 700px) {
    position: static;
    grid-column: 1;
    grid-row: 1 / span 3;
    width: 30px;
    height: 30px;
    margin-top: -2px;
  }
`,$i=o.strong`
  justify-self: end;
  border: 1px solid rgba(246, 211, 101, 0.24);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${i.colors.goldSoft};
  font-size: 0.76rem;
  text-transform: uppercase;

  @media (max-width: 700px) {
    grid-column: 2;
    justify-self: start;
    padding: 7px 9px;
    font-size: 0.7rem;
  }
`,Ki=()=>{const{t}=z();return e.jsxs(fi,{id:"portfolio-timeline","aria-labelledby":"portfolio-timeline-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsx(hi,{variants:$,"data-portfolio-media":"timeline",children:e.jsx(L,{type:j.timeline.type,src:j.timeline.src,alt:t(j.timeline.altKey)})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(bi,{children:t("portfolio.timeline.eyebrow")}),e.jsx(ui,{id:"portfolio-timeline-title",children:t("portfolio.timeline.title")}),e.jsx(wi,{children:t("portfolio.timeline.description")})]}),e.jsxs(yi,{children:[e.jsx(vi,{"aria-hidden":"true"}),Lt.map((r,a)=>e.jsxs(ji,{variants:$,children:[e.jsx(ki,{children:e.jsx(se,{"aria-hidden":"true"})}),e.jsx("span",{children:String(a+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:t(r.titleKey)}),e.jsx("p",{children:t(r.descriptionKey)})]}),e.jsx($i,{children:t(r.statusKey)})]},r.id))]})]})]})},B={depth:"103, 232, 249",wipe:"253, 230, 138",deck:"251, 113, 133",diagonal:"192, 132, 252",orbit:"56, 189, 248",portal:"253, 230, 138"},Si=o.div`
  position: relative;
  isolation: isolate;
  overflow: clip;
  background: ${({$mode:t})=>`linear-gradient(180deg, transparent, rgba(${B[t]}, 0.025), transparent)`};
  perspective: 1200px;
`,zi=o(p.div)`
  position: relative;
  z-index: 1;
  transform-origin: center center;
  will-change: transform, opacity, filter;
`,Ci=o(p.div)`
  position: relative;
  z-index: 1;
  transform-origin: center center;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter, clip-path;
`,Ii=o(p.div)`
  position: absolute;
  z-index: 0;
  width: clamp(280px, 46vw, 720px);
  aspect-ratio: 1;
  border: 1px solid ${({$mode:t})=>`rgba(${B[t]}, 0.18)`};
  border-radius: ${({$mode:t})=>t==="deck"?"18%":"50%"};
  background: ${({$mode:t})=>`radial-gradient(circle, rgba(${B[t]}, 0.16), transparent 66%)`};
  filter: blur(2px);
  pointer-events: none;
  will-change: transform;

  ${({$mode:t})=>t==="depth"||t==="deck"||t==="portal"?D`
          right: -12vw;
          top: 18%;
        `:D`
          left: -14vw;
          top: 24%;
        `}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 14%;
    border: 1px dashed ${({$mode:t})=>`rgba(${B[t]}, 0.22)`};
    border-radius: inherit;
  }

  &::after {
    inset: 34%;
    border-style: solid;
  }
`,Pi=o.div`
  position: absolute;
  left: clamp(10px, 2vw, 30px);
  top: 50%;
  z-index: 3;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(248, 250, 252, 0.34);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left top;
  pointer-events: none;

  span {
    color: ${i.colors.cyan};
    font-family: ${i.fonts.display};
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    display: none;
  }
`,Fi={depth:{x:[0,0,0,0],y:[110,0,0,-54],scale:[.94,1,1,.98],rotate:[0,0,0,0]},wipe:{x:[-90,0,0,48],y:[30,0,0,-24],scale:[.98,1,1,.99],rotate:[-.7,0,0,.35]},deck:{x:[0,0,0,0],y:[72,0,0,-38],scale:[.86,1,1,.96],rotate:[0,0,0,0]},diagonal:{x:[86,0,0,-46],y:[90,0,0,-42],scale:[.95,1,1,.98],rotate:[1.4,0,0,-.45]},orbit:{x:[-56,0,0,36],y:[74,0,0,-36],scale:[.9,1,1,.97],rotate:[-1.5,0,0,.8]},portal:{x:[0,0,0,0],y:[46,0,0,-24],scale:[.76,1,1,1.04],rotate:[0,0,0,0]}},I={duration:.9,ease:[.16,1,.3,1]},Mi={depth:{hidden:{opacity:.08,y:150,scale:.84,rotateX:13,filter:"blur(18px)"},visible:{opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:I}},wipe:{hidden:{opacity:.24,x:-150,clipPath:"inset(0 100% 0 0)"},visible:{opacity:1,x:0,clipPath:"inset(0 0% 0 0)",transition:{...I,duration:1.05}}},deck:{hidden:{opacity:.08,y:125,scale:.74,rotateX:18,filter:"blur(12px)"},visible:{opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:I}},diagonal:{hidden:{opacity:.12,x:135,y:105,rotateZ:2.8,clipPath:"polygon(0 0, 12% 0, 0 18%, 0 18%)"},visible:{opacity:1,x:0,y:0,rotateZ:0,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",transition:{...I,duration:1.1}}},orbit:{hidden:{opacity:.06,x:-135,y:80,scale:.76,rotateZ:-4.5,filter:"blur(14px)"},visible:{opacity:1,x:0,y:0,scale:1,rotateZ:0,filter:"blur(0px)",transition:{...I,duration:1.1}}},portal:{hidden:{opacity:.08,scale:.58,clipPath:"circle(4% at 50% 50%)",filter:"blur(18px)"},visible:{opacity:1,scale:1,clipPath:"circle(150% at 50% 50%)",filter:"blur(0px)",transition:{...I,duration:1.2}}}},Ai={hidden:{opacity:.55},visible:{opacity:1,transition:{duration:.2}}},P=({children:t,index:r,mode:a,reducedMotion:d})=>{const n=h.useRef(null),b=E(),l=d??b,c=Re(n,{amount:.12,margin:"-6% 0px -6% 0px"}),{scrollYProgress:y}=Y({target:n,offset:["start end","end start"]}),x=O(y,{stiffness:82,damping:24,mass:.34}),g=Fi[a],m=[0,.24,.76,1],s=u(x,m,g.x),v=u(x,m,g.y),k=u(x,m,g.scale),K=u(x,m,g.rotate),S=u(x,[0,.14,.82,1],[.28,1,1,.68]),C=u(x,[0,.2,.8,1],["blur(16px)","blur(0px)","blur(0px)","blur(5px)"]),ce=u(x,[0,1],["18%","-22%"]),ge=u(x,[0,1],[-18,22]);return e.jsxs(Si,{ref:n,$mode:a,"data-scroll-chapter":a,children:[e.jsx(Ii,{$mode:a,style:{y:l?0:ce,rotate:l?0:ge},"aria-hidden":"true"}),e.jsxs(Pi,{"aria-hidden":"true",children:[e.jsx("span",{children:String(r).padStart(2,"0")}),a]}),e.jsx(Ci,{"data-scroll-reveal":a,variants:l?Ai:Mi[a],initial:"hidden",animate:c?"visible":"hidden",children:e.jsx(zi,{"data-scroll-canvas":a,style:{x:l?0:s,y:l?0:v,scale:l?1:k,rotate:l?0:K,opacity:l?1:S,filter:l?"none":C},children:t})})]})},Li=o.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  contain: paint;
`,Ri=o(p.div)`
  position: absolute;
  inset: -15%;
  opacity: 0.9;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: background-color;

  @media (max-width: 760px) {
    display: none;
  }
`,Bi=o(p.div)`
  position: absolute;
  left: -12%;
  right: -12%;
  bottom: -38%;
  height: 82%;
  opacity: 0.16;
  background-image:
    linear-gradient(rgba(103, 232, 249, 0.24) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 232, 249, 0.24) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, transparent, black 32%, transparent 90%);
  transform: perspective(460px) rotateX(62deg);
  transform-origin: center bottom;
  will-change: transform;
`,J=o(p.div)`
  position: absolute;
  left: ${({$variant:t})=>t==="slow"?"-14vw":"auto"};
  right: ${({$variant:t})=>t==="fast"?"-10vw":"auto"};
  top: ${({$variant:t})=>t==="slow"?"18vh":"42vh"};
  width: ${({$variant:t})=>t==="slow"?"clamp(360px, 48vw, 760px)":"clamp(280px, 36vw, 580px)"};
  aspect-ratio: 1;
  border: 1px solid
    ${({$variant:t})=>t==="slow"?"rgba(103, 232, 249, 0.18)":"rgba(253, 230, 138, 0.18)"};
  border-radius: 50%;
  background: conic-gradient(
    from 10deg,
    transparent 0 12%,
    ${({$variant:t})=>t==="slow"?"rgba(103, 232, 249, 0.16)":"rgba(192, 132, 252, 0.16)"} 12% 14%,
    transparent 14% 42%,
    rgba(253, 230, 138, 0.12) 42% 44%,
    transparent 44% 100%
  );
  box-shadow:
    inset 0 0 90px rgba(124, 58, 237, 0.06),
    0 0 80px rgba(34, 211, 238, 0.08);
  will-change: transform;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 10%;
    border: 1px dashed rgba(248, 250, 252, 0.12);
    border-radius: 50%;
  }

  &::after {
    inset: 28%;
    border-style: solid;
    border-color: rgba(192, 132, 252, 0.15);
  }
`,Ei=o(p.div)`
  position: absolute;
  left: -4vw;
  top: 42%;
  width: 108vw;
  color: transparent;
  font-family: ${i.fonts.display};
  font-size: clamp(6rem, 15vw, 15rem);
  line-height: 0.78;
  letter-spacing: -0.025em;
  white-space: nowrap;
  -webkit-text-stroke: 1px rgba(248, 250, 252, 0.075);
  opacity: 0.72;
  will-change: transform;
`,Vi=o.div`
  position: absolute;
  right: clamp(12px, 2vw, 32px);
  top: 50%;
  display: grid;
  gap: 6px;
  transform: translateY(-50%);
  color: rgba(248, 250, 252, 0.5);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  writing-mode: vertical-rl;

  @media (max-width: 760px) {
    display: none;
  }
`,Gi=o.strong`
  display: flex;
  gap: 5px;
  align-items: baseline;
  color: ${i.colors.cyan};
  font-family: ${i.fonts.display};
  font-size: 1.35rem;
  letter-spacing: 0.08em;
  writing-mode: horizontal-tb;

  small {
    color: rgba(248, 250, 252, 0.42);
    font-family: ${i.fonts.body};
    font-size: 0.58rem;
  }
`,Hi=o.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background: repeating-linear-gradient(180deg, transparent 0 3px, rgba(248, 250, 252, 0.06) 3px 4px);
  mix-blend-mode: overlay;
`,G=7,Ti=({reducedMotion:t})=>{const r=E(),a=t??r,[d,n]=h.useState(0),b=h.useRef(0),{scrollYProgress:l}=Y(),c=O(l,{stiffness:72,damping:22,mass:.32}),y=u(c,[0,1],["0%","-14%"]),x=u(c,[0,1],["34vh","-44vh"]),g=u(c,[0,1],[-8,8]),m=u(c,[0,1],[0,190]),s=u(c,[0,1],[30,-290]),v=u(c,[0,.5,1],[.84,1.18,.9]),k=u(c,[0,.18,.36,.56,.76,1],["rgba(76, 29, 149, 0.24)","rgba(8, 145, 178, 0.2)","rgba(234, 179, 8, 0.12)","rgba(190, 24, 93, 0.16)","rgba(37, 99, 235, 0.18)","rgba(126, 34, 206, 0.22)"]);return Me(c,"change",K=>{const S=Math.min(Math.floor(K*G),G-1);S!==b.current&&(b.current=S,n(S))}),e.jsxs(Li,{"aria-hidden":"true",children:[e.jsx(Ri,{style:{backgroundColor:k}}),e.jsx(Bi,{style:{y:a?0:y}}),e.jsx(J,{$variant:"slow",style:{rotate:a?0:m,scale:a?1:v}}),e.jsx(J,{$variant:"fast",style:{rotate:a?0:s,scale:a?1:v}}),e.jsx(Ei,{style:{y:a?0:x,rotate:a?0:g},children:"BUILD / EVOLVE / IMPACT"}),e.jsxs(Vi,{children:[e.jsx("span",{children:"CHAPTER"}),e.jsxs(Gi,{children:[String(d+1).padStart(2,"0"),e.jsxs("small",{children:["/ ",String(G).padStart(2,"0")]})]})]}),e.jsx(Hi,{})]})},Yi=o(p.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  padding: clamp(84px, 8vw, 108px) max(24px, calc((100% - 1440px) / 2)) clamp(24px, 4vw, 42px);
  color: #111827;
  background:
    radial-gradient(circle at 82% 28%, rgba(168, 85, 247, 0.1), transparent 30%),
    radial-gradient(circle at 16% 72%, rgba(34, 211, 238, 0.12), transparent 32%),
    linear-gradient(135deg, #aeaeae 0%, #d6d6d6 48%, #fbeeff 100%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
    min-width: 0;
    flex: 1 1 auto;
  }

  @media (max-width: 900px) {
    min-height: auto;
    display: block;
    padding: 82px max(16px, env(safe-area-inset-left)) 42px max(16px, env(safe-area-inset-right));

    > :not([data-portfolio-media]) {
      width: 100%;
    }
  }
`,Oi=o(p.div)`
  /* position: absolute; */
  right: clamp(-130px, -5vw, -40px);
  bottom: -5svh;
  z-index: 1;
  width: min(42vw, 620px);

  figure {
    --portfolio-media-size: 100%;
    width: 100%;
    height: min(76svh, 820px);
    aspect-ratio: auto;
  }

  @media (max-width: 860px) {
    position: absolute;
    inset: auto auto;
    bottom: 60svh;
    width: auto;
    opacity: 0.14;
    pointer-events: none;

    figure {
      width: 100%;
      height: 60svh;
    }
  }

  @media (max-width: 560px) {
    inset: auto auto;
    max-width: 520px;
    bottom: 60svh;
    width: auto;
    opacity: 0.1;
  }
`,Di=o.span`
  display: inline-flex;
  max-width: 100%;
  border: 1px solid rgba(212, 175, 55, 0.32);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.72);
  color: #9a6b08;
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  overflow-wrap: anywhere;
`,Xi=o.h2`
  margin: 16px 0 0;
  color: #0f172a;
  font-family: ${i.fonts.heading};
  font-size: clamp(1.75rem, 3.2vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: clamp(1.75rem, 9vw, 2.4rem);
  }
`,Ni=o.p`
  max-width: 760px;
  margin: 12px 0 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.55;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: 0.96rem;
  }
`,Ui=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(100%, 860px);
  max-width: 100%;
  gap: 12px;
  margin-top: clamp(14px, 2vw, 20px);
  overflow: visible;
  padding-right: min(5vw, 60px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding-right: 0;
    gap: 14px;
  }
`,Wi=o(p.article)`
  position: relative;
  overflow: hidden;
  min-width: 0;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 8px;
  padding: clamp(12px, 1.4vw, 15px);
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
  background:
    linear-gradient(155deg, rgba(255, 255, 255, 0.94), rgba(241, 245, 249, 0.82)),
    radial-gradient(circle at 16% 0%, rgba(34, 211, 238, 0.14), transparent 36%);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.1);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &:hover {
    border-color: rgba(212, 175, 55, 0.42);
    box-shadow:
      0 24px 60px rgba(15, 23, 42, 0.14),
      0 0 34px rgba(34, 211, 238, 0.14);
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 560px) {
    clip-path: none;
    padding: 14px;
  }
`,_i=o.span`
  position: absolute;
  left: 39px;
  top: 70px;
  bottom: 18px;
  width: 1px;
  background: linear-gradient(180deg, ${i.colors.cyan}, rgba(168, 85, 247, 0.18));
  opacity: 0.7;

  @media (max-width: 560px) {
    display: none;
  }
`,Qi=o.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: start;

  h3 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(1rem, 1.4vw, 1.16rem);
    letter-spacing: 0;
  }

  p {
    margin: 5px 0 0;
    color: rgba(15, 23, 42, 0.64);
    line-height: 1.32;
    font-size: 0.86rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 10px 12px;

    h3,
    p {
      overflow-wrap: anywhere;
    }
  }
`,Zi=o.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(34, 211, 238, 0.32);
  border-radius: 50%;
  background: rgba(34, 211, 238, 0.12);
  color: ${i.colors.cyan};
  box-shadow: 0 10px 24px rgba(34, 211, 238, 0.12);

  @media (max-width: 560px) {
    width: 36px;
    height: 36px;
  }
`,Ji=o.span`
  border: 1px solid rgba(246, 211, 101, 0.32);
  border-radius: 999px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.72);
  color: #9a6b08;
  font-weight: 900;

  @media (max-width: 560px) {
    grid-column: 2;
    justify-self: start;
    padding: 6px 9px;
    font-size: 0.78rem;
  }
`,qi=o.div`
  display: grid;
  gap: 7px;
  margin-top: 12px;
  padding-left: 52px;

  @media (max-width: 560px) {
    padding-left: 0;
  }
`,er=o.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  align-items: center;

  span {
    color: rgba(15, 23, 42, 0.8);
    font-size: 0.9rem;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong {
    color: #9a6b08;
    font-size: 0.86rem;
  }
`,tr=o.div`
  grid-column: 1 / -1;
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.1);
`,or=o.span`
  display: block;
  width: ${({$level:t})=>`${t}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    ${i.colors.purpleSoft},
    ${i.colors.cyan},
    ${i.colors.goldSoft}
  );
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.25);
`,ir=()=>{const{t}=z();return e.jsxs(Yi,{id:"portfolio-skills","aria-labelledby":"portfolio-skills-title",variants:A,initial:"hidden",whileInView:"visible",viewport:M,children:[e.jsxs("div",{children:[e.jsxs(p.div,{variants:$,children:[e.jsx(Di,{children:t("portfolio.skills.eyebrow")}),e.jsx(Xi,{id:"portfolio-skills-title",children:t("portfolio.skills.title")}),e.jsx(Ni,{children:t("portfolio.skills.description")})]}),e.jsx(Ui,{children:Mt.map(r=>{const a=r.icon;return e.jsxs(Wi,{variants:$,children:[e.jsx(_i,{"aria-hidden":"true"}),e.jsxs(Qi,{children:[e.jsx(Zi,{children:e.jsx(a,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("h3",{children:t(r.titleKey)}),e.jsx("p",{children:t(r.descriptionKey)})]}),e.jsx(Ji,{children:r.rank})]}),e.jsx(qi,{children:r.skills.slice(0,4).map(d=>e.jsxs(er,{children:[e.jsx("span",{children:t(d.labelKey)}),e.jsxs("strong",{children:[d.level,"%"]}),e.jsx(tr,{children:e.jsx(or,{as:p.span,$level:d.level,variants:le,style:{transformOrigin:"left center"}})})]},d.labelKey))})]},r.id)})})," "]}),e.jsx(Oi,{variants:$,"data-portfolio-media":"skills",children:e.jsx(L,{type:j.skills.type,src:j.skills.src,alt:t(j.skills.altKey)})})]})},rr=Ie`
  html.portfolio-page-active,
  body.portfolio-page-active {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html.portfolio-page-active *,
  body.portfolio-page-active * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html.portfolio-page-active::-webkit-scrollbar,
  body.portfolio-page-active::-webkit-scrollbar,
  html.portfolio-page-active *::-webkit-scrollbar,
  body.portfolio-page-active *::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  html.portfolio-page-active {
    scroll-padding-top: 96px;
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html.portfolio-page-active {
      scroll-behavior: auto;
    }
  }
`,ar=o.main`
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.12), transparent 28%),
    linear-gradient(
      180deg,
      ${i.colors.background} 0%,
      ${i.colors.backgroundSoft} 48%,
      ${i.colors.backgroundPanel} 100%
    );
  color: ${i.colors.white};
  font-family: ${i.fonts.body};
  line-height: 1.5;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  p,
  span,
  strong {
    color: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    touch-action: manipulation;
  }

  button {
    cursor: pointer;
    touch-action: manipulation;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${i.colors.cyan};
    outline-offset: 3px;
  }
`,nr=o.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    520px circle at var(--spotlight-x, 50vw) var(--spotlight-y, 28vh),
    rgba(103, 232, 249, 0.085),
    rgba(192, 132, 252, 0.035) 42%,
    transparent 72%
  );
  mix-blend-mode: screen;

  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`,sr=o.div`
  position: relative;
  z-index: ${i.z.content};
  width: 100%;
  margin: 0 auto;
`,lr=o.a`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: ${i.z.skipLink};
  transform: translateY(-140%);
  border-radius: ${i.radii.pill};
  padding: 10px 14px;
  background: ${i.colors.white};
  color: ${i.colors.background};
  font-weight: 900;

  &:focus {
    transform: translateY(0);
  }
`,pr=o.button`
  position: fixed;
  left: clamp(10px, 1.6vw, 24px);
  bottom: clamp(10px, 1.6vw, 24px);
  z-index: ${i.z.header};
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 42px;
  border: 1px solid ${({$active:t})=>t?"rgba(103, 232, 249, 0.48)":"rgba(148, 163, 184, 0.28)"};
  border-radius: 999px;
  padding: 0 14px;
  color: ${({$active:t})=>t?i.colors.cyan:i.colors.muted};
  background: rgba(5, 5, 16, 0.86);
  box-shadow: ${({$active:t})=>t?"0 0 28px rgba(34, 211, 238, 0.18)":"none"};
  backdrop-filter: blur(14px);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  cursor: pointer;
  transition: 180ms ease;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({$active:t})=>t?i.colors.cyan:i.colors.muted};
    box-shadow: ${({$active:t})=>t?`0 0 12px ${i.colors.cyan}`:"none"};
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${i.colors.goldSoft};
  }

  &:focus-visible {
    outline: 2px solid ${i.colors.cyan};
    outline-offset: 3px;
  }
`,cr=()=>{const{t}=z(),r=E(),[a,d]=h.useState(!0),n=!a;Pe(n),h.useEffect(()=>{const l=window.localStorage.getItem("portfolio-motion");l==="reduced"&&d(!1),l==="full"&&d(!0)},[r]);const b=()=>{d(l=>{const c=!l;return window.localStorage.setItem("portfolio-motion",c?"full":"reduced"),c})};return h.useEffect(()=>(document.title=t("portfolio.meta.title"),document.documentElement.classList.add("portfolio-page-active"),document.body.classList.add("portfolio-page-active"),window.scrollTo({top:0,behavior:"auto"}),()=>{document.documentElement.classList.remove("portfolio-page-active"),document.body.classList.remove("portfolio-page-active")}),[t]),e.jsxs(ar,{children:[e.jsx(rr,{}),e.jsx(lr,{href:"#portfolio-top",children:t("portfolio.skipLink")}),e.jsx(Je,{}),e.jsx(Ti,{reducedMotion:n}),e.jsx(nr,{"aria-hidden":"true"}),e.jsxs(pr,{type:"button",$active:a,"aria-pressed":a,"aria-label":a?"Disable full portfolio motion":"Enable full portfolio motion",title:r?"System reduced motion detected — click to change":"Toggle motion effects",onClick:b,children:[e.jsx("span",{"aria-hidden":"true"}),"FX ",a?"FULL":"CALM"]}),e.jsx(Bo,{}),e.jsxs(sr,{children:[e.jsx(qo,{}),e.jsx(P,{index:2,mode:"depth",reducedMotion:n,children:e.jsx(ro,{})}),e.jsx(P,{index:3,mode:"wipe",reducedMotion:n,children:e.jsx(ir,{})}),e.jsx(P,{index:4,mode:"deck",reducedMotion:n,children:e.jsx(xi,{})}),e.jsx(P,{index:5,mode:"diagonal",reducedMotion:n,children:e.jsx(Ki,{})}),e.jsx(P,{index:6,mode:"orbit",reducedMotion:n,children:e.jsx(mo,{})}),e.jsx(P,{index:7,mode:"portal",reducedMotion:n,children:e.jsx(It,{})})]}),e.jsx(ko,{})]})};export{cr as PortfolioPage,cr as default};
