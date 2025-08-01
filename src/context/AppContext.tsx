import { createContext } from 'react';
import data from '../data/data.json';

type Movie = typeof data.TendingNow[0];
type Featured = typeof data.Featured;

interface AppContextType {
  initialFeaturedId: string;
  featured: Featured;
  trending: Movie[];
  setFeatured: (movie: Movie) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  playVideo: (url: string | null) => void;
  currentVideo: string | null;
  hasSelectedItem: boolean;
  setHasSelectedItem: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  initialFeaturedId: '',
  featured: data.Featured,
  trending: [],
  setFeatured: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
  playVideo: () => {},
  currentVideo: null,
  hasSelectedItem: false,
  setHasSelectedItem: () => {}

});