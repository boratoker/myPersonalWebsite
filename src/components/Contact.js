import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section container ${styles.contact}`}>
      <h2 className="section-title" style={{ textAlign: 'center' }}>
        <span>04.</span> What's Next?
      </h2>
      <h3 className={styles.title}>Get In Touch</h3>
      <p className={styles.description}>
        Although I'm currently focused on finishing my degree, my inbox is always open. 
        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:btoker@ku.edu.tr" className={`btn btn-primary ${styles.emailBtn}`}>
        Say Hello
      </a>
      
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <a href="/github" target="_blank" rel="noreferrer" className={`${styles.socialBtn} ${styles.github}`} aria-label="GitHub">
            <img src="/github_icon.png" alt="GitHub" className={styles.iconImg} />
          </a>
          <a href="/linkedin" target="_blank" rel="noreferrer" className={`${styles.socialBtn} ${styles.linkedin}`} aria-label="LinkedIn">
            <img src="/linkedin_icon.png" alt="LinkedIn" className={styles.iconImg} />
          </a>
          <a href="/instagram" target="_blank" rel="noreferrer" className={`${styles.socialBtn} ${styles.instagram}`} aria-label="Instagram">
            <img src="/instagram_icon.png" alt="Instagram" className={styles.iconImg} />
          </a>
          <a href="/spotify" target="_blank" rel="noreferrer" className={`${styles.socialBtn} ${styles.spotify}`} aria-label="Spotify">
            <img src="/spotify_icon.png" alt="Spotify" className={styles.iconImg} />
          </a>
        </div>
        <p className={styles.copyright}>
          Designed & Built by Bora Toker<br/>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()}</span>
        </p>
      </footer>
    </section>
  );
}
