import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
`;

export const PhotoTitle = styled.h2`
  margin-bottom: 20px;
`;

export const PhotoCard = styled.div`
  width: 45em;
  position: relative;
  margin: 1em;
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
  position: absolute;
  bottom: 3px;
  right: 0;
  width: 100%;
`;
