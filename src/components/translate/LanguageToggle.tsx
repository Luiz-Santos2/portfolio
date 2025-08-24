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

  return (
    <button onClick={toggleLanguage} className={styles.languageToggleButton}>
      <Flag code={language === 'pt' ? 'BR' : 'US'} className={styles.img} />
    </button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;
