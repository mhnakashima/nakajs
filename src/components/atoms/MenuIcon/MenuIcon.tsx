import { Button, Line } from './styles';

interface MenuIconProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export function MenuIcon({ open, onClick, className }: MenuIconProps) {
  return (
    <Button
      onClick={onClick}
      className={className}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <Line $open={open} $position="top" />
      <Line $open={open} $position="mid" />
      <Line $open={open} $position="bot" />
    </Button>
  );
}
