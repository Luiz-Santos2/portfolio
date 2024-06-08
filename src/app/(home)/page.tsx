'use client';
import styles from '../page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Projects, { Project } from '@/services/projects'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.presentation} id="about">
          <div className={styles.myInfo}>
            <h2>I'm <span><a href='https://github.com/luiz-santos2'>Luiz Clovis</a></span></h2>
            <p>Hi! My internet alias is FuryForever, but my real name is Messias. <br /> I am a Brazilian student and a Full Stack developer.</p>
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
              <p className={styles.skillTitle}>Back-end</p>
              <div>
                <p className={styles.skills}>JS/Node, TypeScript, Python, PHP, Java, C#, Rust, Go, ExpressJS, FastAPI, NextJS, NestJS.</p>
                <img src="https://skillicons.dev/icons?i=js,nodejs,typescript,python,php,java,cs,rust,go,expressjs,fastapi,nextjs,nestjs" />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Front-end</p>
              <div>
                <p className={styles.skills}>HTML/CSS, ReactJS, NextJS, VueJS, NuxtJS, TypeScript, Tailwind CSS, Vite, Styled Components, Sass/Scss, jQuery, Tauri.</p>
                <img src="https://skillicons.dev/icons?i=html,css,react,nextjs,vuejs,nuxtjs,typescript,tailwind,vite,styledcomponents,sass,scss,jquery,tauri" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>DataBases</p>
              <div>
                <p className={styles.skills}>Firebase, MongoDB, SQL/NoSQL.</p>
                <img src="https://skillicons.dev/icons?i=firebase,mongodb,mysql,postgresql,sqlite" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Android</p>
              <div>
                <p className={styles.skills}>React Native, Kotlin/Java/Android Studio.</p>
                <img src="https://skillicons.dev/icons?i=react,kotlin,java,androidstudio" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>GameDev</p>
              <div>
                <p className={styles.skills}>Construct 3, Unity2D/3D, Godot.</p>
                <img src="https://skillicons.dev/icons?i=unity,godot" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Tools</p>
              <div>
                <p className={styles.skills}>Vercel, Git/GitHub/GitLab, Bash, Powershell, Visual Studio Code/Visual Studio, Discord, Gradle, (JetBrains) Idea, Linux, Markdown, Photoshop, Replit, SublimeText.</p>
                <img src="https://skillicons.dev/icons?i=vercel,git,github,gitlab,bash,powershell,vscode,visualstudio,discord,gradle,idea,linux,md,ps,replit" alt="Skills Image." />
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
                  <h1>Freelancer Developer: Full Stack</h1>
                  <p>As a freelance full stack developer, I've had the opportunity to work on a variety of projects for diverse clients, including numerous ventures abroad, with a significant focus on clients from Canada. From building responsive front-end interfaces to developing robust back-end solutions, my role encompasses the entire development lifecycle. With a focus on delivering high-quality, scalable code, I thrive in remote work environments, collaborating closely with clients to understand their needs and exceed their expectations. I pride myself on delivering top-notch results while fostering strong client relationships, ensuring seamless collaboration regardless of distance.</p>
                </div>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.separator} />
              <div className={styles.experienceContent}>
                <div className={styles.experienceItem}>
                  <h1>Brazil Mobile School: Monitor/Trainee</h1>
                  <p>As a student monitor at Brazil Mobile School, I took on the responsibility of assisting the school's students and facilitating learning across various concepts and technologies. From code reviews to guiding practical projects, I was there to provide technical support and encourage the progress of each student. My role also involved collaborating with instructors to ensure an effective and rewarding learning experience for all participants.</p>
                </div>
                <p className={styles.experienceDate}>2021-2022</p>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.separator} />
              <div className={styles.experienceContent}>
                <div className={styles.experienceItem}>
                  <h1>Brazil Mobile School: Intern</h1>
                  <p>As a full stack intern at Brazil Mobile School, I've had the invaluable opportunity to immerse myself in real-world development projects while refining my skills under expert guidance. From assisting in front-end development tasks to contributing to back-end functionalities, my role involves active participation in the entire software development process. Collaborating closely with senior developers and mentors, I've gained hands-on experience in applying theoretical knowledge to practical scenarios, ensuring my growth as a well-rounded professional in the field.</p>
                </div>
                <p className={styles.experienceDate}>2022-2024</p>
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
                    <div>
                      <img className={styles.tecIcons} src={`https://skillicons.dev/icons?i=${project.SkillsIcons}`} alt="Tecs." />
                    </div>
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
