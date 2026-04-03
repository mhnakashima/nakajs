import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const Wrapper = styled.span<{ $color: string; $compact: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $compact }) => ($compact ? '0.25rem' : '0.375rem')};
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: ${({ $compact }) => ($compact ? '0.625rem' : '0.75rem')};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  white-space: nowrap;
`;

export const Dot = styled.span<{ $color: string; $compact: boolean }>`
  width: ${({ $compact }) => ($compact ? '7px' : '10px')};
  height: ${({ $compact }) => ($compact ? '7px' : '10px')};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  animation: ${pulse} 2s ease-in-out infinite;
  flex-shrink: 0;
`;
