export declare interface Project {
    id: number,
    Title: string,
    Description: string,
    RepositoryURL: string,
    ProjectURL: string,
    Tags: Array<string>,
    SkillsIcons: string
}


const Projects: Array<Project> = [
    {
        id: 1,
        Title: "My pregnancy",
        Description: "Informative application about pregnancy, childbirth and postpartum.",
        RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
        ProjectURL: "",
        Tags: ["#React Native ", "#Typescript ", "#Expo ", "#GitHubActions "],
        SkillsIcons: "react,ts,githubactions"
    },
    {
        id: 2,
        Title: "Manager my pregnancy",
        Description: "manager responsible for handling data in the my pregnancy application.",
        RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
        ProjectURL: "https://luiz-santos2.github.io/gerenciador-meu-parto/",
        Tags: ["#Nextjs ", "#Typescript ", "#GitHubActions "],
        SkillsIcons: "nextjs,ts,githubactions"
    },
    {
        id: 3,
        Title: "Portfolio",
        Description: "Professional presentation portfolio",
        RepositoryURL: "https://github.com/Luiz-Santos2/portfolio",
        ProjectURL: "https://portfolio-luiz-clovis.vercel.app/",
        Tags: ["#Nextjs ", "#Typescript ", "#GitHubActions "],
        SkillsIcons: "nextjs,ts,githubactions"
    },
 
]

export default Projects
