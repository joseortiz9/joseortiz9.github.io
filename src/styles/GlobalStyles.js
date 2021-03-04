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
  .section-b-md-space {
    @media (min-width: 768px) {
      padding-bottom: 70px;
    }
  }
  .section-b-sm-space {
    @media (min-width: 576px) {
      padding-bottom: 70px;
    }
  }
  

  .vh-75 {
    height: 75vh !important;
  }
  .vh-50 {
    height: 50vh !important;
  }
  
  a {
    color: ${vars.fontDefaultColor};
    &:hover {
      color: ${vars.fontDefaultColorDarker};
      text-decoration: none;
    }
  }

  h1.banner-title, h1.banner-title-outline {
    font-family: 'Poppins', sans-serif, Arial, Helvetica;
    font-weight: 700;
    font-size: 80px;
    word-break: break-word;
  }
  h1.banner-title {
    color: ${vars.fontDefaultColor};
    @media (max-width: 991px) {
      font-size: 70px;
    }
    @media (max-width: 767px) {
      font-size: 60px;
    }
    @media (max-width: 575px) {
      font-size: 50px;
    }
  }
  h1.banner-title-outline {
    font-size: 70px;
    color: ${vars.fontDefaultColor};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${vars.fontDefaultColor};
    @media (max-width: 991px) {
      font-size: 60px;
    }
    @media (max-width: 767px) {
      font-size: 50px;
    }
    @media (max-width: 575px) {
      font-size: 35px;
    }
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
    border: 2px solid ${vars.fontDefaultColor};
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
    &.dark-border {
      border: 2px solid ${vars.themeWaves};
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