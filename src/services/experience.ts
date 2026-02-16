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
            description: "Projetei e construí aplicações do zero, cobrindo o ciclo completo de desenvolvimento. Desenvolvimento de aplicativo informativo especializado em gravidez, parto e pós-parto com interface intuitiva. Implementação de sistema de gerenciamento robusto com backend escalável. Aplicação de melhores práticas em arquitetura, código limpo e experiência do usuário.",
            date: "2024"
        },
        {
            id: 2,
            title: "Desenvolvedor Front-end",
            description: "Desenvolvimento de aplicativos móveis cross-platform com React Native e TypeScript. Criação de interfaces responsivas e intuitivas com foco em experiência do usuário. Implementação de padrões de código limpo, gestão de estado e otimização de performance. Integração com APIs RESTful e consumo eficiente de dados.",
            date: "2024 - Presente"
        },
        {
            id: 3,
            title: "Desenvolvedor Full Stack (JOYA Solutions)",
            description: "Desenvolvimento de aplicações escaláveis com C#, Angular, Node.js e SQL Server. Arquitetura e construção de soluções serverless com Azure Functions. Criação e manutenção de APIs RESTful robustas e de alto desempenho. Implementação de ambientes padronizados com Docker e Git. Otimização de consultas SQL e melhorias estratégicas de arquitetura e performance de sistemas. Participação em sprints ágeis com entrega contínua de valor.",
            date: "Setembro 2024 - Presente"
        }
    ],
    en: [
        {
            id: 1,
            title: "Full Stack Developer",
            description: "Designed and built applications from the ground up, covering the complete development lifecycle. Developed an informative app specialized in pregnancy, childbirth, and postpartum care with intuitive interface. Implemented robust management system with scalable backend. Applied best practices in architecture, clean code, and user experience.",
            date: "2024"
        },
        {
            id: 2,
            title: "Front-end Developer",
            description: "Development of cross-platform mobile applications with React Native and TypeScript. Creation of responsive and intuitive interfaces with focus on user experience. Implementation of clean code patterns, state management, and performance optimization. Integration with RESTful APIs and efficient data consumption.",
            date: "2024 - Present"
        },
        {
            id: 3,
            title: "Full Stack Developer (JOYA Solutions)",
            description: "Development of scalable applications with C#, Angular, Node.js, and SQL Server. Architecture and construction of serverless solutions with Azure Functions. Creation and maintenance of robust and high-performance RESTful APIs. Implementation of standardized environments with Docker and Git. SQL query optimization and strategic improvements in system architecture and performance. Participation in agile sprints with continuous value delivery.",
            date: "September 2024 - Present"
        }
    ]
};