import styled, { createGlobalStyle } from 'styled-components';

import colors from '../constants/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Overpass', sans-serif;
}

body {
  font-family: 'Overpass', sans-serif;
  background: ${colors.primaryGradient};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}
.Toastify__toast-container .Toastify__toast--success, 
.Toastify__toast--error {
  border-radius: 6px;
  padding: 12px 16px;
  color: block;
  font-family: 'Overpass', sans-serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-weight: 500;
}

`;

export const Container = styled.main`
  max-width: 75vw;
  background-color: white;
  margin: 5vh auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
`;
