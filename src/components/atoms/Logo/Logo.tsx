import { Avatar } from '@atoms/Avatar';
import { Wrapper, TextBlock, Name, Role } from './styles';

interface LogoProps {
  name: string;
  role: string;
  avatarUrl: string;
  compact?: boolean;
  className?: string;
}

export function Logo({ name, role, avatarUrl, compact = false, className }: LogoProps) {
  return (
    <Wrapper className={className}>
      <Avatar src={avatarUrl} alt={name} size={compact ? 'sm' : 'md'} />
      <TextBlock>
        <Name>{compact ? name.split('|')[0]?.trim() ?? name : name}</Name>
        <Role>{role}</Role>
      </TextBlock>
    </Wrapper>
  );
}
