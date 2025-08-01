import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  SidebarContainer,
  ProfileSection,
  Avatar,
  MenuItemsWrapper,
  MenuItem,
  MenuIcon,
  MenuText,
  BottomMenu,
  SearchInput,
  ProfileName
} from './SidebarMenu.styles';

export const SidebarMenu = () => {
  const { isMenuOpen, toggleMenu } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const showExpanded = isMenuOpen || isHovered;

  return (
    <SidebarContainer
      $isOpen={showExpanded}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showExpanded && (
        <ProfileSection>
          <Avatar src="/assets/avatar.png" alt="Profile" />
          <ProfileName>Daniel</ProfileName>
        </ProfileSection>
      )}

      <MenuItemsWrapper $isOpen={showExpanded} onClick={toggleMenu}>
        <MenuItem>
          <MenuIcon src="/assets/icons/search.png" alt="Search" />
          {showExpanded && <SearchInput type="text" placeholder="Search" />}
        </MenuItem>

        <MenuItem>
          <MenuIcon src="/assets/icons/home.png" alt="Home" />
          {showExpanded && <MenuText>Home</MenuText>}
        </MenuItem>

        <MenuItem>
          <MenuIcon src="/assets/icons/tv.png" alt="TV Shows" />
          {showExpanded && <MenuText>TV Shows</MenuText>}
        </MenuItem>

        <MenuItem>
          <MenuIcon src="/assets/icons/movies.png" alt="Movies" />
          {showExpanded && <MenuText>Movies</MenuText>}
        </MenuItem>

        <MenuItem>
          <MenuIcon src="/assets/icons/genres.png" alt="Genres" />
          {showExpanded && <MenuText>Genres</MenuText>}
        </MenuItem>

        <MenuItem>
          <MenuIcon src="/assets/icons/watch-later.png" alt="Watch Later" />
          {showExpanded && <MenuText>Watch Later</MenuText>}
        </MenuItem>
      </MenuItemsWrapper>

      {showExpanded && (
        <BottomMenu>
          <MenuItem>
            <MenuText>Language</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Get Help</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Exit</MenuText>
          </MenuItem>
        </BottomMenu>
      )}
    </SidebarContainer>
  );
};