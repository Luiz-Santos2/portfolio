import styles from './header.module.css';
import { translations } from '../translate/translations';

interface HeaderProps {
  language: 'pt' | 'en';
}

export default function Header({ language }: HeaderProps) {
  const translate = (key: keyof typeof translations['pt']) => {
    return translations[language][key];
  };

  return (
    <header className={styles.header}>
      <h1>
        <a href="https://github.com/luiz-santos2">Luiz Dev.</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about">{translate('about')}</a>
          </li>
          <li>
            <a href="#skills">{translate('skills')}</a>
          </li>
          <li>
            <a href="#experiences">{translate('experiences')}</a>
          </li>
          <li>
            <a href="#projects">{translate('projects')}</a>
          </li>
          <li>
            <a href="#contact">{translate('contact')}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
