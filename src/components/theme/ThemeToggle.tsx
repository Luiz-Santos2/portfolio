// ThemeToggle.tsx
'use client'
import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      setIsDarkMode(false); // Definindo o tema padrão como claro
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Alternar tema" 
      className={`${styles.themeToggleButton} ${isDarkMode ? styles.darkButton : styles.lightButton}`}
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
}
