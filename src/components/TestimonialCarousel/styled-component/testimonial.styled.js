import styled from 'styled-components';

export const TestimonialCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const TestimonialAuthor = styled.p`
  font-weight: bold;
`;

export const TestimonialNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ 'data-active': active }) =>
    active ? '#000' : '#ccc'};
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`;
