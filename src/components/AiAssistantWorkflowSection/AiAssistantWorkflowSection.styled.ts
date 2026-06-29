import styled from 'styled-components';

// Тип WorkflowStepState потрібен styled-components, щоб типізувати стани вузлів і конекторів.
type WorkflowStepState = 'inactive' | 'active' | 'completed';

// Функція getNodeGridArea повертає позицію вузла у змієподібній карті процесу.
const getNodeGridArea = (index: number, stepCount: number) => {
  // Змінна eightStepAreas зберігає позиції для workflow з вісьмома кроками.
  const eightStepAreas = ['1 / 1', '1 / 2', '2 / 2', '2 / 1', '3 / 1', '3 / 2', '4 / 2', '4 / 1'];
  // Змінна sevenStepAreas зберігає позиції для workflow із сімома кроками та широким фінальним вузлом.
  const sevenStepAreas = ['1 / 1', '1 / 2', '2 / 2', '2 / 1', '3 / 1', '3 / 2', '4 / 1 / 5 / 3'];

  return stepCount === 7 ? sevenStepAreas[index] : eightStepAreas[index];
};

// Функція getConnectorDotPosition повертає координати світлового імпульсу на активному SVG-сегменті.
const getConnectorDotPosition = (activeStep: number, stepCount: number) => {
  // Масив sevenStepDots зберігає позиції імпульсу для карти Website-Anfrage.
  const sevenStepDots = [
    { cx: 34, cy: 18 },
    { cx: 50, cy: 30 },
    { cx: 34, cy: 42 },
    { cx: 18, cy: 54 },
    { cx: 34, cy: 66 },
    { cx: 50, cy: 78 },
    { cx: 50, cy: 92 },
  ];
  // Масив eightStepDots зберігає позиції імпульсу для карти Verpasster Anruf.
  const eightStepDots = [
    { cx: 34, cy: 18 },
    { cx: 50, cy: 30 },
    { cx: 34, cy: 42 },
    { cx: 18, cy: 54 },
    { cx: 34, cy: 66 },
    { cx: 50, cy: 78 },
    { cx: 34, cy: 88 },
    { cx: 18, cy: 92 },
  ];
  // Змінна dotPositions вибирає правильну траєкторію для кількості кроків.
  const dotPositions = stepCount === 7 ? sevenStepDots : eightStepDots;

  return dotPositions[Math.min(activeStep, dotPositions.length - 1)];
};

// Компонент AiAssistantSection задає повноширинну світлу футуристичну сцену для AI-workflow.
export const AiAssistantSection = styled.section`
  position: relative;
  left: 50%;
  right: 50%;
  isolation: isolate;
  width: 100vw;
  max-width: none;
  min-height: 100vh;
  height: 100vh;
  margin: 0 -50vw;
  overflow: hidden;
  border-block: 1px solid rgba(148, 163, 184, 0.16);
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 215, 120, 0.36), transparent 29%),
    radial-gradient(circle at 82% 22%, rgba(80, 170, 255, 0.25), transparent 32%),
    radial-gradient(circle at 48% 95%, rgba(72, 210, 205, 0.18), transparent 30%),
    linear-gradient(135deg, #fbfdff 0%, #eef6ff 48%, #fff8ea 100%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -24%;
    z-index: 0;
    pointer-events: none;
  }

  &::before {
    background:
      radial-gradient(circle at 20% 42%, rgba(255, 198, 82, 0.24), transparent 28%),
      radial-gradient(circle at 72% 34%, rgba(41, 151, 255, 0.2), transparent 30%),
      radial-gradient(circle at 54% 62%, rgba(68, 216, 198, 0.16), transparent 34%),
      conic-gradient(from 118deg at 52% 52%, transparent, rgba(255, 255, 255, 0.62), transparent 36%);
    filter: blur(34px);
    opacity: 0.9;
    animation: auroraDrift 42s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
  }

  &::after {
    background-image:
      linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
      radial-gradient(circle, rgba(15, 23, 42, 0.12) 0 1px, transparent 1.4px);
    background-size:
      56px 56px,
      56px 56px,
      34px 34px;
    opacity: 0.34;
    mask-image: radial-gradient(circle at center, #000 0%, transparent 78%);
    animation: gridFloat 60s linear infinite;
  }

  @media (max-width: 1023px) {
    height: auto;
    min-height: 100vh;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }

  @keyframes auroraDrift {
    0% {
      transform: translate3d(-2%, 1%, 0) rotate(0deg) scale(1);
    }
    50% {
      transform: translate3d(2%, -2%, 0) rotate(6deg) scale(1.04);
    }
    100% {
      transform: translate3d(4%, 2%, 0) rotate(-4deg) scale(1.08);
    }
  }

  @keyframes gridFloat {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(26px, -22px, 0) rotate(2deg);
    }
  }
`;

// Компонент SectionInner центрує контент поверх повноширинного фону.
export const SectionInner = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, 1500px);
  height: 100%;
  margin: 0 auto;
  padding: clamp(18px, 2.2vh, 28px) clamp(18px, 4vw, 56px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  gap: clamp(12px, 1.8vh, 20px);

  @media (max-width: 1023px) {
    height: auto;
    min-height: 100vh;
    padding: 46px clamp(16px, 5vw, 34px);
    grid-template-rows: auto;
    gap: 22px;
  }
`;

// Компонент HeaderBlock показує преміальний заголовок у світлому SaaS-стилі.
export const HeaderBlock = styled.header`
  width: min(860px, 100%);
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 9px;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0 13px;
    border-radius: 999px;
    border: 1px solid rgba(226, 166, 44, 0.34);
    background: rgba(255, 255, 255, 0.68);
    box-shadow:
      0 10px 28px rgba(59, 130, 246, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    color: #9c6b11;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    backdrop-filter: blur(18px);
  }

  h2 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(34px, 5vw, 62px);
    line-height: 0.96;
    letter-spacing: 0;
    text-wrap: balance;
  }

  h2::first-letter {
    color: #0f172a;
  }

  strong {
    width: fit-content;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid rgba(59, 130, 246, 0.14);
    background: rgba(255, 255, 255, 0.58);
    color: #1f3b66;
    font-size: clamp(14px, 1.25vw, 17px);
    line-height: 1.2;
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.08);
    backdrop-filter: blur(18px);
  }

  p {
    width: min(760px, 100%);
    margin: 0 auto;
    color: #52657f;
    font-size: clamp(14px, 1.18vw, 16px);
    line-height: 1.44;
  }

  @media (max-width: 767px) {
    justify-items: start;
    text-align: left;

    h2 {
      font-size: clamp(32px, 10vw, 44px);
    }
  }

  @media (max-height: 780px) and (min-width: 1024px) {
    gap: 6px;

    h2 {
      font-size: clamp(31px, 4vw, 50px);
    }

    p {
      font-size: 13px;
      line-height: 1.3;
    }
  }
`;

// Компонент FlowGrid розміщує дві workflow-карти поруч на десктопі.
export const FlowGrid = styled.div`
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(18px, 2.2vw, 30px);

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

// Компонент WorkflowCardShell створює світлу скляну карту з м'якою глибиною.
export const WorkflowCardShell = styled.article<{ $flowId: string }>`
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.76);
  background:
    radial-gradient(
      circle at ${({ $flowId }) => ($flowId === 'website' ? '18% 10%' : '82% 10%')},
      rgba(255, 214, 122, 0.2),
      transparent 34%
    ),
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(246, 251, 255, 0.52));
  box-shadow:
    0 28px 90px rgba(48, 73, 120, 0.16),
    0 10px 30px rgba(15, 23, 42, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  padding: clamp(15px, 1.7vw, 22px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: clamp(12px, 1.5vh, 18px);

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      118deg,
      rgba(255, 255, 255, 0.2),
      rgba(236, 180, 58, 0.6),
      rgba(72, 170, 255, 0.36),
      rgba(255, 255, 255, 0.2)
    );
    background-size: 280% 280%;
    opacity: 0.55;
    animation: cardAuroraBorder 18s cubic-bezier(0.22, 1, 0.36, 1) infinite;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: min(430px, 58%);
    aspect-ratio: 1;
    border-radius: 50%;
    right: ${({ $flowId }) => ($flowId === 'website' ? 'auto' : '-20%')};
    left: ${({ $flowId }) => ($flowId === 'website' ? '-20%' : 'auto')};
    bottom: -26%;
    border: 1px solid rgba(59, 130, 246, 0.12);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.28), transparent 58%);
    box-shadow:
      inset 0 0 48px rgba(255, 209, 102, 0.12),
      0 0 70px rgba(59, 130, 246, 0.12);
    animation: workflowOrbit 36s linear infinite;
    pointer-events: none;
  }

  @media (max-width: 1023px) {
    min-height: 560px;
  }

  @media (max-width: 767px) {
    min-height: 740px;
  }

  @media (max-height: 760px) and (min-width: 1024px) {
    padding: 12px;
    gap: 10px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }

  @keyframes cardAuroraBorder {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes workflowOrbit {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(1.02);
    }
  }
`;

// Компонент CardHeader показує короткий контекст workflow у читабельному світлому стилі.
export const CardHeader = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 5px;

  span {
    width: fit-content;
    color: #2563a9;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(22px, 2vw, 30px);
    letter-spacing: 0;
  }

  p {
    margin: 0;
    max-width: 48ch;
    color: #64748b;
    font-size: clamp(12px, 1vw, 14px);
    line-height: 1.36;
  }

  @media (max-height: 760px) and (min-width: 1024px) {
    gap: 3px;

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 12px;
      line-height: 1.24;
    }
  }
`;

// Компонент FlowMapCanvas створює площину карти, де конектори лежать під вузлами.
export const FlowMapCanvas = styled.div`
  position: relative;
  z-index: 1;
  min-height: 0;
  overflow: visible;
`;

// Компонент ConnectorLayer малює елегантні SVG-лінії між вузлами.
export const ConnectorLayer = styled.svg`
  position: absolute;
  inset: 2% 4%;
  width: 92%;
  height: 96%;
  overflow: visible;
  pointer-events: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

// Компонент ConnectorSegment стилізує один світлий градієнтний сегмент між кроками.
export const ConnectorSegment = styled.polyline<{ $state: WorkflowStepState }>`
  fill: none;
  stroke: ${({ $state }) =>
    $state === 'active'
      ? 'rgba(218, 151, 32, 0.92)'
      : $state === 'completed'
        ? 'rgba(61, 145, 120, 0.36)'
        : 'rgba(88, 115, 150, 0.18)'};
  stroke-width: ${({ $state }) => ($state === 'active' ? 1.45 : 1)};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: ${({ $state }) => ($state === 'active' ? '6 8' : '0')};
  filter: ${({ $state }) => ($state === 'active' ? 'drop-shadow(0 0 6px rgba(236, 180, 58, 0.48))' : 'none')};
  animation: ${({ $state }) =>
    $state === 'active' ? 'connectorPulse 1.65s cubic-bezier(0.22, 1, 0.36, 1) infinite' : 'none'};
  transition:
    stroke 650ms cubic-bezier(0.22, 1, 0.36, 1),
    stroke-width 650ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 750ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes connectorPulse {
    0% {
      stroke-dashoffset: 18;
      opacity: 0.64;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0.82;
    }
  }
`;

// Компонент ConnectorDot показує м'який рухомий data-пульс на активному переході.
export const ConnectorDot = styled.circle.attrs<{ $activeStep: number; $stepCount: number }>(props => ({
  cx: getConnectorDotPosition(props.$activeStep, props.$stepCount).cx,
  cy: getConnectorDotPosition(props.$activeStep, props.$stepCount).cy,
  r: props.$activeStep >= props.$stepCount - 1 ? 0 : 1.45,
}))<{ $activeStep: number; $stepCount: number }>`
  fill: rgba(255, 255, 255, 0.98);
  filter: drop-shadow(0 0 7px rgba(236, 180, 58, 0.72)) drop-shadow(0 0 12px rgba(59, 130, 246, 0.3));
  animation: connectorDotBeat 1.65s cubic-bezier(0.22, 1, 0.36, 1) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes connectorDotBeat {
    0%,
    100% {
      opacity: 0.45;
      transform: scale(0.9);
      transform-origin: center;
    }
    50% {
      opacity: 1;
      transform: scale(1.45);
      transform-origin: center;
    }
  }
`;

// Компонент StepGrid розміщує вузли у двоколонковій карті без повернення до списку.
export const StepGrid = styled.div<{ $stepCount: number }>`
  position: relative;
  z-index: 2;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 2.2vh, 22px) clamp(18px, 2vw, 28px);
  align-items: center;

  &::before {
    content: '';
    display: none;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(${({ $stepCount }) => $stepCount}, auto);
    gap: 14px;

    &::before {
      position: absolute;
      display: block;
      top: 38px;
      bottom: 38px;
      left: 32px;
      width: 2px;
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(218, 151, 32, 0.42), rgba(59, 130, 246, 0.16));
      pointer-events: none;
    }
  }
`;

// Компонент FlowNode показує окремий крок як світлу скляну node-картку.
export const FlowNode = styled.div<{ $state: WorkflowStepState; $index: number; $stepCount: number }>`
  position: relative;
  grid-area: ${({ $index, $stepCount }) => getNodeGridArea($index, $stepCount)};
  min-width: 0;
  min-height: clamp(78px, 11vh, 116px);
  padding: clamp(10px, 1.3vh, 14px);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto auto;
  align-items: center;
  gap: 8px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ $state }) =>
      $state === 'active'
        ? 'rgba(218, 151, 32, 0.74)'
        : $state === 'completed'
          ? 'rgba(82, 160, 128, 0.38)'
          : 'rgba(255, 255, 255, 0.74)'};
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, ${({ $state }) => ($state === 'inactive' ? '0.56' : '0.82')}),
      rgba(244, 250, 255, ${({ $state }) => ($state === 'active' ? '0.72' : '0.5')})
    ),
    radial-gradient(
      circle at 15% 12%,
      ${({ $state }) => ($state === 'active' ? 'rgba(255, 216, 126, 0.28)' : 'transparent')},
      transparent 54%
    );
  box-shadow: ${({ $state }) =>
      $state === 'active' ? '0 18px 46px rgba(218, 151, 32, 0.18), 0 0 36px rgba(59, 130, 246, 0.12),' : ''}
    ${({ $state }) => ($state === 'completed' ? '0 12px 28px rgba(82, 160, 128, 0.08),' : '')} inset 0 1px 0
    rgba(255, 255, 255, 0.9);
  opacity: ${({ $state }) => ($state === 'inactive' ? 0.72 : 1)};
  transform: ${({ $state }) => ($state === 'active' ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)')};
  backdrop-filter: blur(18px);
  transition:
    opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 750ms ease,
    border-color 750ms ease,
    background 750ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(112deg, transparent 12%, rgba(255, 255, 255, 0.72) 50%, transparent 86%);
    transform: translateX(-120%) skewX(-12deg);
    opacity: ${({ $state }) => ($state === 'active' ? 0.68 : 0)};
    animation: ${({ $state }) =>
      $state === 'active' ? 'nodeShine 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite' : 'none'};
    pointer-events: none;
  }

  @media (max-height: 760px) and (min-width: 1024px) {
    min-height: 70px;
    padding: 9px;
  }

  @media (max-width: 767px) {
    grid-area: auto;
    min-height: 96px;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;

    &::before {
      animation: none;
    }
  }

  @keyframes nodeShine {
    0% {
      transform: translateX(-120%) skewX(-12deg);
    }
    100% {
      transform: translateX(120%) skewX(-12deg);
    }
  }
`;

// Компонент FlowNodeStatus показує номер або галочку для доступного розуміння стану.
export const FlowNodeStatus = styled.span<{ $state: WorkflowStepState }>`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 24px;
  height: 24px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  color: ${({ $state }) => ($state === 'completed' ? '#2d664e' : '#122033')};
  background: ${({ $state }) =>
    $state === 'completed'
      ? 'rgba(203, 244, 216, 0.92)'
      : $state === 'active'
        ? 'linear-gradient(135deg, #f4b84a, #fff1bd)'
        : 'rgba(226, 236, 248, 0.88)'};
  font-size: 11px;
  font-weight: 900;
  box-shadow: ${({ $state }) =>
    $state === 'active' ? '0 0 18px rgba(236, 180, 58, 0.42)' : '0 5px 14px rgba(15, 23, 42, 0.08)'};
  transition:
    background 650ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1),
    color 650ms cubic-bezier(0.22, 1, 0.36, 1);

  svg {
    width: 11px;
    height: 11px;
  }
`;

// Компонент FlowNodeIcon створює велику округлу зону іконки для швидкого зчитування кроку.
export const FlowNodeIcon = styled.span<{ $state: WorkflowStepState }>`
  position: relative;
  width: clamp(48px, 4.8vw, 64px);
  aspect-ratio: 1;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  color: ${({ $state }) => ($state === 'active' ? '#101827' : $state === 'completed' ? '#24624b' : '#2f5f91')};
  background: ${({ $state }) =>
    $state === 'active'
      ? 'linear-gradient(135deg, #e8a63b, #fff0bc)'
      : $state === 'completed'
        ? 'linear-gradient(135deg, rgba(210, 246, 222, 0.98), rgba(255, 236, 178, 0.72))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(232, 243, 255, 0.82))'};
  box-shadow: ${({ $state }) =>
    $state === 'active'
      ? '0 14px 34px rgba(236, 180, 58, 0.28), 0 0 26px rgba(59, 130, 246, 0.14)'
      : '0 10px 24px rgba(48, 73, 120, 0.1)'};
  transition:
    color 650ms cubic-bezier(0.22, 1, 0.36, 1),
    background 750ms ease,
    box-shadow 750ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 999px;
    border: 1px solid rgba(236, 180, 58, 0.44);
    opacity: ${({ $state }) => ($state === 'active' ? 1 : 0)};
    animation: iconPulseRing 1.9s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  }

  svg {
    width: clamp(21px, 2vw, 28px);
    height: clamp(21px, 2vw, 28px);
  }

  @media (max-height: 760px) and (min-width: 1024px) {
    width: 43px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }

  @keyframes iconPulseRing {
    0%,
    100% {
      transform: scale(0.94);
      opacity: 0.26;
    }
    50% {
      transform: scale(1.13);
      opacity: 0.76;
    }
  }
`;

// Компонент FlowNodeText зберігає короткий заголовок і одну зрозумілу лінію опису.
export const FlowNodeText = styled.div`
  min-width: 0;
  padding-right: 20px;
  display: grid;
  gap: 4px;

  strong {
    color: #122033;
    font-size: clamp(14px, 1.14vw, 17px);
    line-height: 1.08;
  }

  span {
    color: #64748b;
    font-size: clamp(11px, 0.9vw, 13px);
    line-height: 1.2;
  }

  @media (max-height: 760px) and (min-width: 1024px) {
    gap: 2px;

    strong {
      font-size: 13px;
    }

    span {
      font-size: 11px;
    }
  }
`;

// Компонент CtaRow тримає benefits і CTA компактно в нижній частині секції.
export const CtaRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

// Компонент BenefitsRow групує короткі переваги у світлий компактний ряд.
export const BenefitsRow = styled.div`
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Компонент BenefitChipWrapper стилізує одну перевагу як скляний чип із золотим номером.
export const BenefitChipWrapper = styled.div`
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.62);
  box-shadow:
    0 10px 24px rgba(48, 73, 120, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  transition:
    border-color 420ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);

  span {
    color: #b77912;
    font-size: 11px;
    font-weight: 900;
    font-variant-numeric: tabular-nums;
  }

  strong {
    color: #24344d;
    font-size: clamp(12px, 0.9vw, 13px);
    line-height: 1.12;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(218, 151, 32, 0.36);
    box-shadow:
      0 14px 30px rgba(218, 151, 32, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

// Компонент CtaButton створює м'яку золоту кнопку для переходу на контактну сторінку.
export const CtaButton = styled.a`
  position: relative;
  overflow: hidden;
  min-height: 44px;
  width: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  border-radius: 8px;
  color: #101827;
  background: linear-gradient(120deg, #d99a2b, #fff0bd, #f2b24a);
  background-size: 220% 220%;
  font-weight: 900;
  box-shadow:
    0 16px 38px rgba(218, 151, 32, 0.22),
    0 6px 16px rgba(48, 73, 120, 0.08);
  transition:
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 520ms cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 -40%;
    width: 38%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.82), transparent);
    transform: skewX(-18deg);
    animation: ctaShine 3.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    color: #101827;
    filter: none;
    transform: translateY(-1px) scale(1.02);
    box-shadow:
      0 20px 44px rgba(218, 151, 32, 0.3),
      0 10px 22px rgba(48, 73, 120, 0.1);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(37, 99, 235, 0.64);
    outline-offset: 3px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }

  @keyframes ctaShine {
    0% {
      transform: translateX(0) skewX(-18deg);
      opacity: 0;
    }
    20% {
      opacity: 0.78;
    }
    100% {
      transform: translateX(380%) skewX(-18deg);
      opacity: 0;
    }
  }
`;

// Компонент LegalNote показує довірче уточнення тихо на світлому фоні.
export const LegalNote = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(71, 85, 105, 0.76);
  font-size: clamp(11px, 0.9vw, 12px);
  line-height: 1.3;
  text-align: center;

  svg {
    flex: 0 0 auto;
    color: #b77912;
  }

  span {
    color: inherit;
  }

  @media (max-width: 767px) {
    align-items: flex-start;
    text-align: left;
  }
`;

// Компонент GlowParticle додає повільні світлі орбіти та градієнтні плями позаду карт.
export const GlowParticle = styled.span<{ $variant: 'gold' | 'blue' | 'cyan' }>`
  position: absolute;
  z-index: 1;
  width: ${({ $variant }) => ($variant === 'gold' ? '36vw' : $variant === 'blue' ? '30vw' : '22vw')};
  max-width: ${({ $variant }) => ($variant === 'gold' ? '560px' : '460px')};
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(30px);
  opacity: ${({ $variant }) => ($variant === 'gold' ? 0.28 : 0.2)};
  background: ${({ $variant }) =>
    $variant === 'gold'
      ? 'radial-gradient(circle, rgba(255, 205, 86, 0.62), transparent 62%)'
      : $variant === 'blue'
        ? 'radial-gradient(circle, rgba(80, 170, 255, 0.48), transparent 64%)'
        : 'radial-gradient(circle, rgba(68, 216, 198, 0.42), transparent 64%)'};
  left: ${({ $variant }) => ($variant === 'gold' ? '-8%' : $variant === 'blue' ? '75%' : '44%')};
  top: ${({ $variant }) => ($variant === 'gold' ? '10%' : $variant === 'blue' ? '8%' : '72%')};
  animation: ${({ $variant }) =>
      $variant === 'gold' ? 'particleFloatGold' : $variant === 'blue' ? 'particleFloatBlue' : 'particleFloatCyan'}
    ${({ $variant }) => ($variant === 'gold' ? '28s' : $variant === 'blue' ? '42s' : '34s')}
    cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;

  &::after {
    content: '';
    position: absolute;
    inset: 22%;
    border-radius: 50%;
    border: 1px solid rgba(15, 23, 42, 0.1);
    opacity: 0.46;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes particleFloatGold {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    }
    100% {
      transform: translate3d(13vw, 8vh, 0) rotate(8deg) scale(1.1);
    }
  }

  @keyframes particleFloatBlue {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    }
    100% {
      transform: translate3d(-12vw, 15vh, 0) rotate(-10deg) scale(1.08);
    }
  }

  @keyframes particleFloatCyan {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.96);
    }
    100% {
      transform: translate3d(9vw, -10vh, 0) rotate(12deg) scale(1.08);
    }
  }
`;
