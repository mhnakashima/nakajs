import type { ReactNode } from 'react';
import { Main } from './styles';

interface LayoutProps {
  children: ReactNode;
  headerHeight: number;
}

const BUFFER = 24;

export function Layout({ children, headerHeight }: LayoutProps) {
  return (
    <Main id="main-content" $pt={headerHeight + BUFFER}>
      {children}
    </Main>
  );
}
