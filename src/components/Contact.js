import styles from './Contact.module.css';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className={`section container ${styles.contact}`}>
      <FadeIn>
        <h2 className="section-title"><span>04.</span> What's Next?</h2>
        <h3 className={styles.title}>Get In Touch</h3>
        <p className={styles.description}>
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:boratoker@example.com" className={`btn btn-primary ${styles.emailBtn}`}>
          Say Hello
        </a>
      </FadeIn>
      
      <footer className={styles.footer}>
        <FadeIn delay={0.2} direction="none">
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
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </FadeIn>
      </footer>
    </section>
  );
}
