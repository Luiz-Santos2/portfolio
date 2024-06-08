import styles from './footer.module.css'
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.footerItems}>
        <a href="https://github.com/luiz-santos2" className={styles.contact}>
          <AiFillGithub size={42} className={styles.githubIcon} /> My Github!
        </a>
        <a href="https://linkedin.com/in/luiz-clovis-dos-santos-matias-73a69a271/" className={styles.contact}>
          <AiOutlineLinkedin size={42} className={styles.linkedinIcon} /> My Linkedin!
        </a>
        <a href="mailto:luizclovis2014@gmail.com" className={styles.contact}>
          <FiMail size={32} /> luizclovis2014@gmail.com
        </a>
      </div>
    </footer>
  )
}
