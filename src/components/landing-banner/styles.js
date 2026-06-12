import styled from "styled-components";

const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background:
    radial-gradient(ellipse 90% 60% at 70% 10%, rgba(124, 92, 255, 0.12), transparent 60%),
    var(--ink);

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 880px;
  }

  .kicker { margin-bottom: 1.4rem; }

  .banner-title {
    margin-bottom: 0.4rem;
  }

  .hero-lede {
    max-width: 30em;
    margin: 1.6rem 0 2.4rem;
    font-size: clamp(1rem, 1.4vw, 1.2rem);
    line-height: 1.65;
    color: var(--paper-muted);
  }

  .hero-actions .btn-solid {
    @media (max-width: 575px) {
      width: 100%;
      &:not(:last-child) { margin-bottom: 0.9rem; }
    }
    @media (min-width: 576px) {
      &:not(:last-child) { margin-right: 0.9rem; }
    }
  }

  .social-container {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    bottom: 24px;
    right: 6px;
    a {
      font-size: 21px;
      margin: 9px;
      &:hover { transform: translateY(-2px); }
      transition: transform 0.2s ease, color 0.2s ease;
    }
    @media (min-width: 768px) { right: calc((100vw - 720px) / 2); }
    @media (min-width: 992px) { right: calc((100vw - 960px) / 2); }
    @media (min-width: 1200px) { right: calc((100vw - 1140px) / 2); }
  }

  // Animated scroll cue — a drifting dot inside a capsule.
  .hero-scroll-cue {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 26px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    font-family: 'Space Grotesk', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--paper-muted);
    &::after {
      content: "";
      width: 1px;
      height: 38px;
      background: linear-gradient(var(--accent), transparent);
      animation: cue-pulse 1.8s ease-in-out infinite;
      transform-origin: top;
    }
    @media (max-width: 575px) { display: none; }
  }

  @keyframes cue-pulse {
    0%, 100% { transform: scaleY(0.4); opacity: 0.4; }
    50% { transform: scaleY(1); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-scroll-cue::after { animation: none; }
  }
`;

export {BannerWrapper};
