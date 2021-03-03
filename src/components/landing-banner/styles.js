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
`;

export {BannerWrapper};