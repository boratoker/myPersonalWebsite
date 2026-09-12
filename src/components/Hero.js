import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Bora Toker.</h1>
        <h2 className={styles.subtitle}>I build things for the web & beyond.</h2>
        <p className={styles.description}>
          I'm a 4th-year Computer Engineering student at Koç University. 
          I specialize in building exceptional digital experiences, exploring artificial intelligence, 
          and turning complex problems into elegant solutions.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary">Check out my projects!</a>
          <a href="/cv" className="btn btn-secondary">Resume</a>
        </div>
      </div>
    </section>
  );
}
