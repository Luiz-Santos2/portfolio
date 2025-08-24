'use client';
import React, { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import OptimizedImage from '@/components/common/OptimizedImage';
import styles from '../../app/page.module.css';

const SkillItem = memo(({ skill }: { skill: any }) => (
  <li key={skill.id} className={styles.skill}>
    <p className={styles.skillTitle}>{skill.title}</p>
    <div>
      <p className={styles.skills}>{skill.skills}</p>
      <OptimizedImage 
        src={`https://skillicons.dev/icons?i=${skill.icons}`} 
        alt="Skills Image." 
      />
    </div>
  </li>
));

SkillItem.displayName = 'SkillItem';

const SkillsSection = memo(() => {
  const { translate } = useLanguage();
  const { skills } = usePortfolioData();

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle} id="skills">
        <a href="#skills">{translate('skills')}</a>
      </h3>
      <ul className={styles.skillsContainer}>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
