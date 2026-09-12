import styles from './Projects.module.css';

const projectList = [
  {
    title: 'Koç Uni AI Assistant',
    description: 'An AI-powered academic assistant for Koç University students to navigate course syllabi, plan schedules, and answer university-related queries.',
    tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Scalable E-Commerce Backend',
    description: 'A microservices-based backend for an e-commerce platform handling user authentication, inventory management, and payment processing.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal website built with Next.js and custom CSS, featuring a modern glassmorphism design and optimized for performance.',
    tech: ['Next.js', 'React', 'CSS Modules'],
    github: 'https://github.com/boratoker',
    demo: '/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section container ${styles.projects}`}>
      <h2 className="section-title"><span>02.</span> Some Things I've Built</h2>
      
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className={`glass-panel ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.folder}>📁</div>
              <div className={styles.links}>
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GH</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">↗</a>}
              </div>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
