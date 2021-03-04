import styled from 'styled-components';
import vars from "../../styles/variables.module.scss";

const ContactSectionWrapper = styled.section`
  height: 75vh;
  .social-container a {
    font-size: 30px;
  }
  .cv-image-container {
    background-color: #393939; //{vars.themeWaves};
    margin-bottom: 2rem;
    padding: 20px 20px;
    svg {
      width: 100px;
      height: 100px;
      margin-bottom: 1rem;
    }
    & > span {
      display: block;
      width: 100%;
      height: 1px;
      margin: 4px 0;
      float: left;
      background-color: ${vars.fontDefaultColor};
      transition: all 0.3s ease;
      &:last-child {
        width: calc(100% - 50px);
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 768px) {
    height: 90vh;
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export {ContactSectionWrapper};