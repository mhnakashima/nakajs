import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledLink = styled(RouterNavLink)`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #666;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #0a0a0a;
    transition: width 0.2s ease;
  }

  &:hover,
  &.active {
    color: #0a0a0a;
    font-weight: 700;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;
