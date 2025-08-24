'use client';
import React, { memo } from 'react';
import styles from './header.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationLink from '@/components/common/NavigationLink';

const Header = memo(() => {
  const { translate } = useLanguage();

  return (
    <header className={styles.header}>
      <h1>
        <a href="https://github.com/luiz-santos2">Luiz Dev.</a>
      </h1>
      <nav>
        <ul>
          <li>
            <NavigationLink href="#about">{translate('about')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#skills">{translate('skills')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#experiences">{translate('experiences')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#projects">{translate('projects')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#contact">{translate('contact')}</NavigationLink>
          </li>
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
