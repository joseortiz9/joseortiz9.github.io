import {createGlobalStyle} from "styled-components";
import vars from "./variables.module.scss";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    background-color: ${vars.themeWavesDark};
    color: ${vars.fontDefaultColor};
  }

  .section-t-space {
    padding-top: 100px;
  }
  .section-b-space {
    padding-bottom: 70px;
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

  .btn-solid {
    padding:13px 29px;
    color: ${vars.fontDefaultColor} !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid ${vars.themeWaves};
    background-image: -webkit-linear-gradient(30deg, ${vars.themeWaves} 50%, transparent 50%);
    background-image: linear-gradient(30deg, ${vars.themeWaves} 50%, transparent 50%);
    background-size: 540px;
    background-repeat: no-repeat;
    background-position: 0;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;
    &:hover{
      background-position: 100%;
      color: ${vars.themeWaves} !important;
      background-color: ${vars.fontDefaultColor};
    }
    &.black-btn {
      background-image: -webkit-linear-gradient(30deg, ${vars.themeWavesDark} 50%, transparent 50%);
      background-image: linear-gradient(30deg, ${vars.themeWavesDark} 50%, transparent 50%);
      border: 2px solid ${vars.themeWavesDark};
    }
    &:focus {
      color: ${vars.fontDefaultColor};
      box-shadow: none;
    }
  }
`;