import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import styles from './footer.module.css'
import { translations } from '../translate/translations';

interface FooterProps {
  language: 'pt' | 'en';
}

export default function Footer({ language }: FooterProps) {

  const translate = (key: keyof typeof translations['pt']) => {
      return translations[language][key];
    };
  return (
    <footer className={styles.footer} id="contact">
      <h3 className={styles.footerTitle} id="projects"><a href="#contact">{translate('contact')}</a></h3>
      <div className={styles.footerItems}>
        <a 
          href="https://linkedin.com/in/luiz-clovis-dos-santos-matias-73a69a271/" 
          className={styles.contact} 
          title="Veja meu perfil no LinkedIn">
          <AiOutlineLinkedin size={42} className={styles.linkedinIcon} />
          <span className={styles.contactText}>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/luiz-santos2" 
          className={styles.contact} 
          title="Veja meus projetos no GitHub">
          <AiFillGithub size={42} className={styles.githubIcon} />
          <span className={styles.contactText}>GitHub</span>
        </a>
        <a 
          href="mailto:luizclovis2014@gmail.com" 
          className={styles.contact} 
          title="Envie-me um e-mail">
          <FiMail size={32} />
          <span className={styles.contactText}>E-mail</span>
        </a>
      </div>
        <h3 className={styles.footerCopyright} >© 2023 Luiz Dev.</h3>
    </footer>
  );
}
