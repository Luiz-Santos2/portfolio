'use client';
import React, { memo } from 'react';
import styles from '../page.module.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ThemeToggle from '@/components/theme/ThemeToggle';
import LanguageToggle from '@/components/translate/LanguageToggle';
import PresentationSection from '@/components/sections/PresentationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useInitialLoad } from '@/hooks/useInitialLoad';

const Home = memo(() => {
  const isLoaded = useInitialLoad();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <ThemeToggle />
      <LanguageToggle />
      <main className={styles.main}>
        <PresentationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
});

Home.displayName = 'Home';

export default Home;
