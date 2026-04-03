import styled from 'styled-components';

export const List = styled.nav<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $direction }) => ($direction === 'row' ? 'center' : 'flex-start')};
  gap: ${({ $direction }) => ($direction === 'row' ? '0.75rem' : '1.25rem')};
`;

export const Separator = styled.span`
  color: #ccc;
  user-select: none;
  font-size: 0.75rem;
  font-weight: 300;
`;
