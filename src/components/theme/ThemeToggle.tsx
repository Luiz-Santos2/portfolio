'use client';
import React, { useState, useEffect, memo, useCallback } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  }, [isDarkMode]);

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
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
