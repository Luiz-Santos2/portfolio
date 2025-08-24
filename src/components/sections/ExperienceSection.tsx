'use client';
import React, { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import styles from '../../app/page.module.css';

const ExperienceItem = memo(({ experience }: { experience: any }) => (
  <li key={experience.id} className={styles.experience}>
    <div className={styles.separator} />
    <div className={styles.experienceContent}>
      <div className={styles.experienceItem}>
        <h1>{experience.title}</h1>
        <p>{experience.description}</p>
      </div>
      <p className={styles.experienceDate}>{experience.date}</p>
    </div>
  </li>
));

ExperienceItem.displayName = 'ExperienceItem';

const ExperienceSection = memo(() => {
  const { translate } = useLanguage();
  const { experience } = usePortfolioData();

  return (
    <section className={`${styles.section} ${styles.experienceSection}`}>
      <h3 className={styles.sectionTitle} id="experiences">
        <a href="#experiences">{translate('experiences')}</a>
      </h3>
      <ul className={styles.experienceContainer}>
        {experience.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </ul>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
