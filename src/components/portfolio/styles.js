import styled from "styled-components";
import {Modal} from "react-bootstrap";
import vars from "../../styles/variables.module.scss";

const SectionWrapper = styled.section`
  color: ${vars.themeWavesDark};
  overflow: hidden;
  .container {
    border-radius: 22px;
    background-color: ${vars.fontDefaultColor};
    box-shadow: 0 30px 80px -40px rgba(124, 92, 255, 0.5);
  }
  .section-head {
    margin-bottom: 2.5rem;
    .kicker { color: #6c6878; justify-content: center; }
    h2 { color: ${vars.inkBase}; }
  }
  .portfolio-slider {
    .slick-list {
      overflow: visible;
      .slick-slide {
        > div {
          cursor: pointer;
          margin: 0 20px;
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
        transform: translateZ(30px);
        .card-title {
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: .2rem;
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
      .modal-close-button {
        background: none;
        border: none;
        margin-left: auto;
        padding: 0;
        color: ${vars.fontDefaultColor};
        span {
          font-size: 2rem;
        }
      }
    }
    .modal-footer {
      border: none;
    }
  }
`;

export {SectionWrapper, ModalWrapper};