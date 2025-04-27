'use client';
import { useState, useEffect } from 'react';
import styles from './LanguageToggle.module.css';
import Flag from 'react-world-flags';

export default function LanguageToggle({ setLanguage }: { setLanguage: React.Dispatch<React.SetStateAction<'pt' | 'en'>> }) {
  const [language, setLocalLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'pt' | 'en';
    if (savedLanguage) {
      setLocalLanguage(savedLanguage);
      setLanguage(savedLanguage); // Sincroniza o idioma global
    }
  }, [setLanguage]);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLocalLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button onClick={toggleLanguage} className={styles.languageToggleButton}>
      <Flag code={language === 'pt' ? 'BR' : 'US'} className={styles.img} />
    </button>
  );
}
