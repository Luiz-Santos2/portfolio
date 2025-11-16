'use client';
import React, { memo } from 'react';
import styles from './LanguageToggle.module.css';
import Flag from 'react-world-flags';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = memo(() => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
  };

  const isPortuguese = language === 'pt';
  const nextLabel = isPortuguese ? 'Alterar idioma para inglês' : 'Change language to Portuguese';

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageToggleButton}
      aria-label={nextLabel}
      aria-pressed={isPortuguese ? false : true}
      title={nextLabel}
    >
      <Flag code={isPortuguese ? 'BR' : 'US'} className={styles.img} />
    </button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;
