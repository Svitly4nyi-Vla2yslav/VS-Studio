import{d as o,b as p,j as e,e as L,r as x,m as n,c as u,F as C,f as s,g as Q,h as k,i as E,k as V,l as D,n as J,o as O,p as Y,q as Z,s as q,t as N,v as ee,w as ie,x as oe,y as te,z as X,B as re,C as ae,D as ne,E as se}from"./index-DS4YZy7d.js";const le=p`
  0% { transform: translate3d(-2%, -2%, 0); }
  100% { transform: translate3d(2%, 2%, 0); }
`,pe=p`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -18px, 0) scale(1.02); }
`,de=p`
  0% { transform: translate3d(0, 40px, 0) rotate(45deg); opacity: 0; }
  18% { opacity: 0.7; }
  100% { transform: translate3d(18px, -120px, 0) rotate(135deg); opacity: 0; }
`,ce=p`
  to { transform: rotate(360deg); }
`,ge=o.div`
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
`,xe=o.div`
  position: absolute;
  inset: -8%;
  opacity: 0.22;
  background:
    repeating-conic-gradient(from 18deg at 50% 20%, transparent 0deg 5deg, rgba(248, 250, 252, 0.08) 5deg 5.8deg, transparent 5.8deg 9deg),
    repeating-linear-gradient(115deg, transparent 0 18px, rgba(34, 211, 238, 0.08) 18px 19px);
  mask-image: radial-gradient(circle at 50% 32%, black 0%, transparent 64%);
  animation: ${le} 10s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,me=o.span`
  position: absolute;
  left: ${({$index:i})=>[58,6,76,28][i]}%;
  top: ${({$index:i})=>[10,48,70,82][i]}%;
  width: ${({$index:i})=>[380,260,310,190][i]}px;
  max-width: 60vw;
  aspect-ratio: 1;
  border: 1px solid rgba(34, 211, 238, 0.14);
  border-radius: 50%;
  box-shadow:
    0 0 44px rgba(124, 58, 237, 0.12),
    inset 0 0 36px rgba(246, 211, 101, 0.06);
  transform-origin: center;
  animation: ${ce} ${({$index:i})=>18+i*7}s linear infinite;

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
`,fe=o.div`
  position: absolute;
  left: ${({$left:i})=>`${i}%`};
  top: ${({$top:i})=>`${i}%`};
  width: ${({$size:i})=>`${i}px`};
  aspect-ratio: 0.62;
  opacity: ${({$kind:i})=>i==="guild"?.07:.12};
  filter: drop-shadow(0 0 26px rgba(34, 211, 238, 0.26));
  animation: ${pe} ${({$size:i})=>`${9+i%5}s`} ease-in-out infinite;
  animation-delay: ${({$left:i})=>`${i*-.08}s`};

  @media (max-width: 720px) {
    opacity: 0.05;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,he=o.span`
  position: absolute;
  left: 9%;
  top: 20%;
  width: 78%;
  height: 70%;
  clip-path: polygon(48% 0, 100% 100%, 56% 86%, 4% 100%);
  background: linear-gradient(180deg, rgba(168, 85, 247, 0.95), rgba(5, 5, 16, 0.3));
`,be=o.span`
  position: absolute;
  left: 35%;
  top: 2%;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50% 50% 44% 44%;
  background: #f8fafc;
`,ue=o.span`
  position: absolute;
  left: 28%;
  top: 25%;
  width: 44%;
  height: 38%;
  clip-path: polygon(50% 0, 86% 24%, 70% 100%, 30% 100%, 14% 24%);
  background: #f8fafc;
`,we=o.span`
  position: absolute;
  right: 6%;
  top: 18%;
  width: 5%;
  height: 74%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.95), rgba(246, 211, 101, 0));
  transform: rotate(28deg);
`,ye=o.span`
  position: absolute;
  left: ${({$index:i})=>`${i*13%100}%`};
  bottom: -10%;
  width: ${({$index:i})=>`${4+i%4}px`};
  height: ${({$index:i})=>`${18+i%5*8}px`};
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.85), rgba(246, 211, 101, 0.8));
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);
  animation: ${de} ${({$index:i})=>`${8+i%7}s`} linear infinite;
  animation-delay: ${({$index:i})=>`${i*-.7}s`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.22;
  }
`,ve=[{kind:"warrior",left:6,top:18,size:170},{kind:"mage",left:78,top:14,size:150},{kind:"swordsman",left:84,top:62,size:180},{kind:"spirit",left:14,top:70,size:118},{kind:"guild",left:48,top:42,size:210}],je=Array.from({length:28},(i,r)=>r),ke=Array.from({length:4},(i,r)=>r),$e=()=>e.jsxs(ge,{"aria-hidden":"true",children:[e.jsx(xe,{}),ke.map(i=>e.jsx(me,{$index:i},`circle-${i}`)),ve.map(i=>e.jsxs(fe,{$left:i.left,$top:i.top,$size:i.size,$kind:i.kind,children:[e.jsx(he,{}),e.jsx(be,{}),e.jsx(ue,{}),e.jsx(we,{})]},i.kind)),je.map(i=>e.jsx(ye,{$index:i},`shard-${i}`))]}),Ke="/assets/Contact%20section-video-C46qwA7Z.mp4",Se="/assets/Hero%20section-4xnONyAA.mp4",ze="/assets/Network%20section-video-DZDuf_bs.mp4",Fe="/assets/Profile%20%20System%20section-r7iC3KHM.png",Ie="/assets/Projects%20section-CntVwrdJ.png",Pe="/assets/Skills%20section-video-DUslJTdn.mp4",Ae="/assets/Timeline%20section-video-CRAO9MGS.mp4",d={hero:{type:"video",src:Se,altKey:"portfolio.media.hero"},profile:{src:Fe,altKey:"portfolio.media.profile"},skills:{type:"video",src:Pe,altKey:"portfolio.media.skills"},projects:{src:Ie,altKey:"portfolio.media.projects"},timeline:{type:"video",src:Ae,altKey:"portfolio.media.timeline"},network:{type:"video",src:ze,altKey:"portfolio.media.network"},contact:{type:"video",src:Ke,altKey:"portfolio.media.contact"}},$={once:!0,amount:.22},M={hidden:{opacity:0,y:32,filter:"blur(14px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.78,ease:L}}},K={hidden:{},visible:{transition:{staggerChildren:.12}}},c={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:.58,ease:L}}},_={hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.9,ease:L}}},t={colors:{background:"#050510",backgroundSoft:"#080812",backgroundPanel:"#0B0B18",purpleSoft:"#A855F7",cyan:"#22D3EE",goldSoft:"#F6D365",white:"#F8FAFC",muted:"#A1A1AA",danger:"#FB7185"},fonts:{body:'"Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Cinzel", "Playfair Display", "Geist", system-ui, serif'},radii:{pill:"999px"},shadows:{panel:"0 24px 90px rgba(0, 0, 0, 0.45)",cyanGlow:"0 0 30px rgba(34, 211, 238, 0.3)",goldGlow:"0 0 30px rgba(246, 211, 101, 0.26)"}},Ce=p`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.6deg); }
  50% { transform: translate3d(0, -12px, 0) rotate(0.8deg); }
`,Le=p`
  0%, 100% { opacity: 0.58; transform: scale(0.96); }
  50% { opacity: 0.92; transform: scale(1.04); }
`,Be=p`
  0% { transform: translateX(-130%) rotate(18deg); opacity: 0; }
  22% { opacity: 0.55; }
  52%, 100% { transform: translateX(180%) rotate(18deg); opacity: 0; }
`,U=o.figure`
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
    linear-gradient(145deg, rgba(5, 5, 16, ${({$type:i})=>i==="video"?"0.82":"0.46"}), rgba(11, 11, 24, 0.5));
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
    animation: ${Be} 7.8s ease-in-out infinite;
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
`,Me=o.span`
  position: absolute;
  inset: 8%;
  z-index: -1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent 62%),
    conic-gradient(from 120deg, rgba(124, 58, 237, 0.24), rgba(246, 211, 101, 0.22), rgba(34, 211, 238, 0.28), rgba(124, 58, 237, 0.24));
  filter: blur(10px);
  animation: ${Le} 5.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,He=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({$type:i})=>i==="video"?"0":"clamp(12px, 2vw, 22px)"};
`,Ge=o.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  filter:
    drop-shadow(0 0 18px rgba(34, 211, 238, 0.2))
    drop-shadow(0 18px 36px rgba(0, 0, 0, 0.34));
  animation: ${Ce} 6.8s ease-in-out infinite;

  @media (hover: hover) and (pointer: fine) {
    ${U}:hover & {
      transform: translate3d(0, -8px, 0) scale(1.015);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Te=o.video`
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
`,Re=o.figcaption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  color: ${t.colors.white};
`,S=({type:i,src:r,alt:a,className:h,eager:m=!1})=>{const y=x.useRef(null),v=x.useRef(null),[j,P]=x.useState(m),z=x.useRef(m),l=x.useRef(!1);return x.useEffect(()=>{const b=v.current;!b||i!=="video"||!j||!l.current||b.play().catch(()=>{})},[j,r,i]),x.useEffect(()=>{const b=y.current,g=v.current;if(!b||!g||i!=="video")return;const f=()=>{g.preload="metadata",z.current||(z.current=!0,P(!0))};if(!("IntersectionObserver"in window)){f(),g.play().catch(()=>{});return}const w=new IntersectionObserver(([F])=>{F.isIntersecting&&(f(),w.disconnect())},{rootMargin:"800px 0px",threshold:0}),B=new IntersectionObserver(([F])=>{l.current=F.isIntersecting,F.isIntersecting?(f(),g.play().catch(()=>{})):g.pause()},{threshold:.2});return m&&f(),w.observe(b),B.observe(b),()=>{w.disconnect(),B.disconnect()}},[m,i]),e.jsxs(U,{ref:y,className:h,$type:i,children:[e.jsx(Me,{"aria-hidden":"true"}),e.jsx(He,{$type:i,children:i==="image"?e.jsx(Ge,{src:r,alt:a,loading:"lazy",decoding:"async",fetchPriority:m?"high":"low"}):e.jsx(Te,{ref:v,src:j?r:void 0,"aria-label":a,loop:!0,muted:!0,playsInline:!0,controls:!1,preload:m||j?"metadata":"none",disablePictureInPicture:!0})}),e.jsx(Re,{children:a})]})},Ee=p`
  to { transform: rotate(360deg); }
`,Ve=p`
  0%, 100% { opacity: 0.58; filter: blur(0); }
  50% { opacity: 0.86; filter: blur(1px); }
`,De=o(n.section)`
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
`,Oe=o(n.div)`
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
`,Ye=o(n.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(246, 211, 101, 0.3);
  border-radius: 8px;
  padding: clamp(22px, 4vw, 54px);
  clip-path: polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px));
  background:
    radial-gradient(circle at 78% 45%, rgba(34, 211, 238, 0.17), transparent 28%),
    linear-gradient(135deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  box-shadow: ${t.shadows.panel};
`,Ne=o.div`
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
    ${Ee} 14s linear infinite,
    ${Ve} 4s ease-in-out infinite;

  @media (max-width: 760px) {
    opacity: 0.28;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xe=o.div`
  width: 56%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(5, 5, 16, 0.96), rgba(124, 58, 237, 0.24), transparent 70%);
`,_e=o.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${t.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,Ue=o.h2`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 16px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(1.95rem, 4.2vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,We=o.p`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 18px 0 0;
  color: rgba(248, 250, 252, 0.76);
  line-height: 1.55;
`,Qe=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
`,Je=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(246, 211, 101, 0.45);
  border-radius: 999px;
  padding: 0 18px;
  background: linear-gradient(135deg, ${t.colors.goldSoft}, ${t.colors.cyan});
  color: #050510;
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-2px);
    outline: none;
  }
`,A=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(56, 189, 248, 0.24);
  border-radius: 999px;
  padding: 0 18px;
  background: rgba(5, 5, 16, 0.68);
  color: ${t.colors.white};
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: ${t.colors.cyan};
    transform: translateY(-2px);
    outline: none;
  }
`,Ze=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 0;
  overflow-x: hidden;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,qe=o(n.a)`
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 8px;
  padding: 16px;
  background: rgba(11, 11, 24, 0.74);

  svg {
    color: ${t.colors.cyan};
  }

  span {
    display: block;
    margin-top: 12px;
    color: ${t.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 8px;
    color: ${t.colors.white};
    line-height: 1.35;
    word-break: break-word;
  }

  &:hover,
  &:focus-visible {
    border-color: rgba(34, 211, 238, 0.46);
    outline: none;
  }
`,ei={linkedin:D,facebook:V,instagram:E},ii=()=>{const{t:i}=u(),r=[{id:"email",label:i("portfolio.contact.channels.email"),value:s.email,href:s.emailHref,icon:C,external:!1},{id:"phone",label:i("portfolio.contact.channels.phone"),value:s.phone,href:s.phoneHref,icon:Q,external:!1},{id:"website",label:i("portfolio.contact.channels.website"),value:s.websiteLabel,href:s.websiteUrl,icon:k,external:!0},...s.socialLinks.map(a=>({id:a.id,label:a.label,value:"VS Web Studio",href:a.url,icon:ei[a.id],external:!0,rel:"me noopener noreferrer"}))];return e.jsxs(De,{id:"portfolio-contact","aria-labelledby":"portfolio-contact-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsx(Oe,{variants:c,"data-portfolio-media":"contact",children:e.jsx(S,{type:d.contact.type,src:d.contact.src,alt:i(d.contact.altKey)})}),e.jsxs(Ye,{variants:c,children:[e.jsx(Ne,{"aria-hidden":"true",children:e.jsx(Xe,{})}),e.jsx(_e,{children:i("portfolio.contact.eyebrow")}),e.jsx(Ue,{id:"portfolio-contact-title",children:i("portfolio.contact.title")}),e.jsx(We,{children:i("portfolio.contact.description")}),e.jsxs(Qe,{children:[e.jsxs(Je,{href:s.emailHref,children:[e.jsx(J,{"aria-hidden":"true"})," ",i("portfolio.contact.buttons.project")]}),e.jsxs(A,{href:s.emailHref,children:[e.jsx(C,{"aria-hidden":"true"})," ",i("portfolio.contact.buttons.email")]}),e.jsxs(A,{href:s.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[i("portfolio.contact.buttons.website")," ",e.jsx(k,{"aria-hidden":"true"})]}),e.jsxs(A,{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(O,{"aria-hidden":"true"})," ",i("portfolio.contact.buttons.github")]})]})]}),e.jsx(Ze,{children:r.map(a=>{const h=a.icon;return e.jsxs(qe,{href:a.href,target:a.external?"_blank":void 0,rel:"rel"in a?a.rel:a.external?"noopener noreferrer":void 0,variants:c,children:[e.jsx(h,{"aria-hidden":"true"}),e.jsx("span",{children:a.label}),e.jsx("strong",{children:a.value})]},a.id)})})]})},I=[{id:"hero",labelKey:"portfolio.nav.hero",href:"#portfolio-top"},{id:"profile",labelKey:"portfolio.nav.profile",href:"#portfolio-profile"},{id:"skills",labelKey:"portfolio.nav.skills",href:"#portfolio-skills"},{id:"projects",labelKey:"portfolio.nav.projects",href:"#portfolio-projects"},{id:"timeline",labelKey:"portfolio.nav.timeline",href:"#portfolio-timeline"},{id:"network",labelKey:"portfolio.nav.network",href:"#portfolio-network"},{id:"contact",labelKey:"portfolio.nav.contact",href:"#portfolio-contact"}],oi=[{labelKey:"portfolio.system.rank",valueKey:"portfolio.profile.role"},{labelKey:"portfolio.system.class",valueKey:"portfolio.system.values.mainClass"},{labelKey:"portfolio.system.guild",valueKey:"portfolio.profile.brand"},{labelKey:"portfolio.system.location",valueKey:"portfolio.profile.location"},{labelKey:"portfolio.system.mission",valueKey:"portfolio.system.values.mainMission"}],ti=[{labelKey:"portfolio.system.xpItems.german",level:72},{labelKey:"portfolio.system.xpItems.reactTypeScript",level:84},{labelKey:"portfolio.system.xpItems.node",level:68},{labelKey:"portfolio.system.xpItems.firebaseSupabase",level:70},{labelKey:"portfolio.system.xpItems.aiAutomation",level:76},{labelKey:"portfolio.system.xpItems.localBusinessWebsites",level:88}],ri=[{id:"frontend",titleKey:"portfolio.skills.categories.frontend",descriptionKey:"portfolio.skills.descriptions.frontend",rank:"A-",icon:Y,skills:[{labelKey:"portfolio.skills.items.html",level:88},{labelKey:"portfolio.skills.items.css",level:86},{labelKey:"portfolio.skills.items.javascript",level:82},{labelKey:"portfolio.skills.items.typescript",level:78},{labelKey:"portfolio.skills.items.react",level:84},{labelKey:"portfolio.skills.items.vite",level:80},{labelKey:"portfolio.skills.items.styledComponents",level:82},{labelKey:"portfolio.skills.items.framerMotion",level:72},{labelKey:"portfolio.skills.items.i18next",level:70}]},{id:"backend",titleKey:"portfolio.skills.categories.backend",descriptionKey:"portfolio.skills.descriptions.backend",rank:"B+",icon:Z,skills:[{labelKey:"portfolio.skills.items.node",level:70},{labelKey:"portfolio.skills.items.firebase",level:74},{labelKey:"portfolio.skills.items.firebaseFunctions",level:64},{labelKey:"portfolio.skills.items.supabase",level:68},{labelKey:"portfolio.skills.items.mongodb",level:62},{labelKey:"portfolio.skills.items.netlifyFunctions",level:66}]},{id:"business",titleKey:"portfolio.skills.categories.business",descriptionKey:"portfolio.skills.descriptions.business",rank:"B+",icon:q,skills:[{labelKey:"portfolio.skills.items.landingPages",level:84},{labelKey:"portfolio.skills.items.localSeoBasics",level:70},{labelKey:"portfolio.skills.items.ga4Tracking",level:68},{labelKey:"portfolio.skills.items.googleAdsBasics",level:58},{labelKey:"portfolio.skills.items.metaAutomationBasics",level:60},{labelKey:"portfolio.skills.items.leadForms",level:80},{labelKey:"portfolio.skills.items.crmPosConcepts",level:66}]},{id:"automation",titleKey:"portfolio.skills.categories.automation",descriptionKey:"portfolio.skills.descriptions.automation",rank:"B",icon:N,skills:[{labelKey:"portfolio.skills.items.aiAssistantForWebsites",level:78},{labelKey:"portfolio.skills.items.leadQualification",level:74},{labelKey:"portfolio.skills.items.chatbotFlows",level:72},{labelKey:"portfolio.skills.items.googleCalendarIntegrationIdea",level:58},{labelKey:"portfolio.skills.items.socialMediaAutoRepliesConcept",level:62},{labelKey:"portfolio.skills.items.businessProcessAutomation",level:70}]}],ai=[{id:"vs-web-studio",titleKey:"portfolio.projects.items.vs.title",typeKey:"portfolio.projects.items.vs.type",descriptionKey:"portfolio.projects.items.vs.description",rewardKey:"portfolio.projects.items.vs.reward",difficulty:"A",link:"https://vs-web-studio.de/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.typescript","portfolio.projects.tags.styledComponents","portfolio.projects.tags.i18n","portfolio.projects.tags.leadGeneration","portfolio.projects.tags.aiAssistant"]},{id:"lumina-atelier",titleKey:"portfolio.projects.items.lumina.title",typeKey:"portfolio.projects.items.lumina.type",descriptionKey:"portfolio.projects.items.lumina.description",rewardKey:"portfolio.projects.items.lumina.reward",difficulty:"B+",link:"https://lumina-atelier-salon.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.landingPage","portfolio.projects.tags.beautyBusiness","portfolio.projects.tags.responsiveDesign"]},{id:"autowerk",titleKey:"portfolio.projects.items.autowerk.title",typeKey:"portfolio.projects.items.autowerk.type",descriptionKey:"portfolio.projects.items.autowerk.description",rewardKey:"portfolio.projects.items.autowerk.reward",difficulty:"B+",link:"https://auto-werkstatt.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.localBusiness","portfolio.projects.tags.workshop","portfolio.projects.tags.cta"]},{id:"handwerk-shk",titleKey:"portfolio.projects.items.handwerk.title",typeKey:"portfolio.projects.items.handwerk.type",descriptionKey:"portfolio.projects.items.handwerk.description",rewardKey:"portfolio.projects.items.handwerk.reward",difficulty:"B+",link:"https://handwerken.netlify.app/",tagKeys:["portfolio.projects.tags.react","portfolio.projects.tags.handwerk","portfolio.projects.tags.shk","portfolio.projects.tags.localSeo"]},{id:"ai-assistant",titleKey:"portfolio.projects.items.ai.title",typeKey:"portfolio.projects.items.ai.type",descriptionKey:"portfolio.projects.items.ai.description",rewardKey:"portfolio.projects.items.ai.reward",difficulty:"A-",tagKeys:["portfolio.projects.tags.ai","portfolio.projects.tags.automation","portfolio.projects.tags.leadCapture","portfolio.projects.tags.chatbot","portfolio.projects.tags.businessProcess"]},{id:"business-platform",titleKey:"portfolio.projects.items.research.title",typeKey:"portfolio.projects.items.research.type",descriptionKey:"portfolio.projects.items.research.description",rewardKey:"portfolio.projects.items.research.reward",difficulty:"B",tagKeys:["portfolio.projects.tags.crm","portfolio.projects.tags.pos","portfolio.projects.tags.orders","portfolio.projects.tags.inventory","portfolio.projects.tags.automation","portfolio.projects.tags.saasResearch"]}],ni=[{id:"course",titleKey:"portfolio.timeline.items.course.title",descriptionKey:"portfolio.timeline.items.course.description",statusKey:"portfolio.timeline.status.completed"},{id:"platforms",titleKey:"portfolio.timeline.items.platforms.title",descriptionKey:"portfolio.timeline.items.platforms.description",statusKey:"portfolio.timeline.status.active"},{id:"studio",titleKey:"portfolio.timeline.items.studio.title",descriptionKey:"portfolio.timeline.items.studio.description",statusKey:"portfolio.timeline.status.active"},{id:"demos",titleKey:"portfolio.timeline.items.demos.title",descriptionKey:"portfolio.timeline.items.demos.description",statusKey:"portfolio.timeline.status.active"},{id:"german",titleKey:"portfolio.timeline.items.german.title",descriptionKey:"portfolio.timeline.items.german.description",statusKey:"portfolio.timeline.status.training"},{id:"selfEmployment",titleKey:"portfolio.timeline.items.selfEmployment.title",descriptionKey:"portfolio.timeline.items.selfEmployment.description",statusKey:"portfolio.timeline.status.preparing"},{id:"scale",titleKey:"portfolio.timeline.items.scale.title",descriptionKey:"portfolio.timeline.items.scale.description",statusKey:"portfolio.timeline.status.next"}],si=[{id:"linkedin",titleKey:"portfolio.network.items.linkedin.title",descriptionKey:"portfolio.network.items.linkedin.description",icon:ee},{id:"localSmb",titleKey:"portfolio.network.items.localSmb.title",descriptionKey:"portfolio.network.items.localSmb.description",icon:ie},{id:"ecosystem",titleKey:"portfolio.network.items.ecosystem.title",descriptionKey:"portfolio.network.items.ecosystem.description",icon:Y},{id:"research",titleKey:"portfolio.network.items.research.title",descriptionKey:"portfolio.network.items.research.description",icon:N}],li=[{labelKey:"portfolio.hero.fragments.react",x:9,y:22},{labelKey:"portfolio.hero.fragments.typescript",x:66,y:16},{labelKey:"portfolio.hero.fragments.node",x:74,y:54},{labelKey:"portfolio.hero.fragments.firebase",x:18,y:68},{labelKey:"portfolio.hero.fragments.ai",x:52,y:76},{labelKey:"portfolio.hero.fragments.automation",x:4,y:44}],pi=p`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -16px, 0) scale(1.018); }
`,di=p`
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
`,ci=p`
  0%, 100% { opacity: 0.4; transform: scale(0.96); }
  50% { opacity: 0.74; transform: scale(1.05); }
`,gi=o.figure`
  position: relative;
  isolation: isolate;
  width: min(100%, var(--portfolio-image-width, 42vw));
  height: var(--portfolio-image-height, 86svh);
  margin: 0;
  pointer-events: none;
`,xi=o.span`
  position: absolute;
  inset: 10% 4%;
  z-index: -1;
  border-radius: 48% 52% 44% 56%;
  background:
    radial-gradient(circle at 50% 38%, rgba(34, 211, 238, 0.28), transparent 56%),
    radial-gradient(circle at 44% 68%, rgba(124, 58, 237, 0.26), transparent 58%),
    conic-gradient(from 140deg, rgba(246, 211, 101, 0.16), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.18), rgba(246, 211, 101, 0.16));
  filter: blur(18px);
  animation: ${ci} 6.4s ease-in-out infinite;
`,mi=o.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  animation: ${pi} 7.6s ease-in-out infinite, ${di} 5.8s ease-in-out infinite;
  user-select: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,W=({src:i,alt:r,className:a})=>e.jsxs(gi,{className:a,"aria-hidden":"true",children:[e.jsx(xi,{}),e.jsx(mi,{src:i,alt:r,loading:"lazy",decoding:"async",fetchPriority:"low"})]}),fi=p`
  0% { transform: translateY(-120%); opacity: 0; }
  12% { opacity: 0.8; }
  100% { transform: translateY(120%); opacity: 0; }
`,hi=o(n.section)`
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
`,bi=o.div`
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
`,ui=o.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.16) 48%, transparent 52%);
  animation: ${fi} 7s ease-in-out infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.12;
  }
`,wi=o(n.div)`
  position: relative;
  z-index: 2;
  max-width: 760px;
`,yi=o.span`
  display: inline-flex;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${t.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,vi=o.h2`
  margin: 16px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 5.2rem);
  line-height: 0.98;
  letter-spacing: 0;
`,ji=o.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.76);
  font-size: clamp(0.98rem, 1.6vw, 1.14rem);
  line-height: 1.75;
`,ki=o.div`
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
`,$i=o(n.article)`
  min-height: 104px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 8px;
  padding: 16px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background:
    linear-gradient(135deg, rgba(11, 11, 24, 0.92), rgba(8, 8, 18, 0.76)),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.2), transparent 50%);
  box-shadow: ${t.shadows.panel};

  span {
    display: block;
    color: ${t.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 10px;
    color: ${t.colors.white};
    line-height: 1.35;
  }
`,Ki=o.div`
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
`,Si=o(n.div)`
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
`,zi=o(n.article)`
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 8px;
  padding: 14px;
  background: rgba(5, 5, 16, 0.68);
  backdrop-filter: blur(10px);

  span,
  strong {
    color: ${t.colors.white};
  }

  strong {
    float: right;
    color: ${t.colors.goldSoft};
  }
`,Fi=o.div`
  clear: both;
  height: 8px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.08);
`,Ii=o.span`
  display: block;
  width: ${({$level:i})=>`${i}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${t.colors.purpleSoft}, ${t.colors.cyan}, ${t.colors.goldSoft});
  box-shadow: ${t.shadows.cyanGlow};
`,Pi=()=>{const{t:i}=u();return e.jsxs(hi,{id:"portfolio-profile","aria-labelledby":"portfolio-profile-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsx(ui,{"aria-hidden":"true"}),e.jsxs(bi,{children:[e.jsx(Si,{variants:c,"data-portfolio-media":"profile",children:e.jsx(W,{src:d.profile.src,alt:i(d.profile.altKey)})}),e.jsxs(wi,{variants:c,children:[e.jsx(yi,{children:i("portfolio.system.eyebrow")}),e.jsx(vi,{id:"portfolio-profile-title",children:i("portfolio.system.title")}),e.jsx(ji,{children:i("portfolio.positioning")})]}),e.jsx(ki,{children:oi.map(r=>e.jsxs($i,{variants:c,children:[e.jsx("span",{children:i(r.labelKey)}),e.jsx("strong",{children:i(r.valueKey)})]},r.labelKey))}),e.jsx(Ki,{"aria-label":i("portfolio.system.xpFocus"),children:ti.map(r=>e.jsxs(zi,{variants:c,children:[e.jsx("span",{children:i(r.labelKey)}),e.jsxs("strong",{children:[r.level,"%"]}),e.jsx(Fi,{children:e.jsx(Ii,{as:n.span,$level:r.level,variants:_,style:{transformOrigin:"left center"}})})]},r.labelKey))})]})]})},Ai=o(n.section)`
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
`,Ci=o(n.div)`
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
`,Li=o.span`
  display: inline-flex;
  border: 1px solid rgba(246, 211, 101, 0.3);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(246, 211, 101, 0.08);
  color: ${t.colors.goldSoft};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,Bi=o.h2`
  margin: 16px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,Mi=o.p`
  max-width: 780px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`,Hi=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: clamp(18px, 3vw, 28px);
  overflow-x: hidden;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,Gi=o(n.article)`
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
    color: ${t.colors.white};
    font-size: 1.05rem;
    letter-spacing: 0;
  }

  p {
    margin: 10px 0 0;
    color: rgba(248, 250, 252, 0.72);
    line-height: 1.45;
  }
`,Ti=o.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(168, 85, 247, 0.32);
  border-radius: 50%;
  color: ${t.colors.cyan};
  background: rgba(124, 58, 237, 0.1);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.14);
`,Ri=()=>{const{t:i}=u();return e.jsxs(Ai,{id:"portfolio-network","aria-labelledby":"portfolio-network-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsx(Ci,{variants:c,"data-portfolio-media":"network",children:e.jsx(S,{type:d.network.type,src:d.network.src,alt:i(d.network.altKey)})}),e.jsxs("div",{children:[e.jsx(Li,{children:i("portfolio.network.eyebrow")}),e.jsx(Bi,{id:"portfolio-network-title",children:i("portfolio.network.title")}),e.jsx(Mi,{children:i("portfolio.network.description")})]}),e.jsx(Hi,{children:si.map(r=>{const a=r.icon;return e.jsxs(Gi,{variants:c,children:[e.jsx(Ti,{children:e.jsx(a,{"aria-hidden":"true"})}),e.jsx("h3",{children:i(r.titleKey)}),e.jsx("p",{children:i(r.descriptionKey)})]},r.id)})})]})},Ei=p`
  0% { transform: translateX(-35%); }
  100% { transform: translateX(35%); }
`,Vi=o.footer`
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
    background: linear-gradient(90deg, transparent, ${t.colors.purpleSoft}, ${t.colors.cyan}, ${t.colors.goldSoft}, transparent);
    animation: ${Ei} 6s ease-in-out infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`,Di=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.7fr) minmax(220px, 0.9fr);
  gap: 16px;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,Oi=o.div`
  border: 1px solid rgba(246, 211, 101, 0.18);
  border-radius: 8px;
  padding: 18px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background: rgba(8, 8, 18, 0.7);

  strong {
    display: block;
    margin-top: 4px;
    color: ${t.colors.cyan};
  }

  p {
    max-width: 54ch;
    margin: 14px 0 0;
    color: rgba(248, 250, 252, 0.7);
    line-height: 1.65;
  }
`,Yi=o.h2`
  margin: 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  letter-spacing: 0;
`,H=o.div`
  border: 1px solid rgba(34, 211, 238, 0.16);
  border-radius: 8px;
  padding: 18px;
  background: rgba(8, 8, 18, 0.6);

  h2 {
    margin: 0 0 12px;
    color: ${t.colors.goldSoft};
    font-size: 0.9rem;
    letter-spacing: 0;
    text-transform: uppercase;
  }
`,G=o.div`
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
    color: ${t.colors.cyan};
    outline: none;
  }
`,Ni=o.div`
  width: min(1180px, calc(100% - 32px));
  margin: 18px auto 0;
`,Xi=o.p`
  margin: 0;
  color: ${t.colors.muted};
  font-size: 0.86rem;
`,_i={linkedin:D,facebook:V,instagram:E},Ui=()=>{const{t:i}=u();return e.jsxs(Vi,{children:[e.jsxs(Di,{children:[e.jsxs(Oi,{children:[e.jsx(Yi,{children:s.founderName}),e.jsx("strong",{children:s.brandName}),e.jsx("p",{children:i("portfolio.footer.description")})]}),e.jsxs(H,{children:[e.jsx("h2",{children:i("portfolio.footer.navigation")}),e.jsx(G,{children:I.map(r=>e.jsx("a",{href:r.href,children:i(r.labelKey)},r.id))})]}),e.jsxs(H,{children:[e.jsx("h2",{children:i("portfolio.footer.contact")}),e.jsxs(G,{children:[e.jsx("a",{href:s.emailHref,children:s.email}),e.jsx("a",{href:s.phoneHref,children:s.phone}),e.jsxs("a",{href:s.mapsUrl,target:"_blank",rel:"noopener noreferrer",children:[i("portfolio.profile.location")," ",e.jsx(k,{"aria-hidden":"true"})]}),e.jsxs("a",{href:s.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[s.websiteLabel," ",e.jsx(k,{"aria-hidden":"true"})]}),e.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(O,{"aria-hidden":"true"})," GitHub"]}),s.socialLinks.map(r=>{const a=_i[r.id];return e.jsxs("a",{href:r.url,target:"_blank",rel:"me noopener noreferrer",children:[e.jsx(a,{"aria-hidden":"true"})," ",r.label]},r.id)})]})]})]}),e.jsx(Ni,{children:e.jsx(Xi,{children:i("portfolio.footer.note")})})]})},Wi=o.header`
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 0 16px;
  pointer-events: none;
  --portfolio-header-bg: ${({$scrolled:i})=>i?"rgba(5, 5, 16, 0.9)":"rgba(5, 5, 16, 0.62)"};
`,Qi=o.div`
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
  border-radius: 8px;
  padding: 10px 12px;
  background: var(--portfolio-header-bg);
  box-shadow: 0 14px 60px rgba(0, 0, 0, 0.34), inset 0 -1px 0 rgba(246, 211, 101, 0.18);
  backdrop-filter: blur(18px);
  pointer-events: auto;

  @media (max-width: 1040px) {
    grid-template-columns: auto 1fr auto auto;
  }
`,Ji=o.a`
  display: grid;
  gap: 1px;
  min-width: max-content;

  strong {
    color: ${t.colors.white};
    font-family: ${t.fonts.heading};
    font-size: 1rem;
    letter-spacing: 0;
  }

  span {
    color: ${t.colors.cyan};
    font-size: 0.78rem;
    font-weight: 800;
  }
`,Zi=o.span`
  border: 1px solid rgba(246, 211, 101, 0.36);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${t.colors.goldSoft};
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 760px) {
    display: none;
  }
`,qi=o.nav`
  display: flex;
  justify-content: center;
  gap: 6px;

  a {
    border-radius: 999px;
    padding: 9px 10px;
    color: rgba(248, 250, 252, 0.78);
    font-size: 0.82rem;
    font-weight: 800;
  }

  a:hover,
  a:focus-visible,
  a[data-active='true'] {
    outline: none;
    color: ${t.colors.white};
    background: rgba(34, 211, 238, 0.12);
    box-shadow: 0 0 18px rgba(34, 211, 238, 0.18);
  }

  @media (max-width: 1040px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: ${({$open:i})=>i?"grid":"none"};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid rgba(34, 211, 238, 0.2);
    border-radius: 8px;
    padding: 10px;
    background: rgba(5, 5, 16, 0.96);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,eo=o.div`
  display: flex;
  gap: 4px;
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 999px;
  padding: 4px;
  background: rgba(8, 8, 18, 0.7);
`,io=o.button`
  min-width: 34px;
  min-height: 30px;
  border-radius: 999px;
  color: ${({$active:i})=>i?"#050510":t.colors.muted};
  background: ${({$active:i})=>i?`linear-gradient(135deg, ${t.colors.cyan}, ${t.colors.goldSoft})`:"transparent"};
  font-size: 0.72rem;
  font-weight: 900;

  &:focus-visible {
    outline: 2px solid ${t.colors.cyan};
    outline-offset: 2px;
  }
`,oo=o.a`
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
`,to=o.button`
  display: none;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  color: ${t.colors.white};

  @media (max-width: 1040px) {
    display: grid;
  }
`,ro=["de","en","uk"],ao=()=>{const{t:i,i18n:r}=u(),[a,h]=x.useState(!1),[m,y]=x.useState(!1),[v,j]=x.useState("hero");x.useEffect(()=>{const l=()=>h(window.scrollY>18);return l(),window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),x.useEffect(()=>{const l=new IntersectionObserver(b=>{const g=b.filter(f=>f.isIntersecting).sort((f,w)=>w.intersectionRatio-f.intersectionRatio)[0];if(g!=null&&g.target.id){const f=I.find(w=>w.href===`#${g.target.id}`);f&&j(f.id)}},{rootMargin:"-34% 0px -48% 0px",threshold:[.18,.34,.5]});return I.forEach(b=>{const g=document.querySelector(b.href);g&&l.observe(g)}),()=>l.disconnect()},[]);const P=l=>{r.changeLanguage(l),y(!1)},z=r.resolvedLanguage||r.language;return e.jsx(Wi,{$scrolled:a,children:e.jsxs(Qi,{children:[e.jsxs(Ji,{href:"#portfolio-top","aria-label":i("portfolio.header.brandAria"),children:[e.jsx("strong",{children:"Vladyslav"}),e.jsxs("span",{children:["/ ",s.brandName]})]}),e.jsx(Zi,{children:i("portfolio.header.rank")}),e.jsx(qi,{$open:m,"aria-label":i("portfolio.header.navigation"),children:I.map(l=>e.jsx("a",{href:l.href,"aria-current":v===l.id?"page":void 0,"data-active":v===l.id?"true":void 0,onClick:()=>y(!1),children:i(l.labelKey)},l.id))}),e.jsx(eo,{"aria-label":i("portfolio.header.language"),children:ro.map(l=>e.jsx(io,{type:"button",$active:z.startsWith(l),onClick:()=>P(l),children:l.toUpperCase()},l))}),e.jsx(oo,{href:s.emailHref,children:i("portfolio.header.cta")}),e.jsx(to,{type:"button","aria-label":i(m?"portfolio.header.closeMenu":"portfolio.header.openMenu"),"aria-expanded":m,onClick:()=>y(l=>!l),children:m?e.jsx(oe,{"aria-hidden":"true"}):e.jsx(te,{"aria-hidden":"true"})})]})})},no=p`
  0%, 100% { filter: drop-shadow(0 0 26px rgba(124, 58, 237, 0.42)); transform: scale(1); }
  50% { filter: drop-shadow(0 0 46px rgba(34, 211, 238, 0.46)); transform: scale(1.03); }
`,so=p`
  to { transform: rotate(360deg); }
`,lo=p`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -12px, 0); }
`,po=p`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg); }
  50% { transform: translate3d(10px, -18px, 0) rotate(8deg); }
`,co=o.section`
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
  padding:
    clamp(50px, 10vw, 50px)
    max(24px, calc((100% - 1440px) / 2))
    clamp(34px, 5vw, 64px);
  background:
    radial-gradient(circle at 70% 42%, rgba(34, 211, 238, 0.12), transparent 28%),
    radial-gradient(circle at 20% 72%, rgba(168, 85, 247, 0.14), transparent 34%);

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, auto) minmax(220px, 36svh);
    gap: 18px;
  }

  @media (max-width: 560px) {
    padding:
      clamp(86px, 16svh, 108px)
      16px
      24px;
  }

  @media (max-height: 760px) and (min-width: 941px) {
    gap: 32px;
    padding-top: 92px;
    padding-bottom: 28px;
  }
`,go=o(n.div)`
  position: relative;
  z-index: 2;
`,xo=o.span`
  display: inline-flex;
  width: fit-content;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 999px;
  padding: 9px 13px;
  background: rgba(34, 211, 238, 0.08);
  color: ${t.colors.cyan};
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.16);
`,mo=o.span`
  display: block;
  width: fit-content;
  margin-top: 14px;
  border: 1px solid rgba(246, 211, 101, 0.34);
  border-radius: 999px;
  padding: 9px 13px;
  color: ${t.colors.goldSoft};
  font-size: 0.82rem;
  font-weight: 900;
`,fo=o.h1`
  max-width: 900px;
  margin: 22px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(2.2rem, 6.4vw, 6.8rem);
  line-height: 0.92;
  letter-spacing: 0;
  text-shadow:
    0 0 24px rgba(168, 85, 247, 0.5),
    0 0 54px rgba(34, 211, 238, 0.2);

  @media (max-height: 760px) and (min-width: 941px) {
    font-size: clamp(2rem, 5.4vw, 5.4rem);
  }
`,ho=o.p`
  max-width: 760px;
  margin: 24px 0 0;
  color: rgba(248, 250, 252, 0.78);
  font-size: clamp(0.94rem, 1.7vw, 1.12rem);
  line-height: 1.62;
`,bo=o.div`
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
    color: ${t.colors.cyan};
  }
`,uo=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`,wo=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(246, 211, 101, 0.5);
  border-radius: 999px;
  padding: 0 19px;
  background: linear-gradient(135deg, ${t.colors.goldSoft}, ${t.colors.cyan});
  color: #050510;
  font-weight: 900;
  box-shadow: ${t.shadows.goldGlow};

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-2px);
    outline: none;
  }
`,T=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(56, 189, 248, 0.28);
  border-radius: 999px;
  padding: 0 18px;
  background: rgba(11, 11, 24, 0.72);
  color: ${t.colors.white};
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: ${t.colors.cyan};
    transform: translateY(-2px);
    outline: none;
  }
`,yo=o(n.aside)`
  position: relative;
  z-index: 1;
  height: clamp(430px, 72svh, 760px);
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.26);
  border-radius: 8px;
  clip-path: polygon(0 0, calc(100% - 42px) 0, 100% 42px, 100% 100%, 42px 100%, 0 calc(100% - 42px));
  background:
    radial-gradient(circle at 50% 42%, rgba(34, 211, 238, 0.16), transparent 28%),
    radial-gradient(circle at 66% 18%, rgba(168, 85, 247, 0.22), transparent 28%),
    rgba(5, 5, 16, 0.58);
  box-shadow: ${t.shadows.panel};

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
`,vo=o.div`
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
    animation: ${so} 18s linear infinite;
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
  animation: ${no} 4.8s ease-in-out infinite;

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
  background: linear-gradient(180deg, transparent, ${t.colors.cyan}, ${t.colors.goldSoft}, transparent);
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
  animation: ${po} 5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;const jo=o.span`
  position: absolute;
  left: ${({$x:i})=>`${i}%`};
  top: ${({$y:i})=>`${i}%`};
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 7px 10px;
  background: rgba(5, 5, 16, 0.74);
  color: ${t.colors.white};
  font-size: 0.78rem;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.14);
  animation: ${lo} 4.8s ease-in-out infinite;
  animation-delay: ${({$x:i})=>`${i*-.04}s`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ko=()=>{const{t:i}=u();return e.jsxs(co,{id:"portfolio-top","aria-labelledby":"portfolio-title",children:[e.jsxs(go,{variants:M,initial:"hidden",animate:"visible",children:[e.jsx(xo,{children:i("portfolio.hero.systemAwakened")}),e.jsx(mo,{children:i("portfolio.profile.role")}),e.jsx(fo,{id:"portfolio-title",children:i("portfolio.hero.title")}),e.jsx(ho,{children:i("portfolio.hero.subtitle")}),e.jsxs(bo,{children:[e.jsxs("span",{children:[e.jsx(X,{"aria-hidden":"true"})," ",i("portfolio.profile.location")]}),e.jsx("span",{children:i("portfolio.profile.languages")})]}),e.jsxs(uo,{children:[e.jsxs(wo,{href:"#portfolio-projects",children:[i("portfolio.hero.buttons.projects")," ",e.jsx(re,{"aria-hidden":"true"})]}),e.jsxs(T,{href:s.emailHref,children:[e.jsx(C,{"aria-hidden":"true"})," ",i("portfolio.hero.buttons.contact")]}),e.jsxs(T,{href:s.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:[i("portfolio.hero.buttons.studio")," ",e.jsx(k,{"aria-hidden":"true"})]})]})]}),e.jsx(yo,{variants:M,initial:"hidden",animate:"visible",children:e.jsxs(vo,{children:[e.jsx(S,{type:d.hero.type,src:d.hero.src,alt:i(d.hero.altKey),eager:!0}),li.map(r=>e.jsx(jo,{$x:r.x,$y:r.y,children:i(r.labelKey)},r.labelKey))]})})]})},$o=p`
  0% { transform: translateX(-140%) rotate(18deg); }
  100% { transform: translateX(260%) rotate(18deg); }
`,Ko=o(n.section)`
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
  padding:
    clamp(90px, 10vw, 124px)
    max(24px, calc((100% - 1440px) / 2))
    clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 78% 22%, rgba(251, 113, 133, 0.12), transparent 28%),
    radial-gradient(circle at 18% 78%, rgba(246, 211, 101, 0.08), transparent 34%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }
`,So=o(n.div)`
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
`,zo=o(n.div)`
  max-width: 820px;
`,Fo=o.span`
  display: inline-flex;
  border: 1px solid rgba(168, 85, 247, 0.32);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(124, 58, 237, 0.12);
  color: ${t.colors.purpleSoft};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`,Io=o.h2`
  margin: 16px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`,Po=o.p`
  max-width: 780px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`,Ao=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1030px;
  gap: 12px;
  margin-top: clamp(14px, 2vw, 20px);
  overflow-x: hidden;
  padding-right: min(0vw, 0px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,Co=o(n.article)`
  position: relative;
  display: flex;
  min-height: 218px;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 8px;
  padding: 13px;
  clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px));
  background:
    radial-gradient(circle at 78% 18%, rgba(124, 58, 237, 0.22), transparent 32%),
    linear-gradient(160deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    left: -70%;
    width: 40%;
    height: 190%;
    background: linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.16), transparent);
    animation: ${$o} 6s ease-in-out infinite;
    opacity: 0;
  }

  &:hover {
    border-color: rgba(34, 211, 238, 0.58);
    box-shadow: 0 0 46px rgba(34, 211, 238, 0.2), inset 0 0 36px rgba(124, 58, 237, 0.1);
    transform: translateY(-6px);
  }

  &:hover::after {
    opacity: 1;
  }

  h3 {
    margin: 12px 0 0;
    color: ${t.colors.white};
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
`,Lo=o.span`
  position: absolute;
  right: 14px;
  top: 14px;
  border: 1px solid rgba(251, 113, 133, 0.36);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${t.colors.danger};
  font-size: 0.74rem;
  font-weight: 900;
`,Bo=o.span`
  align-self: flex-start;
  max-width: calc(100% - 88px);
  border: 1px solid rgba(246, 211, 101, 0.28);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${t.colors.goldSoft};
  font-size: 0.78rem;
  font-weight: 900;
`,Mo=o.div`
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
    color: ${t.colors.goldSoft};
  }
`,Ho=o.div`
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
`,R=o.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-top: auto;
  color: ${t.colors.cyan};
  font-weight: 900;
`,Go=()=>{const{t:i}=u();return e.jsxs(Ko,{id:"portfolio-projects","aria-labelledby":"portfolio-projects-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsx(So,{variants:c,"data-portfolio-media":"projects",children:e.jsx(W,{src:d.projects.src,alt:i(d.projects.altKey)})}),e.jsxs(zo,{variants:c,children:[e.jsx(Fo,{children:i("portfolio.projects.eyebrow")}),e.jsx(Io,{id:"portfolio-projects-title",children:i("portfolio.projects.title")}),e.jsx(Po,{children:i("portfolio.projects.description")})]}),e.jsx(Ao,{children:ai.map(r=>e.jsxs(Co,{variants:c,children:[e.jsxs(Lo,{children:[i("portfolio.projects.difficulty")," ",r.difficulty]}),e.jsx(Bo,{children:i(r.typeKey)}),e.jsx("h3",{children:i(r.titleKey)}),e.jsx("p",{children:i(r.descriptionKey)}),e.jsxs(Mo,{children:[e.jsx(ae,{"aria-hidden":"true"}),e.jsx("span",{children:i(r.rewardKey)})]}),e.jsx(Ho,{children:r.tagKeys.map(a=>e.jsx("span",{children:i(a)},a))}),r.link?e.jsxs(R,{href:r.link,target:"_blank",rel:"noopener noreferrer","aria-label":`${i("portfolio.projects.open")} ${i(r.titleKey)}`,children:[i("portfolio.projects.open")," ",e.jsx(k,{"aria-hidden":"true"})]}):e.jsxs(R,{as:"span",children:[i("portfolio.projects.concept")," ",e.jsx(ne,{"aria-hidden":"true"})]})]},r.id))})]})},To=p`
  0%, 100% { filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.25)); }
  50% { filter: drop-shadow(0 0 18px rgba(246, 211, 101, 0.34)); }
`,Ro=o(n.section)`
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
`,Eo=o(n.div)`
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
`,Vo=o.span`
  display: inline-flex;
  max-width: 100%;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${t.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  overflow-wrap: anywhere;
`,Do=o.h2`
  margin: 16px 0 0;
  color: ${t.colors.white};
  font-family: ${t.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: clamp(1.8rem, 10vw, 2.55rem);
  }
`,Oo=o.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: 0.96rem;
  }
`,Yo=o.div`
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
`,No=o.div`
  /* position: absolute; */
  /* top: 18px;
  bottom: 18px;
  left: 15px; */
  width: 2px;
  background: linear-gradient(
    180deg,
    ${t.colors.cyan},
    ${t.colors.purpleSoft},
    ${t.colors.goldSoft}
  );
  animation: ${To} 3.8s ease-in-out infinite;

  @media (max-width: 700px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xo=o(n.article)`
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
    color: ${t.colors.goldSoft};
    font-weight: 900;
  }

  h3 {
    margin: 0;
    color: ${t.colors.white};
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
`,_o=o.div`
  position: absolute;
  left: -55px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(34, 211, 238, 0.44);
  border-radius: 50%;
  background: ${t.colors.backgroundPanel};
  color: ${t.colors.cyan};
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);

  @media (max-width: 700px) {
    position: static;
    grid-column: 1;
    grid-row: 1 / span 3;
    width: 30px;
    height: 30px;
    margin-top: -2px;
  }
`,Uo=o.strong`
  justify-self: end;
  border: 1px solid rgba(246, 211, 101, 0.24);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${t.colors.goldSoft};
  font-size: 0.76rem;
  text-transform: uppercase;

  @media (max-width: 700px) {
    grid-column: 2;
    justify-self: start;
    padding: 7px 9px;
    font-size: 0.7rem;
  }
`,Wo=()=>{const{t:i}=u();return e.jsxs(Ro,{id:"portfolio-timeline","aria-labelledby":"portfolio-timeline-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsx(Eo,{variants:c,"data-portfolio-media":"timeline",children:e.jsx(S,{type:d.timeline.type,src:d.timeline.src,alt:i(d.timeline.altKey)})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(Vo,{children:i("portfolio.timeline.eyebrow")}),e.jsx(Do,{id:"portfolio-timeline-title",children:i("portfolio.timeline.title")}),e.jsx(Oo,{children:i("portfolio.timeline.description")})]}),e.jsxs(Yo,{children:[e.jsx(No,{"aria-hidden":"true"}),ni.map((r,a)=>e.jsxs(Xo,{variants:c,children:[e.jsx(_o,{children:e.jsx(X,{"aria-hidden":"true"})}),e.jsx("span",{children:String(a+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:i(r.titleKey)}),e.jsx("p",{children:i(r.descriptionKey)})]}),e.jsx(Uo,{children:i(r.statusKey)})]},r.id))]})]})]})},Qo=o(n.section)`
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
`,Jo=o(n.div)`
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
`,Zo=o.span`
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
`,qo=o.h2`
  margin: 16px 0 0;
  color: #0f172a;
  font-family: ${t.fonts.heading};
  font-size: clamp(1.75rem, 3.2vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: clamp(1.75rem, 9vw, 2.4rem);
  }
`,et=o.p`
  max-width: 760px;
  margin: 12px 0 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.55;
  overflow-wrap: anywhere;

  @media (max-width: 560px) {
    font-size: 0.96rem;
  }
`,it=o.div`
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
`,ot=o(n.article)`
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
`,tt=o.span`
  position: absolute;
  left: 39px;
  top: 70px;
  bottom: 18px;
  width: 1px;
  background: linear-gradient(180deg, ${t.colors.cyan}, rgba(168, 85, 247, 0.18));
  opacity: 0.7;

  @media (max-width: 560px) {
    display: none;
  }
`,rt=o.div`
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
`,at=o.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(34, 211, 238, 0.32);
  border-radius: 50%;
  background: rgba(34, 211, 238, 0.12);
  color: ${t.colors.cyan};
  box-shadow: 0 10px 24px rgba(34, 211, 238, 0.12);

  @media (max-width: 560px) {
    width: 36px;
    height: 36px;
  }
`,nt=o.span`
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
`,st=o.div`
  display: grid;
  gap: 7px;
  margin-top: 12px;
  padding-left: 52px;

  @media (max-width: 560px) {
    padding-left: 0;
  }
`,lt=o.div`
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
`,pt=o.div`
  grid-column: 1 / -1;
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.1);
`,dt=o.span`
  display: block;
  width: ${({$level:i})=>`${i}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    ${t.colors.purpleSoft},
    ${t.colors.cyan},
    ${t.colors.goldSoft}
  );
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.25);
`,ct=()=>{const{t:i}=u();return e.jsxs(Qo,{id:"portfolio-skills","aria-labelledby":"portfolio-skills-title",variants:K,initial:"hidden",whileInView:"visible",viewport:$,children:[e.jsxs("div",{children:[e.jsxs(n.div,{variants:c,children:[e.jsx(Zo,{children:i("portfolio.skills.eyebrow")}),e.jsx(qo,{id:"portfolio-skills-title",children:i("portfolio.skills.title")}),e.jsx(et,{children:i("portfolio.skills.description")})]}),e.jsx(it,{children:ri.map(r=>{const a=r.icon;return e.jsxs(ot,{variants:c,children:[e.jsx(tt,{"aria-hidden":"true"}),e.jsxs(rt,{children:[e.jsx(at,{children:e.jsx(a,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("h3",{children:i(r.titleKey)}),e.jsx("p",{children:i(r.descriptionKey)})]}),e.jsx(nt,{children:r.rank})]}),e.jsx(st,{children:r.skills.slice(0,4).map(h=>e.jsxs(lt,{children:[e.jsx("span",{children:i(h.labelKey)}),e.jsxs("strong",{children:[h.level,"%"]}),e.jsx(pt,{children:e.jsx(dt,{as:n.span,$level:h.level,variants:_,style:{transformOrigin:"left center"}})})]},h.labelKey))})]},r.id)})})," "]}),e.jsx(Jo,{variants:c,"data-portfolio-media":"skills",children:e.jsx(S,{type:d.skills.type,src:d.skills.src,alt:i(d.skills.altKey)})})]})},gt=se`
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
  }
`,xt=o.main`
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.12), transparent 28%),
    linear-gradient(180deg, ${t.colors.background} 0%, ${t.colors.backgroundSoft} 48%, ${t.colors.backgroundPanel} 100%);
  color: ${t.colors.white};
  font-family: ${t.fonts.body};

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
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${t.colors.cyan};
    outline-offset: 3px;
  }
`,mt=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
`,ft=o.a`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 5;
  transform: translateY(-140%);
  border-radius: ${t.radii.pill};
  padding: 10px 14px;
  background: ${t.colors.white};
  color: ${t.colors.background};
  font-weight: 900;

  &:focus {
    transform: translateY(0);
  }
`,bt=()=>{const{t:i}=u();return x.useEffect(()=>(document.title=i("portfolio.meta.title"),document.documentElement.classList.add("portfolio-page-active"),document.body.classList.add("portfolio-page-active"),window.scrollTo({top:0,behavior:"auto"}),()=>{document.documentElement.classList.remove("portfolio-page-active"),document.body.classList.remove("portfolio-page-active")}),[i]),e.jsxs(xt,{children:[e.jsx(gt,{}),e.jsx(ft,{href:"#portfolio-top",children:i("portfolio.skipLink")}),e.jsx($e,{}),e.jsx(ao,{}),e.jsxs(mt,{children:[e.jsx(ko,{}),e.jsx(Pi,{}),e.jsx(ct,{}),e.jsx(Go,{}),e.jsx(Wo,{}),e.jsx(Ri,{}),e.jsx(ii,{})]}),e.jsx(Ui,{})]})};export{bt as PortfolioPage,bt as default};
