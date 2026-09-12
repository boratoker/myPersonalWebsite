import styles from './Experience.module.css';

const jobs = [
  {
    company: 'Koç University',
    role: 'Undergraduate Teaching Assistant',
    range: 'Sep 2024 - Present',
    details: [
      'Assisted in teaching fundamental computer science courses to 100+ students.',
      'Conducted weekly office hours to help students debug their code and understand core concepts.',
      'Graded assignments and provided constructive feedback to improve student performance.'
    ]
  },
  {
    company: 'Tech Startup (Example)',
    role: 'Software Engineering Intern',
    range: 'Jun 2023 - Aug 2023',
    details: [
      'Developed and shipped a new dashboard feature using React and Node.js.',
      'Collaborated with the design team to ensure responsive and accessible UI components.',
      'Optimized backend API endpoints, reducing load times by 20%.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`section container ${styles.experience}`}>
      <h2 className="section-title"><span>03.</span> Where I've Worked</h2>
      
      <div className={`glass-panel ${styles.timeline}`}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.job}>
            <div className={styles.jobHeader}>
              <h3 className={styles.role}>
                {job.role} <span className={styles.company}>@ {job.company}</span>
              </h3>
              <span className={styles.range}>{job.range}</span>
            </div>
            <ul className={styles.detailsList}>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
