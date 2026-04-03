import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Bar = styled.nav`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
`;

export const TabLink = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
  text-decoration: none;
  color: #999;
  transition: color 0.2s ease;

  &.active {
    color: #0a0a0a;
  }

  &:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: -2px;
    border-radius: 4px;
  }
`;

export const TabLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: 0.02em;

  .active > & {
    font-weight: 700;
  }
`;
