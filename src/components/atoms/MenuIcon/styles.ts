import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const Line = styled.span<{ $open: boolean; $position: 'top' | 'mid' | 'bot' }>`
  display: block;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.2s ease;

  ${({ $open, $position }) => {
    if (!$open) return '';
    if ($position === 'top') return 'transform: translateY(7px) rotate(45deg);';
    if ($position === 'mid') return 'opacity: 0;';
    return 'transform: translateY(-7px) rotate(-45deg);';
  }}
`;
