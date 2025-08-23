'use client';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AiFillChrome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Project, projects } from '@/services/projects';
import { Experience, experience } from '@/services/experience';
import { Skill, skills } from '@/services/skill';
import ThemeToggle from '@/components/theme/ThemeToggle';
import LanguageToggle from '@/components/translate/LanguageToggle';
import { translations } from '@/components/translate/translations';

export default function Home() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'pt' | 'en';
    setLanguage(savedLanguage || 'pt');
  }, []);

  const translate = (key: keyof (typeof translations)["pt"]) => translations[language][key];

  return (
    <>
      <Header language={language} />
      <ThemeToggle />
      <LanguageToggle setLanguage={setLanguage} />
      <main className={styles.main}>
        <section className={styles.presentation} id="about">
          <div className={styles.myInfo}>
            <h2>
              {translate('iam')} <span><a href="https://github.com/luiz-santos2">Luiz Clovis</a></span>
            </h2>
            <p>{translate('description')}</p>
            <div className={styles.socialLinks}>
              <ul>
                <li><a href="https://github.com/luiz-santos2"><AiFillGithub size={42} className={styles.githubIcon} /></a></li>
                <li><a href="https://linkedin.com/in/luiz-clovis-dos-santos-matias-73a69a271/"><AiFillLinkedin size={42} className={styles.linkedinIcon} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="skills"><a href="#skills">{translate('skills')}</a></h3>
          <ul className={styles.skillsContainer}>
            {skills[language].map((skill: Skill) => (
              <li key={skill.id} className={styles.skill}>
                <p className={styles.skillTitle}>{skill.title}</p>
                <div>
                  <p className={styles.skills}>{skill.skills}</p>
                  <img src={`https://skillicons.dev/icons?i=${skill.icons}`} alt="Skills Image." />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.section} ${styles.experienceSection}`}>
          <h3 className={styles.sectionTitle} id="experiences"><a href="#experiences">{translate('experiences')}</a></h3>
          <ul className={styles.experienceContainer}>
            {experience[language].map((exp: Experience) => (
              <li key={exp.id} className={styles.experience}>
                <div className={styles.separator} />
                <div className={styles.experienceContent}>
                  <div className={styles.experienceItem}>
                    <h1>{exp.title}</h1>
                    <p>{exp.description}</p>
                  </div>
                  <p className={styles.experienceDate}>{exp.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="projects"><a href="#projects">{translate('projects')}</a></h3>
          <ul className={styles.projectsContainer}>
            {projects[language].map((project: Project) => (
              <li key={project.id}>
                <div className={styles.project}>
                  <p className={styles.projectTitle}>{project.Title}</p>
                  <p className={styles.projectDesc}>{project.Description}</p>
                  <a href={project.RepositoryURL} className={styles.githubRepo}>
                    <AiFillGithub size={17} className={styles.githubIcon} /> {translate('githubRepo')}
                  </a>
                  {project.ProjectURL && (
                    <a href={project.ProjectURL} className={styles.githubRepo}>
                      <AiFillChrome size={17} className={styles.githubIcon} /> {translate('webAccess')}
                    </a>
                  )}
                  <img className={styles.tecIcons} src={`https://skillicons.dev/icons?i=${project.SkillsIcons}`} alt="Tecs." />
                  <p className={styles.projectDesc}>{project.Tags}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
