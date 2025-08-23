export declare interface Experience {
    id: number;
    title: string;
    description: string;
    date: string;
  }

export declare interface ExperienceTranslations {
    pt: Array<Experience>;
    en: Array<Experience>;
}
  
export const experience: ExperienceTranslations = {
    pt: [
        {
            id: 1,
            title: "Desenvolvedor Full Stack",
            description: "Como desenvolvedor, tive a oportunidade de projetar e construir um projeto do zero, cobrindo todas as etapas desde o conceito até a aplicação final, incluindo a criação de um aplicativo informativo focado em gravidez, parto e pós-parto, bem como o desenvolvimento de um sistema de gerenciamento.",
            date: "2024 - 2024"
        },
        {
            id: 2,
            title: "Desenvolvedor Front-end",
            description: "Atualmente estou desenvolvendo aplicativos móveis com React Native e TypeScript, focando na criação de interfaces amigáveis ao usuário e melhores práticas.",
            date: "2024 - Indeterminado"
        },
        {
            id: 3,
            title: "Desenvolvedor Full Stack",
            description: "Trabalho com Angular no frontend e C# no backend, criando UIs responsivas e sistemas backend robustos.",
            date: "2024 - Indeterminado"
        }
    ],
    en: [
        {
            id: 1,
            title: "Developer Full Stack",
            description: "As a developer, I had the opportunity to design and build a project from the ground up, covering every stage from concept to final application, including creating an informative app focused on pregnancy, childbirth, and postpartum, as well as developing a management system.",
            date: "2024 - 2024"
        },
        {
            id: 2,
            title: "Developer Front-end",
            description: "I am currently developing mobile apps with React Native and TypeScript, focusing on creating user-friendly interfaces and best practices.",
            date: "2024 - Undetermined"
        },
        {
            id: 3,
            title: "Developer Full Stack",
            description: "I work with Angular on the frontend and C# on the backend, creating responsive UIs and robust backend systems.",
            date: "2024 - Undetermined"
        }
    ]
};