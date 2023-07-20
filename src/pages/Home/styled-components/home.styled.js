import styled from 'styled-components';

export const ContentLogo = styled.section`
  display: flex;
  justify-content: center;
`;

export const ContentRoadSafety = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 5em;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImgRoadSatefy = styled.img`
  /* width: 30em; */
  /* heigth: 10em; */
`;

export const TitleRoadSafety = styled.h1`
  background-color: var(--negro);
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 4.5em;
  padding: 0 0.8em;
  margin: 0.5em;
`;

export const ParragraphRoadSatefy = styled.p`
  text-align: center;
  font-size: 1.8em;
`;

export const TitleTrust = styled.h1`
  font-size: 5.5em;
  display: flex;
  justify-content: center;
`;
export const SectionTrust = styled.section`
  background: linear-gradient(
    90deg,
    rgba(210, 210, 226, 1) 20%,
    rgba(180, 187, 212, 1) 100%
  );
`;

export const FigureTrust = styled.figure`
  padding: 2em 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 10em);
`;
