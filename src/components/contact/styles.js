import styled from 'styled-components';

const ContactSectionWrapper = styled.section`
  min-height: 75vh;
  padding-block: 80px;
  .kicker { margin-bottom: 1.2rem; }
  // The lead sentence is a section heading (h2) for landmark/heading order,
  // but keeps its sentence-case, larger styling instead of the global look.
  .contact-heading {
    text-transform: none;
    font-weight: 500;
    font-size: clamp(1.6rem, 3.2vw, 2.6rem);
    line-height: 1.25;
    a {
      background: var(--brand-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
  .social-container a {
    font-size: 28px;
    margin-right: 1rem;
    transition: transform 0.2s ease, color 0.2s ease;
    &:hover { transform: translateY(-3px); }
  }
  .cv-image-container {
    background-color: var(--surface-2);
    border: 1px solid var(--line);
    border-radius: 14px;
    margin-bottom: 2rem;
    padding: 22px;
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
      background-color: var(--paper-muted);
      transition: all 0.3s ease;
      &:last-child {
        width: calc(100% - 50px);
        margin-bottom: 0;
      }
    }
    &:hover > span { background-color: var(--accent); }
  }
  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;

export {ContactSectionWrapper};
