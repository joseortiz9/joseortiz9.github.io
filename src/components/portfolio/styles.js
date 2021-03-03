import styled from "styled-components";
import vars from "../../styles/variables.module.scss";

const SectionWrapper = styled.section`
  color: ${vars.themeWavesDark};
  overflow: hidden;
  .container {
    border-radius: 10px;
    background-color: ${vars.fontDefaultColor};
  }
  .portfolio-slider {
    .slick-list {
      overflow: visible;
      .slick-slide {
        > div {
          margin: 0 10px;
        }
      }
    }
    .slick-dots {
      bottom: -45px;
    }
  }
  .button-container {
    margin-top: 5rem;
  }
`;

export {SectionWrapper};