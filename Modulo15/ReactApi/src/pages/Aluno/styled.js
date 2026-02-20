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

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }


`