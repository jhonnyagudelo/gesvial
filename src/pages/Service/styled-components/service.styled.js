import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PhotoCard = styled.div`
  width: 200px;
  margin: 10px;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;

export const Comment = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px;
  text-align: center;
`;
