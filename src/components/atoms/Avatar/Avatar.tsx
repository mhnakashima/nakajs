import { StyledImg } from './styles';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = { sm: 36, md: 48, lg: 96 } as const;

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const px = sizeMap[size];

  return (
    <StyledImg
      src={src}
      alt={alt}
      $size={px}
      width={px}
      height={px}
      loading="eager"
      decoding="async"
      className={className}
    />
  );
}
