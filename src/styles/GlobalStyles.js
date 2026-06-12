import {createGlobalStyle} from "styled-components";
import vars from "./variables.module.scss";

// Design system for the brand overhaul. Defines the ink/paper palette, the
// coral↔violet signature gradient, the type scale (Space Grotesk display +
// Inter body), buttons, the scroll-reveal utility, and the micro-interaction
// layer. Everything motion-related collapses to a static state under
// prefers-reduced-motion (WCAG 2.3.3 / 2.2.2).
export const GlobalStyles = createGlobalStyle`
  :root {
    --ink: ${vars.inkBase};
    --surface: ${vars.inkSurface};
    --surface-2: ${vars.inkSurface2};
    --paper: ${vars.paper};
    --paper-muted: ${vars.paperMuted};
    --line: ${vars.line};
    --accent: ${vars.accent};
    --accent-alt: ${vars.accentAlt};
    --brand-gradient: linear-gradient(120deg, ${vars.accent} 0%, ${vars.accentAlt} 100%);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: var(--ink);
    color: var(--paper);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  // Subtle engineered grid texture behind the whole page.
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(124, 92, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124, 92, 255, 0.04) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%);
  }

  ::selection {
    background: var(--accent);
    color: var(--ink);
  }

  h1, h2, h3, .display {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    letter-spacing: -0.02em;
    line-height: 1.05;
  }

  // Section rhythm.
  .section-t-space { padding-top: 120px; }
  .section-b-space { padding-bottom: 96px; }
  .section-b-md-space { @media (min-width: 768px) { padding-bottom: 96px; } }
  .section-b-sm-space { @media (min-width: 576px) { padding-bottom: 96px; } }
  .vh-75 { height: 75vh !important; }
  .vh-50 { height: 50vh !important; }

  // Mono-cased eyebrow/kicker used to label every section — a recurring,
  // recognisable brand element.
  .kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    font-family: 'Space Grotesk', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--paper-muted);
  }
  .kicker::before {
    content: "";
    width: 26px;
    height: 1px;
    background: var(--brand-gradient);
  }

  .gradient-text {
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  h2 {
    font-weight: 600;
    text-transform: none;
    font-size: clamp(2rem, 4vw, 3.1rem);
    letter-spacing: -0.03em;
  }

  a {
    color: var(--paper);
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover { color: var(--accent); }
  }

  // Keyboard-only focus indicator (WCAG 2.4.7).
  a:focus-visible,
  button:focus-visible,
  .btn-solid:focus-visible,
  .nav-link:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  // --- Hero typography -----------------------------------------------------
  .banner-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(3rem, 9vw, 7rem);
    line-height: 0.98;
    color: var(--paper);
    margin-bottom: 0.25rem;
  }
  .banner-title-outline {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(1.5rem, 4.2vw, 2.6rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  // --- Buttons -------------------------------------------------------------
  .btn-solid {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.55em;
    padding: 13px 26px;
    color: var(--paper) !important;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 0.86rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface-2);
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: var(--brand-gradient);
      transform: translateY(101%);
      transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    }
    &:hover, &:focus-visible {
      color: var(--ink) !important;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: 0 12px 30px -12px ${vars.accent};
      &::before { transform: translateY(0); }
    }
    &.btn-ghost { background: transparent; }
    &.dark-border { border-color: var(--ink); color: var(--ink) !important;
      &:hover, &:focus-visible { color: var(--paper) !important; } }
    &.disabled { opacity: 0.4; pointer-events: none; }
    &:focus { box-shadow: none; }
  }

  // --- Scroll reveal utility ----------------------------------------------
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }
  .reveal.is-visible {
    opacity: 1;
    transform: none;
  }

  // --- Reduced motion: freeze everything in its resting state -------------
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
    .reveal { opacity: 1; transform: none; }
  }
`;
