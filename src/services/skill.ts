export declare interface Skill {
    id: number;
    title: string;
    skills: string;
    icons: string;
  }

export declare interface SkillTranslations {
    pt: Array<Skill>;
    en: Array<Skill>;
}
  
export const skills: SkillTranslations = {
    pt: [
        {
            id: 1,
            title: "Front-end",
            skills: "HTML, JavaScript, React, Next.js, Angular, Node.js, TypeScript, CSS, Styled Components, Tailwind CSS, Selenium",
            icons: "html,css,js,react,nextjs,angular,nodejs,typescript,tailwind,styledcomponents,selenium"
        },
        {
            id: 2,
            title: "Back-end",
            skills: "C#, .NET",
            icons: "cs,dotnet"
        },
        {
            id: 3,
            title: "Bancos de Dados",
            skills: "Firebase, PostgreSQL, SQL Server, MongoDB, MySQL",
            icons: "firebase,postgresql,mongodb,mysql"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "react"
        },
        {
            id: 5,
            title: "Ferramentas",
            skills: "Android Studio, Postman, Vercel, Git, GitHub, GitLab, GitHub Actions, Bash, Powershell, Visual Studio Code, Visual Studio, Docker, Discord",
            icons: "androidstudio,postman,vercel,git,github,gitlab,githubactions,bash,powershell,vscode,visualstudio,docker,discord"
        }
    ],
    en: [
        {
            id: 1,
            title: "Front-end",
            skills: "HTML, JavaScript, React, Next.js, Angular, Node.js, TypeScript, CSS, Styled Components, Tailwind CSS, Selenium",
            icons: "html,css,js,react,nextjs,angular,nodejs,typescript,tailwind,styledcomponents,selenium"
        },
        {
            id: 2,
            title: "Back-end",
            skills: "C#, .NET",
            icons: "cs,dotnet"
        },
        {
            id: 3,
            title: "DataBases",
            skills: "Firebase, PostgreSQL, SQL Server, MongoDB, MySQL",
            icons: "firebase,postgresql,mongodb,mysql"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "react"
        },
        {
            id: 5,
            title: "Tools",
            skills: "Android Studio, Postman, Vercel, Git, GitHub, GitLab, GitHub Actions, Bash, Powershell, Visual Studio Code, Visual Studio, Docker, Discord",
            icons: "androidstudio,postman,vercel,git,github,gitlab,githubactions,bash,powershell,vscode,visualstudio,docker,discord"
        }
    ]
};