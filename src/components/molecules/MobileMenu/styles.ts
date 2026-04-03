import styled from 'styled-components';

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 150;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.3s ease;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;

  &:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const DrawerBody = styled.div`
  flex: 1;
  padding: 2rem 1.5rem;
`;
