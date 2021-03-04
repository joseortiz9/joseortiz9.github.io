import styled from 'styled-components';
import vars from "../../styles/variables.module.scss";

const SkillsWrapper = styled.section`
  background-color: ${vars.themeWaves};
  .skills-slider {
    .slick-slide {
      > div {
        margin: 0 10px;
      }
    }
    i > svg {
      max-width: 100px;
    }
    @media (max-width: 768px) {
      i > svg {
        max-width: 80px;
      }
    }
  }
  
`;

export {SkillsWrapper};