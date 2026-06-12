import styled from "styled-components";

const SectionWrapper = styled.section`
  position: relative;

  .section-head {
    max-width: 720px;
    margin-bottom: 3.5rem;
  }
  .kicker { margin-bottom: 1.2rem; }
  .section-lede {
    margin-top: 1.4rem;
    font-size: clamp(1rem, 1.3vw, 1.15rem);
    line-height: 1.7;
    color: var(--paper-muted);
  }

  .agent-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.4rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr));
  }

  .agent-card {
    position: relative;
    padding: 2rem 1.9rem 1.8rem;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: linear-gradient(180deg, var(--surface) 0%, var(--ink) 100%);
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                border-color 0.35s ease, box-shadow 0.35s ease;

    // Gradient edge that lights up on hover/focus-within.
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: var(--brand-gradient);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    &:hover, &:focus-within {
      transform: translateY(-6px);
      border-color: transparent;
      box-shadow: 0 24px 50px -28px rgba(124, 92, 255, 0.7);
      &::after { opacity: 1; }
    }
  }

  .agent-index {
    font-family: 'Space Grotesk', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--accent);
  }
  .agent-title {
    margin: 0.9rem 0 0.8rem;
    font-size: 1.32rem;
    font-weight: 600;
  }
  .agent-summary {
    margin: 0 0 1.5rem;
    font-size: 0.96rem;
    line-height: 1.62;
    color: var(--paper-muted);
  }
  .agent-tags {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    li {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      padding: 0.32em 0.85em;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: var(--paper);
    }
  }
`;

export {SectionWrapper};
