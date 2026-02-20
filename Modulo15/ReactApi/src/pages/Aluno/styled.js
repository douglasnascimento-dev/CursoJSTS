import styled, {css} from 'styled-components';
import colors from '../../constants/colors';

export const ProfilePicture = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 25px;
  }

  a {
    background: ${colors.secondGradient};
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 25px;
    cursor: pointer;
    transition: background 3s ease;
    display: inline-block;
    align-self: center;
    margin: -20px 0 20px;

    &:hover {
      background: ${colors.primaryGradient};
    }
  }
`;



