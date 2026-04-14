import { StyledImg } from './styles';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = { sm: 36, md: 48, lg: 96 } as const;

const srcSetMap: Record<string, string> = {
  '/images/avatar.webp': '/images/avatar-96.webp 96w, /images/avatar-192.webp 192w, /images/avatar.webp 325w',
};

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const px = sizeMap[size];
  const retinaSize = px * 2;
  const srcSet = srcSetMap[src];
  const optimizedSrc = src === '/images/avatar.webp'
    ? (retinaSize <= 96 ? '/images/avatar-96.webp' : '/images/avatar-192.webp')
    : src;

  return (
    <StyledImg
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={`${px}px`}
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
