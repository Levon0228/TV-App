

import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { VideoOverlay } from './VideoPlayer.styles';

const FALLBACK_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const VideoPlayer = () => {
  const { currentVideo } = useContext(AppContext);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    video.pause();
    video.removeAttribute('src');
    video.load();

    if (!currentVideo) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.src = currentVideo;

    const handleError = () => {
      console.error("Video failed to load, using fallback");
      video.src = FALLBACK_VIDEO;
      video.load();
      video.play().catch(e => console.log("Fallback play failed:", e));
    };

    video.addEventListener('error', handleError);

    video.play().catch(e => {
      console.log("Autoplay blocked, but video is loaded:", e);
    });

    return () => {
      video.removeEventListener('error', handleError);
      video.pause();
    };
  }, [currentVideo]);

  if (!currentVideo) return null;

  return (
    <VideoOverlay>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </VideoOverlay>
  );
};