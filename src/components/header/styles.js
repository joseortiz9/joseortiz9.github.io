import styled from "styled-components";

const HeaderWrapper = styled.header`
  .brand-nav {
    background: transparent;
    transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
    border-bottom: 1px solid transparent;
  }
  // Condense + frost the bar once the page scrolls.
  .brand-nav.is-condensed,
  .sticky-nav-active .brand-nav {
    background: rgba(11, 11, 16, 0.72);
    backdrop-filter: saturate(140%) blur(12px);
    border-bottom: 1px solid var(--line);
  }

  .container-wrapper {
    padding-top: 18px;
    padding-bottom: 18px;
    transition: padding 0.3s ease;
  }
  .is-condensed .container-wrapper { padding-top: 11px; padding-bottom: 11px; }

  .navbar-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--paper) !important;
    .brand-name {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    svg { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
    &:hover svg { transform: rotate(120deg); }
  }

  .nav-link {
    position: relative;
    color: var(--paper) !important;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 0.92rem;
    padding: 0.4rem 0.85rem;
    // Animated underline that wipes in from the left.
    &::after {
      content: "";
      position: absolute;
      left: 0.85rem;
      right: 0.85rem;
      bottom: 0.15rem;
      height: 2px;
      background: var(--brand-gradient);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    &:hover, &:focus-visible {
      color: var(--paper) !important;
      &::after { transform: scaleX(1); }
    }
    @media (max-width: 575px) {
      padding: 0.4rem 0.5rem;
      font-size: 0.82rem;
    }
  }
`;

export {HeaderWrapper};
