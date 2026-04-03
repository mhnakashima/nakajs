import styled from 'styled-components';

export const Main = styled.main<{ $pt: number }>`
  padding-top: ${({ $pt }) => $pt}px;
  padding-bottom: 5rem;

  @media (max-width: 767px) {
    padding-bottom: calc(4rem + env(safe-area-inset-bottom, 0px));
  }
`;
