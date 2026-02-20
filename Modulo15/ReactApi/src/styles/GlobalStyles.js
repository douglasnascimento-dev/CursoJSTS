import { Link } from 'react-router-dom';
import styled, { css, createGlobalStyle } from 'styled-components';

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

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.react-confirm-alert-overlay {
  background: rgba(0, 0, 0, 0.85);
}

.react-confirm-alert-body {
  background: ${colors.secondColor};
  color: black;
  font-family: 'Overpass', sans-serif;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  text-align: center;
  width: 400px;
  padding: 30px;
}

.react-confirm-alert-body h1 {
  font-size: 24px;
}

.react-confirm-alert-button-group button {
  background: ${colors.primaryColor}; 
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
}

.react-confirm-alert-button-group button:hover {
  filter: brightness(0.9);
}


.react-confirm-alert-button-group .confirm-button {
  background: ${colors.sucessColor}; 
  color: white;
}

.react-confirm-alert-button-group .cancel-button {
  background: ${colors.errorColor}; 
  color: white;
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
  max-width: 85vw;
  background-color: white;
  margin: 5vh auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: rgb(50, 50, 50);
  margin: 20px 0 0 0;
  text-align: center;
  font-weight: 900;
  padding-bottom: 10px;
`;

const sharedStyles = css`
  background: ${colors.secondGradient};
  color: white;
  padding: 8px 28px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${sharedStyles}
  width: fit-content;
  font-weight: 400;
  cursor: default;
  box-shadow: none;
  margin: 16px 0 4px 0;
  align-self: flex-start;
  border-radius: 100px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 12px 16px;
  border: none;
  width: 100%;
  border-bottom: 2px solid rgb(180, 180, 180);
  border-radius: 8px;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: rgba(240, 240, 240, 1);

  &::placeholder {
    color: #999;
    font-style: italic;
  }

  &:focus {
    border-color: ${colors.primaryColor};
    box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.2);
  }
`;

const ButtonStyle = css`
${sharedStyles}
padding: 12px 36px;
cursor: pointer;
margin-top: 16px;
width: fit-content;
border-radius: 100px;

  &:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  filter: brightness(1.1);
}

  &:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const LinkButton = styled(Link)`
  ${ButtonStyle}
`;

export const ActionIcon = styled(Link)`
  background: ${colors.secondGradient};
  color: white;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryGradient};
    color: ${colors.secondColor};
    transform: scale(1.1);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;

  ${Button} {
    grid-column: span 2;
    justify-self: center;
  }
`;

export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  background: ${colors.secondGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .userIcon {
    width: 60%;
    height: 60%;
  }
`;

export const InputFile = styled.input.attrs({ type: 'file' })`
  padding: 12px 36px;
  font-size: 16px;
  justify-content: center;
  width: min-content;

  &::file-selector-button {
    ${sharedStyles}
    padding: 12px 36px;
    cursor: pointer;
    border-radius: 100px;
    display: inline-block;
    margin: 16px 0 0 0;
    text-align: center;
    transition: all 0.3s ease;
    font-family: Overpass, sans-serif;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      filter: brightness(1.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }

`;

export const IconButton = styled(Link)`
  color: white;
  background: ${colors.secondGradient};
  font-size: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryGradient};
    color: ${colors.secondColor};
    transform: scale(1.1);
  }
`;

export const DeleteButton = styled.button`
  margin: 10px 0;
  background: ${colors.errorColor};
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 12px;
  cursor: pointer;
  width: min-content;
  height: min-content;
  display: flex;
  text-wrap: nowrap;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;