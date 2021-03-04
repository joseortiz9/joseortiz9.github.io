import styled from "styled-components";
import {Modal} from "react-bootstrap";
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
          cursor: pointer;
          margin: 0 10px;
        }
      }
    }
    .slick-dots {
      bottom: -45px;
    }
    .parallax-portfolio-effect {
      transform-style: preserve-3d;
      .parallax-inner-wrapper {
        color: white;
        top: initial;
        padding: 0 2.5rem;
        padding-bottom: 3rem;
        transform: translateZ(40px);
        .card-title {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
  .button-container {
    margin-top: 5rem;
  }
`;

const ModalWrapper = styled(Modal)`
  .modal-content {
    background-color: ${vars.themeWaves};
    border: 1px solid ${vars.fontDefaultColor};
    .modal-header {
      border: none;
      .modal-title {
        font-weight: bold;
        text-transform: uppercase;
      }
      .close {
        color: ${vars.fontDefaultColor};
        span {
          font-size: 2rem;
        }
      }
    }
  }
`;

export {SectionWrapper, ModalWrapper};