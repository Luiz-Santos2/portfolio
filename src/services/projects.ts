export declare interface Project {
    id: number,
    Title: string,
    Description: string,
    RepositoryURL: string,
    ProjectURL?: string,
    Tags: Array<string>,
    SkillsIcons: string
}


const Projects: Array<Project> = [
    {
        id: 1,
        Title: "My pregnancy",
        Description: "Informative application about pregnancy, childbirth and postpartum.",
        RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
        ProjectURL: "https://expo.dev/preview/update?message=Realizado%20ajuste%20em%20todo%20o%20app%20e%20retirado%20o%20build%20do%20github%20actions&updateRuntimeVersion=1.0.0&createdAt=2024-06-01T01%3A04%3A24.744Z&slug=exp&projectId=a8cd90a2-b424-415a-bab0-e60a456b8363&group=5f531c2a-bc70-4225-9d1a-a66fa729a513",
        Tags: ["#React Native ", "#Typescript ", "#Expo ", "#GitHubActions "],
        SkillsIcons: "react,ts,githubactions"
    },
    {
        id: 2,
        Title: "Manager my pregnancy",
        Description: "manager responsible for handling data in the my pregnancy application.",
        RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
        ProjectURL: "https://gerenciador-meu-parto.vercel.app/",
        Tags: ["#Nextjs ", "#Typescript ", "#GitHubActions ", "#Vercel "],
        SkillsIcons: "nextjs,ts,githubactions,vercel"
    },
    {
        id: 3,
        Title: "Portfolio",
        Description: "Professional presentation portfolio",
        RepositoryURL: "https://github.com/Luiz-Santos2/portfolio",
        ProjectURL: "https://portfolio-luiz-clovis.vercel.app/",
        Tags: ["#Nextjs ", "#Typescript ", "#GitHubActions ", "#Vercel "],
        SkillsIcons: "nextjs,ts,githubactions,vercel"
    },
    {
        id: 4,
        Title: "Forest Equipment",
        Description: "The frontend application collects data from forestry equipment, recording its position and status history (Operating, Stopped or Under Maintenance).",
        RepositoryURL: "https://github.com/Luiz-Santos2/forest-equipment",
        ProjectURL: "https://forest-equipment.vercel.app/",
        Tags: ["#Reactjs ", "#Typescript ", "#GitHubActions ", "#Vercel "],
        SkillsIcons: "nextjs,ts,githubactions,vercel"
    },
    {
        id: 5,
        Title: "API REST",
        Description: "Course on Developing a REST API from Absolute Zero, Covering All Levels of RESTful Maturity, and Deployment on Azure + React JS",
        RepositoryURL: "https://github.com/Luiz-Santos2/RestWithASP-NET5Udemy",
        //ProjectURL: "https://api-rest-luiz-clovis.vercel.app/",
        Tags: ["#Csharp ", "#.Net ", "#EntityFramework "],
        SkillsIcons: "cs,dotnet"
    }
 
]

export default Projects
