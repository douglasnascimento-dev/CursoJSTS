import styled from 'styled-components';

import colors from '../../constants/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  background-color: ${colors.secondColor};
  padding: 20px;
  border-radius: 8px;
  margin: 20px 20px;

  label {
    font-weight: bold;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
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
