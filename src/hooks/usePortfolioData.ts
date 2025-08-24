import { useMemo } from 'react';
import { projects } from '@/services/projects';
import { experience } from '@/services/experience';
import { skills } from '@/services/skill';
import { useLanguage } from '@/contexts/LanguageContext';

export function usePortfolioData() {
  const { language } = useLanguage();

  const portfolioData = useMemo(() => ({
    projects: projects[language],
    experience: experience[language],
    skills: skills[language]
  }), [language]);

  return portfolioData;
}
