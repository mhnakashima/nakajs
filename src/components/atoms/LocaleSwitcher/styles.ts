import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
`;

export const LocaleButton = styled.button<{ $active: boolean; $compact: boolean }>`
  font-family: 'Lato', sans-serif;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  font-size: ${({ $compact }) => ($compact ? '0.625rem' : '0.75rem')};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#0a0a0a' : '#666')};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ $compact }) => ($compact ? '0.125rem 0.25rem' : '0.125rem 0.375rem')};
  transition: color 0.2s ease;

  &:hover {
    color: #0a0a0a;
  }

  &:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const Separator = styled.span<{ $compact: boolean }>`
  color: #d1d5db;
  font-size: ${({ $compact }) => ($compact ? '0.625rem' : '0.75rem')};
  user-select: none;
`;
