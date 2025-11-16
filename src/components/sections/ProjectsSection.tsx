'use client';
import React, { memo } from 'react';
import { AiFillChrome, AiFillGithub } from 'react-icons/ai';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import OptimizedImage from '@/components/common/OptimizedImage';
import styles from '../../app/page.module.css';

const ProjectItem = memo(({ project }: { project: any }) => {
  const { translate } = useLanguage();

  return (
    <li key={project.id}>
      <div className={styles.project}>
        <p className={styles.projectTitle}>{project.Title}</p>
        <p className={styles.projectDesc}>{project.Description}</p>
        <a
          href={project.RepositoryURL}
          className={styles.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir repositório no GitHub em nova aba"
        >
          <AiFillGithub size={17} className={styles.githubIcon} /> {translate('githubRepo')}
        </a>
        {project.ProjectURL && (
          <a
            href={project.ProjectURL}
            className={styles.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir projeto em nova aba"
          >
            <AiFillChrome size={17} className={styles.githubIcon} /> {translate('webAccess')}
          </a>
        )}
        <OptimizedImage 
          className={styles.tecIcons} 
          src={`https://skillicons.dev/icons?i=${project.SkillsIcons}`} 
          alt="Tecs." 
        />
        <p className={styles.projectDesc}>{project.Tags}</p>
      </div>
    </li>
  );
});

ProjectItem.displayName = 'ProjectItem';

const ProjectsSection = memo(() => {
  const { translate } = useLanguage();
  const { projects } = usePortfolioData();

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle} id="projects">
        <a href="#projects">{translate('projects')}</a>
      </h3>
      <ul className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
