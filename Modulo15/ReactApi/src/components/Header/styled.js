import styled from 'styled-components';
import colors from '../../constants/colors';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 20px;
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

  .home {
    background: ${colors.secondGradient};
    color: white;
    padding: 10px 30px;
    border-radius: 20px;
    margin-right: auto; 
  }
 
  .userName {
    font-weight: 800;
  }
`;