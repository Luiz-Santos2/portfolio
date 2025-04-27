export type Translations = {
  pt: {
    description: string;
    iam: string;
    about: string;
    skills: string;
    experiences: string;
    projects: string;
    contact: string;
  };
  en: {
    about: string;
    skills: string;
    experiences: string;
    projects: string;
    contact: string;
    iam: string;
    description: string;
  };
};

export const translations: Translations = {
  pt: {
    about: "Sobre",
    skills: "Habilidades",
    experiences: "Experiências",
    projects: "Projetos",
    contact: "Contatos",
    iam: "Eu sou",
    description: "Bem-vindo ao meu portfólio online! Sou Luiz Clovis, um desenvolvedor front-end apaixonado por desenvolvimento web e mobile. Ao longo dos anos, tenho me dedicado a transformar ideias criativas em soluções práticas e inovadoras, sempre com foco na excelência e na satisfação do cliente. Sou um estudante brasileiro e desenvolvedor front-end.",
  },
  en: {
    about: "About",
    skills: "Skills",
    experiences: "Experiences",
    projects: "Projects",
    contact: "Contacts",
    iam: "I'm",
    description: "Welcome to my online portfolio! I am Luiz Clovis, a front-end developer passionate about web and mobile development. Over the years, I have dedicated myself to transforming creative ideas into practical and innovative solutions, always focusing on excellence and customer satisfaction. I am a Brazilian student and a Front-end developer.",
  }
};
