import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--surface);
  border-top: 1px solid var(--line);
  color: var(--paper-muted);
  font-size: 0.9rem;

  .footer-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }
  .footer-tag {
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 0.02em;
  }
  .social-container a {
    font-size: 18px;
    margin-left: 0.9rem;
    transition: color 0.2s ease, transform 0.2s ease;
    &:hover { transform: translateY(-2px); }
  }
`;

export {FooterWrapper};
