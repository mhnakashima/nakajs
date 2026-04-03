import styled, { css } from 'styled-components';

export const Outer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  padding-top: env(safe-area-inset-top, 0px);
  transition: box-shadow 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
        `
      : css`
          box-shadow: none;
        `}
`;

export const TopStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 767px) {
    max-width: none;
    padding: 0.375rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;

export const ExpandedView = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0 1.25rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CompactBar = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 52px;
  padding: 0.25rem 0;

  @media (max-width: 767px) {
    display: flex;
    min-height: 44px;
    padding: 0.375rem 0;
  }
`;

export const DesktopNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;
