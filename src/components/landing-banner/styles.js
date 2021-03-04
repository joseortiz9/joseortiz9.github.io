import styled from "styled-components";

const BannerWrapper = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  canvas {
    height: 120vh !important;
  }
  
  .social-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 20px;
    right: 5px;
    a {
      font-size: 23px;
      margin: 10px;
    }
    @media (min-width: 768px) {
      right: calc((100vw - 720px)/2);
    }
    @media (min-width: 992px) {
      right: calc((100vw - 960px)/2);
    }
    @media (min-width: 1200px) {
      right: calc((100vw - 1140px)/2);
    }
  }
  
  > .container .btn-solid {
    @media (max-width: 575px) {
      width: 50%;
      padding: 11px 20px;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    @media (min-width: 576px) {
      &:not(:last-child) {
        margin-right: 1rem;
        margin-bottom: 0;
      }
    }
  }
`;

export {BannerWrapper};