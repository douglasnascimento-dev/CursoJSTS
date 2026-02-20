import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../constants/colors';

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 20px;
`;

export const StudentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const AlunoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 250px;
  flex-grow: 1;
  max-width: 280px;
  min-height: 320px;
  background: ${colors.secondColor};
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;

  span.profileName {
    font-weight: bold;
    margin: 5px 0 0 0;
  }

  span.profileSurnameAge {
    font-size: 14px;
  }

  span.profileEmail {
    width: 80%;
    color: ${colors.secondTextColor};
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px auto 0;
  }
`;

export const ProfileIcones = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
  padding-top: 15px;
`;

