import {createGlobalStyle} from "styled-components";
import vars from "./variables.module.scss";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    background-color: ${vars.themeWavesDark};
    color: ${vars.fontDefaultColor};
  }

  h1.banner-title, h1.banner-title-outline {
    font-family: 'Poppins', sans-serif, Arial, Helvetica;
    font-weight: 700;
    font-size: 80px;
    word-break: break-all;
  }
  h1.banner-title {
    color: ${vars.fontDefaultColor};
  }
  h1.banner-title-outline {
    font-size: 70px;
    color: ${vars.fontDefaultColor};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${vars.fontDefaultColor};
  }
  
  h2 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;