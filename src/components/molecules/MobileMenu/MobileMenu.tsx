import { useEffect, useRef } from 'react';
import { NavLinks } from '@molecules/NavLinks';
import type { NavItem } from '@/types/navigation';
import type { TranslationKeys } from '@/types/i18n';
import { Overlay, Drawer, DrawerHeader, CloseButton, DrawerBody } from './styles';

interface MobileMenuProps {
  open: boolean;
  items: NavItem[];
  t: (key: keyof TranslationKeys) => string;
  onClose: () => void;
  className?: string;
}

export function MobileMenu({ open, items, t, onClose, className }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    const closeBtn = drawerRef.current?.querySelector<HTMLElement>('button');
    closeBtn?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <>
      <Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <Drawer
        ref={drawerRef}
        $open={open}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <DrawerHeader>
          <CloseButton onClick={onClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>
        </DrawerHeader>
        <DrawerBody>
          <NavLinks items={items} t={t} direction="column" onNavigate={onClose} />
        </DrawerBody>
      </Drawer>
    </>
  );
}
