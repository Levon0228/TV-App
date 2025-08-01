import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 0 0 0 7rem;
`;

export const CarouselTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

`;

export const CarouselImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;