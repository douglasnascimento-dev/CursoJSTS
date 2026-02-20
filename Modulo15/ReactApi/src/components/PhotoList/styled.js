import styled from 'styled-components';
import colors from '../../constants/colors';

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;

    span {
      display: grid;
      grid-template-columns: min-content min-content 250px min-content;
      gap: 16px;
      align-items: center;
      background: ${colors.secondColor};
      padding: 8px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 75px;
      height: 75px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    p.id {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;  
      color: white;
      background: ${colors.secondGradient};
      padding: 4px 8px;
      border-radius: 4px;
      height: min-content;
      width: min-content;
    }

`;
