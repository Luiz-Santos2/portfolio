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
      // Respeita o prefer-color-scheme do usuário na primeira visita
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
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
      aria-pressed={isDarkMode}
      className={`${styles.themeToggleButton} ${isDarkMode ? styles.darkButton : styles.lightButton}`}
      title={isDarkMode ? 'Tema escuro ativo' : 'Tema claro ativo'}
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
