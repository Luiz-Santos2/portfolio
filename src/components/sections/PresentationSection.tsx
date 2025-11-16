'use client';
import React, { memo } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../../app/page.module.css';

const PresentationSection = memo(() => {
  const { translate } = useLanguage();

  return (
    <section className={styles.presentation} id="about">
      <div className={styles.myInfo}>
        <h2>
          {translate('iam')}
          <span>
            <a
              href="https://github.com/luiz-santos2"
              title="Ver GitHub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub em nova aba"
            >
              Luiz Clovis
            </a>
          </span>
        </h2>
        <p>{translate('description')}</p>
        <div className={styles.socialLinks}>
          <ul>
            <li>
              <a
                href="https://github.com/luiz-santos2"
                title="Ver GitHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub em nova aba"
              >
                <AiFillGithub size={42} className={styles.githubIcon} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/luiz-clovis-dos-santos-matias-73a69a271/"
                title="Ver LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir LinkedIn em nova aba"
              >
                <AiFillLinkedin size={42} className={styles.linkedinIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

PresentationSection.displayName = 'PresentationSection';

export default PresentationSection;
