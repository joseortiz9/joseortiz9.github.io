import styled from "styled-components";
import vars from "../../styles/variables.module.scss";

const SectionWrapper = styled.section`
  color: ${vars.themeWavesDark};
  .container {
    border-radius: 10px;
    background-color: ${vars.fontDefaultColor};
  }
`;

export {SectionWrapper};