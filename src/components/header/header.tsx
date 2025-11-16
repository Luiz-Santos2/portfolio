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
        <a
          href="https://github.com/luiz-santos2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir GitHub de Luiz Dev. em nova aba"
        >
          Luiz Dev.
        </a>
      </h1>
      <nav aria-label="Navegação principal">
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
