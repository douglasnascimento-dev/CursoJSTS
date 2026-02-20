import styled from 'styled-components';
import colors from '../../constants/colors';


export const AlunoContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  align-items: center;
  background-color: ${colors.secondColor};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  `;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
  
  .userIcon {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    color: #333;
    background-color: #f0f0f0;
    padding: 7px 7px 0 7px;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease;
  }
  `;

  export const ProfileInfos = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;

  span.profileName {
    font-weight: bold;
    margin-left: 10px;
  }

  span.profileEmail {
    color: gray;
    margin-left: 10px;
  }
  `;

export const ProfileIcones = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;
  justify-self: flex-end;

  a {
    color: #333;
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s ease;
    justify-self: center;
    align-self: center;
    margin: 0 0 -10px 0;

    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;
