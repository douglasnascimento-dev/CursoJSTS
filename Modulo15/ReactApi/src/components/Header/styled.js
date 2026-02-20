import styled from 'styled-components';
import colors from '../../constants/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding: 20px;
  color: ${colors.primaryColor};

  a {
    color: ${colors.primaryColor};
    text-decoration: none;
    margin: 0 10px;
    transition: font-weight 0.2s; 
    &:hover {
      font-weight: 800;
    }
  }
 
  .userName {
    font-weight: 800;
  }
`;