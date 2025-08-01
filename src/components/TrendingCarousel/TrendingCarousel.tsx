import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  CarouselContainer,
  CarouselTitle,
  CarouselTrack,
  CarouselItem,
  CarouselImage
} from './TrendingCarousel.styles';

export const TrendingCarousel = () => {
  const { trending,setHasSelectedItem, setFeatured, playVideo } = useContext(AppContext);

  const handleClick = (item: typeof trending[0]) => {
    setFeatured(item);
    setHasSelectedItem(true);
    playVideo(null);
    setTimeout(() => playVideo(item.VideoUrl), 2000);
  };

  return (
    <CarouselContainer>
      <CarouselTitle>Trending Now</CarouselTitle>
      <CarouselTrack>
        {trending.map(item => (
          <CarouselItem key={item.Id} onClick={() => handleClick(item)}>
            <CarouselImage
              src={`/assets/${item.CoverImage}`}
              alt={item.Title}
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};