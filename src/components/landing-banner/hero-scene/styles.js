import styled from "styled-components";

// The scene mount. Underneath sits a static "gradient orb" — the reduced-motion
// / no-WebGL fallback — which the live canvas covers once it mounts (`is-live`).
const SceneWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 62%;
    width: min(70vw, 620px);
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background:
      radial-gradient(circle at 38% 38%, rgba(255, 106, 61, 0.55), transparent 55%),
      radial-gradient(circle at 65% 70%, rgba(124, 92, 255, 0.5), transparent 58%);
    filter: blur(28px);
    opacity: 0.9;
    transition: opacity 0.6s ease;
    animation: hero-orb-float 9s ease-in-out infinite;
  }

  // Once the WebGL canvas is live, soften the static orb so it reads as depth.
  &.is-live::before {
    opacity: 0.35;
    animation: none;
  }

  canvas {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
  }

  @keyframes hero-orb-float {
    0%, 100% { transform: translate(-50%, -52%) scale(1); }
    50% { transform: translate(-50%, -48%) scale(1.05); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`;

export {SceneWrapper};
