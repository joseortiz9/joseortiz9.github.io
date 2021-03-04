import styled from 'styled-components';

const UpButton = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: transparent;
  color: white;
  border: 2px solid white;
  opacity: 0.8;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 200;
  width: 45px;
  height: 45px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  transition: all 0.4s ease;
  & > i > svg {
    font-size: 14px;
    fill: white;
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 768px) {
    right: 30px;
    bottom: 30px;
  }
`;

export {UpButton};