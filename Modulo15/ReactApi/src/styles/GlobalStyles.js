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

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
  background-color: ${colors.secondColor};
  padding: 20px;
  border-radius: 8px;
  margin: 20px 20px;

  label {
    font-weight: bold;
    display: grid; 
    grid-template-columns: 1fr 3.5fr;
    align-items: center;
    justify-content: space-between;
    text-align: right;
     }

  input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin: 5px 10px;

    &:hover {
      border-color: ${colors.primaryColor};
    }
    &:active {
      border-color: ${colors.primaryColor};
    }
    &:focus {
      border-color: ${colors.primaryColor};
      outline: none;
    }
  }

  button {
    padding: 10px;
    background-color: ${colors.primaryColor};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    font-size: 16px;
    width: 20%;
    &:hover {
      background-color: ${colors.primaryDarkColor};
    }
  }
`;
