import styled from 'styled-components';
import vars from "../../styles/variables.module.scss";

const SocialMediaWrapper = styled.div`
  a {
    font-size: 20px;
    color: ${vars.fontDefaultColor};
    &:not(:last-child) {
      margin-right: 1rem;
    }
    &.linkedin:hover {
      color: #0077b5;
    }
    &.instagram:hover {
      color: #C21975;
    }
    &.github:hover {
      color: #b6b1b0;
    }
  }
`;

export {SocialMediaWrapper};