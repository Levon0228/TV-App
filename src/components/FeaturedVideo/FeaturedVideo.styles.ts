import styled from 'styled-components';


export const FeaturedContainer = styled.div`
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 7rem;
`;

export const FeaturedImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin-bottom: 4rem;
`;

export const Category = styled.span`
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;

export const TitleImage = styled.img`
  max-width: 300px;
  margin-bottom: 1rem;

`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #fff;
`;

export const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const PlayButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
`;



export const InfoButton = styled.button`
  background-color: rgba(42, 42, 206, 0.7);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(109, 109, 110, 0.9);
  }
`;