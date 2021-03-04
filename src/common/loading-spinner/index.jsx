import React from "react";
import styled from "styled-components";
import {ReactComponent as LoaderSvg} from "../../assets/loader.svg";

const LoadingSpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 300;
  margin-left: -75px;
  margin-top: -75px;
  > svg {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 768px) {
    margin-left: -60px;
    margin-top: -60px;
    > svg {
      width: 120px;
      height: 120px;
    }
  }
`;

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerWrapper>
            <LoaderSvg />
        </LoadingSpinnerWrapper>
    );
};

export default LoadingSpinner;
