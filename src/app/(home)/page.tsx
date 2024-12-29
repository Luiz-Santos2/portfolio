'use client';
import styles from '../page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { AiFillChrome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Projects, { Project } from '@/services/projects'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.presentation} id="about">
          <div className={styles.myInfo}>
            <h2>I'm <span><a href='https://github.com/luiz-santos2'>Luiz Clovis</a></span></h2>
            <p> Welcome to my online portfolio! I'm Luiz Clovis, a front-end developer passionate about web and mobile development. <br />Over the years, I have dedicated myself to transforming creative ideas into practical and innovative solutions, <br />always focusing on excellence and customer satisfaction.<br /> I am a Brazilian student and a Front-end developer.</p>
            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <a href="https://github.com/luiz-santos2">
                    <AiFillGithub size={42} className={styles.githubIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/luiz-clovis-dos-santos-matias-73a69a271/">
                    <AiFillLinkedin size={42} className={styles.linkedinIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="skills"><a href="https://github.com/Furyforev3r#%EF%B8%8F-skills">My skills</a></h3>
          <ul className={styles.skillsContainer}>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Front-end</p>
              <div>
                <p className={styles.skills}>HTML, JavaScript, React, Next.js, Angular, Node.js, TypeScript, CSS, Styled Components, Tailwind CSS, Selenium.</p>
                <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,angular,nodejs,typescript,tailwind,styledcomponents,selenium," alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Back-end</p>
              <div>
                <p className={styles.skills}>C#, .NET.</p>
                <img src="https://skillicons.dev/icons?i=cs,dotnet" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>DataBases</p>
              <div>
                <p className={styles.skills}>Firebase, PostgreSQL, SQL Server, MongoDB, MySQL.</p>
                <img src="https://skillicons.dev/icons?i=firebase,postgresql,mongodb,mysql" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Mobile</p>
              <div>
                <p className={styles.skills}>React Native, Expo.</p>
                <img src="https://skillicons.dev/icons?i=react" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Tools</p>
              <div>
                <p className={styles.skills}>Postman, Vercel, Git, GitHub, GitLab, GitHub Actions, Bash, Powershell, Visual Studio Code, Visual Studio, Docker, Discord.</p>
                <img src="https://skillicons.dev/icons?i=postman,vercel,git,github,gitlab,githubactions,bash,powershell,vscode,visualstudio,docker,discord" alt="Skills Image." />
              </div>
            </li>
          </ul>
        </section>
        <section className={`${styles.section} ${styles.experienceSection}`}>
          <ul className={styles.experienceContainer}>
            <li className={styles.experience}>
              <div className={styles.separator} />
              <div className={styles.experienceContent}>
                <div className={styles.experienceItem}>
                  <h1>Developer Full Stack</h1>
                  <p>As a developer, I had the opportunity to design and build a project from the ground up, covering every stage from concept to final application. This included creating an informative application focused on pregnancy, childbirth, and postpartum, as well as developing a management system responsible for handling and processing the data.</p>
                </div>
                <p className={styles.experienceDate}>2024 - 2024</p>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.separator} />
              <div className={styles.experienceContent}>
                <div className={styles.experienceItem}>
                  <h1>Developer Front-end</h1>
                  <p>I am currently developing mobile applications using React Native and TypeScript. By combining the efficiency of React Native for cross-platform development with the robustness of TypeScript for safer and more scalable code, I strive to deliver modern and functional solutions.
                  <br />
                  <br />
                    My focus is on creating intuitive user interfaces and implementing features that provide the best user experience while consistently applying development best practices.</p>
                </div>
                <p className={styles.experienceDate}>2024 - Undetermined</p>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.separator} />
              <div className={styles.experienceContent}>
                <div className={styles.experienceItem}>
                  <h1>Developer Full Stack</h1>
                  <p>Currently, I work with Angular on the frontend, developing responsive and user-friendly interfaces, and C# on the backend, creating robust and efficient systems to support modern web applications.</p>
                </div>
                <p className={styles.experienceDate}>2024 - Undetermined</p>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="projects"><a href="https://github.com/Luiz-Santos2?tab=repositories">My Projects</a></h3>
          <ul className={styles.projectsContainer}>
            {
              Projects.map((project: Project) => (
                <li key={project.id}>
                  <div className={styles.project}>
                    <p className={styles.projectTitle}>{project.Title}</p>
                    <p className={styles.projectDesc}>{project.Description}</p>
                    <a href={project.RepositoryURL} className={styles.githubRepo}>
                      <AiFillGithub size={20} className={styles.githubIcon} /> Github repository!
                    </a>
                    <a href={project.ProjectURL} className={styles.githubRepo}>
                      <AiFillChrome size={20} className={styles.githubIcon} /> Acesso Web!
                    </a>
                    <div>
                      <img className={styles.tecIcons} src={`https://skillicons.dev/icons?i=${project.SkillsIcons}`} alt="Tecs." />
                    </div>
                    <p className={styles.projectDesc}>{project.Tags}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
