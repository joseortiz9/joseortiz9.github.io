import styled from "styled-components";
import vars from "../../styles/variables.module.scss";

const HeaderWrapper = styled.header`
  nav {
    background-color: transparent;
    a {
      color: ${vars.fontDefaultColor} !important;
    }
  }
  .sticky-inner-wrapper {
    nav:first-child {
      padding-bottom: 0;
      padding-top: 0;
    }
  }
  .container-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;
    transition: all 0.3s ease;
  }
  .sticky-nav-active {
    nav {
      background-color: ${vars.themeWaves};
    }
    .container-wrapper {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;

export {HeaderWrapper};