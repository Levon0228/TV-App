import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { formatDuration } from '../../utils/helpers';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import {
  FeaturedContainer,
  ContentWrapper,
  Category,
  TitleImage,
  MetaInfo,
  Description,
  ButtonGroup,
  PlayButton,
  InfoButton,
  FeaturedImage,
} from './FeaturedVideo.styles';

export const FeaturedVideo = () => {
  const {initialFeaturedId, featured, currentVideo, hasSelectedItem } = useContext(AppContext);
  const imagePath = `/assets/${featured.CoverImage.replace('https_', 'featured_')}`;

  const videoRef = useRef<HTMLVideoElement>(null);
  const isInitialState = !hasSelectedItem && featured.Id === initialFeaturedId;

  useEffect(() => {

    if (!videoRef.current || !currentVideo) return;

    const video = videoRef.current;
    video.src = currentVideo;
    video.muted = true;
    video.playsInline = true;
    video.play().catch(e => console.log("Autoplay error:", e));

    return () => {
      video.pause();
    };
  }, [currentVideo]);

  return (
    <FeaturedContainer >
      {
        currentVideo ? <VideoPlayer /> : <FeaturedImage src={imagePath} alt={featured.Title} />
      }
      { isInitialState && (<ContentWrapper>
        <Category>{featured.Category}</Category>
        <TitleImage src={`/assets/${featured.TitleImage}`} alt={featured.Title} />
        <MetaInfo>
          <span>{featured.ReleaseYear}</span>
          <span>{featured.MpaRating}</span>
          <span>{formatDuration(featured.Duration)}</span>
        </MetaInfo>
        <Description>{featured.Description}</Description>
        <ButtonGroup>
          <PlayButton>
            <span>▶</span> Play
          </PlayButton>
          <InfoButton>More Info</InfoButton>
        </ButtonGroup>
      </ContentWrapper>
      )}
    </FeaturedContainer>
  );
};