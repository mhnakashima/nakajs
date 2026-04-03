import { Avatar } from '@atoms/Avatar';
import { Wrapper, Name, Role } from './styles';

interface HeaderInfoProps {
  name: string;
  role: string;
  avatarUrl: string;
  className?: string;
}

export function HeaderInfo({ name, role, avatarUrl, className }: HeaderInfoProps) {
  return (
    <Wrapper className={className}>
      <Avatar src={avatarUrl} alt={name} size="lg" />
      <div>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </div>
    </Wrapper>
  );
}
