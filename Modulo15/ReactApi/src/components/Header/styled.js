import styled from 'styled-components';

import colors from '../../constants/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  color: ${colors.primaryColor};
  a {
    color: ${colors.primaryColor};
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      font-weight: 800;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      margin: 5px 0;
    }
  }
  @media (max-width: 480px) {
    padding: 10px;
    a {
      margin: 0 5px;
    }
  }
  @media (max-width: 320px) {
    padding: 5px;
    a {
      margin: 0 2px;
    }
  }
  @media (min-width: 1200px) {
    padding: 20px 40px;
    a {
      margin: 0 15px;
    }
  }
  @media (min-width: 1600px) {
    padding: 30px 60px;
    a {
      margin: 0 20px;
    }
  }
  @media (min-width: 1920px) {
    padding: 40px 80px;
    a {
      margin: 0 25px;
    }
  }
`;
