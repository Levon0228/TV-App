import styled from 'styled-components';

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => $isOpen ? '300px' : '80px'};
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.4s ease;
  padding: ${({ $isOpen }) => $isOpen ? '20px 0' : '0'};
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 42px;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

export const ProfileName = styled.span`
  font-size: 30px;
  color: white;
`;

export const MenuItemsWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  gap: 16px;
  justify-content: center;
  align-items: start;
  padding: ${({ $isOpen }) => $isOpen ? '24px' : '0'};
`;

export const MenuItem = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  border-radius: 8px;
  width: ${({ $isOpen }) => $isOpen ? 'calc(100% - 40px)' : 'auto'};
  justify-content: ${({ $isOpen }) => $isOpen ? 'flex-start' : 'center'};

  &:hover {
    background-color: rgba(67, 86, 173, 0.5);
    transform: scale(0.98);
  }
`;

export const MenuIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const MenuText = styled.span`
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
`;

export const BottomMenu = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  opacity: 0.6;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:focus {
    outline: none;
    border-bottom-color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;