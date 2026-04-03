export interface NavItem {
  id: string;
  labelKey: string;
  path: string;
  enabled: boolean;
}

export interface SiteConfig {
  navigation: NavItem[];
  availability: {
    labelKey: string;
    status: 'available' | 'unavailable' | 'busy';
    visible: boolean;
  };
  owner: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}
