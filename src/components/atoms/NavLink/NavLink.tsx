import { StyledLink } from './styles';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export function NavLinkItem({ to, label, className }: NavLinkProps) {
  return (
    <StyledLink to={to} className={className} end={to === '/'}>
      {label}
    </StyledLink>
  );
}
