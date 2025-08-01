import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import data from '../data/data.json';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const initialFeaturedId = data.Featured.Id
  const [featured, setFeatured] = useState(() => {
    const lastViewed = sessionStorage.getItem('lastViewed');
    return lastViewed 
      ? data.TendingNow.find(m => m.Id === lastViewed) || data.Featured
      : data.Featured;
  });

  const [trending, setTrending] = useState<typeof data.TendingNow>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [hasSelectedItem, setHasSelectedItem] = useState(false);

  useEffect(() => {
    const lastViewed = sessionStorage.getItem('lastViewed');
    const sorted = [...data.TendingNow].sort((a, b) => {
      if (a.Id === lastViewed) return -1;
      if (b.Id === lastViewed) return 1;
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });
    setTrending(sorted.slice(0, 50));
  }, []);

  const handleSetFeatured = (movie: typeof data.TendingNow[0]) => {
    sessionStorage.setItem('lastViewed', movie.Id);
    setFeatured(movie);
    setHasSelectedItem(true); // Set to true when item is selected
  };

  const playVideo = (url: string | null) => {
    setCurrentVideo(url);
    if (url === null && featured.Id === data.Featured.Id) {
      setHasSelectedItem(false); // Reset when video stops
    }
  };

  return (
    <AppContext.Provider value={{
      initialFeaturedId,
      featured,
      trending,
      setFeatured: handleSetFeatured,
      isMenuOpen,
      toggleMenu: () => setIsMenuOpen(!isMenuOpen),
      playVideo,
      currentVideo,
      hasSelectedItem,
      setHasSelectedItem
    }}>
      {children}
    </AppContext.Provider>
  );
};