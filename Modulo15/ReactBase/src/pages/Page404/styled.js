import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../constants/colors';

export const Title = styled.h1`
  color: ${colors.errorColor};
  text-align: center;
  font-size: 2.5em;
  margin: 0.5em 0 0 0;
`;

export const Paragraph = styled.p`
  text-align: center;
    font-size: 1.2em;
    margin: 0.5em 0;
    line-height: 1.5;
`;

export const StyledLink = styled(Link)`
  color: ${colors.secondColor};
  text-align: center;
  display: block;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${colors.primaryColor};
  }
`;