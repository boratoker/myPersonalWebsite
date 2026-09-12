import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li className={styles.navHome}><Link href="/">Home</Link></li>
          <li className={styles.navAbout}><Link href="#about">About</Link></li>
          <li className={styles.navProjects}><Link href="#projects">Projects</Link></li>
          <li className={styles.navExperience}><Link href="#experience">Experience</Link></li>
          <li className={styles.navContact}><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
