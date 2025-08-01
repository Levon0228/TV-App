import React from 'react';
import { AppProvider } from './context/AppProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import { SidebarMenu } from './components/SidebarMenu/SidebarMenu';
import { FeaturedVideo } from './components/FeaturedVideo/FeaturedVideo';
import { TrendingCarousel } from './components/TrendingCarousel/TrendingCarousel';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <SidebarMenu />
      <main>
        <FeaturedVideo />
        <TrendingCarousel />
      </main>
    </AppProvider>
  );
}

export default App;