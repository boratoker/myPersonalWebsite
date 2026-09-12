import styles from './About.module.css';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className={`section container ${styles.about}`}>
      <FadeIn>
        <h2 className="section-title"><span>01.</span> About Me</h2>
      </FadeIn>
      
      <div className={styles.content}>
        <FadeIn delay={0.2} direction="right">
          <div className={styles.text}>
            <p>
              Hello! My name is Bora and I enjoy creating things that live on the internet. 
              My interest in software engineering started back in high school when I decided to 
              build a simple script to automate my daily tasks.
            </p>
            <p>
              Fast-forward to today, I'm a senior at <strong>Koç University</strong> studying 
              Computer Engineering. My main focus these days is building accessible, inclusive 
              products and digital experiences, as well as diving deep into Machine Learning and scalable backend systems.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={styles.skills}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React & Next.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL & NoSQL</li>
            </ul>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="left">
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              {/* Placeholder for Profile Picture */}
              <div className={styles.placeholderImage}>BT</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
