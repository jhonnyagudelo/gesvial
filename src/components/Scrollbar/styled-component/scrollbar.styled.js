import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500%);
  }
`;

export const SectionScrollbar = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ArticleScrollbar = styled.article`
  animation: ${scrollAnimation} 80s linear infinite;
  display: flex;
  transition: transform 0.5s;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export const FigureScrollbar = styled.figure`
  width: 100%;
`;

export const ImgScrollbar = styled.img`
  width: 60%;
  heigth: 30em;
`;

export const Comment = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

export const Author = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;
