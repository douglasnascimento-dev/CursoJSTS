import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: #fff;
  font-size: 1.5rem;

  div {
    text-align: center; 
    background: rgba(0, 0, 0, 0.75);
    padding: 15px 50px;
    border-radius: 100px;
  }

  span {
    display: block; 
    margin-top: 10px;
    font-weight: bold;
    color: #fff;
  }
`;