import styled from 'styled-components';

export const Title = styled.h1`
  color: black;
`;

export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding:  5px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

`;
