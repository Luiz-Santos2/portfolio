'use client';
import React, { memo } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavigationLink = memo(({ href, children, className }: NavigationLinkProps) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
