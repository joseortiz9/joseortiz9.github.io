import styled from 'styled-components';
import vars from "../../styles/variables.module.scss";

const AboutWrapper = styled.section`
  .kicker { margin-bottom: 1.1rem; }

  .portrait {
    position: relative;
    max-width: 300px;
    border-radius: 18px;
    padding: 4px;
    background: var(--brand-gradient);
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    img {
      border-radius: 14px;
      display: block;
    }
    &:hover { transform: translateY(-4px) rotate(-1deg); }
  }

  p {
    line-height: 1.75;
    color: var(--paper-muted);
    b, u { color: var(--paper); }
  }
`;

const SkillsWrapper = styled.section`
  background-color: ${vars.themeWaves};
  border-block: 1px solid var(--line);
  .skills-slider {
    .slick-slide {
      > div {
        margin: 0 10px;
      }
    }
    i > svg {
      max-width: 100px;
      filter: grayscale(0.35) opacity(0.85);
      transition: filter 0.3s ease, transform 0.3s ease;
    }
    i:hover > svg {
      filter: none;
      transform: translateY(-4px);
    }
    @media (max-width: 768px) {
      i > svg {
        max-width: 80px;
      }
    }
  }
`;

export {SkillsWrapper, AboutWrapper};
