import styles from './Experience.module.css';
import FadeIn from './FadeIn';
import SpotlightCard from './SpotlightCard';

const jobs = [
  {
    type: 'internship',
    company: 'Tech Startup (Example)',
    role: 'Software Engineering Intern',
    range: 'Jun 2023 - Aug 2023',
    details: [
      'Developed and shipped a new dashboard feature using React and Node.js.',
      'Collaborated with the design team to ensure responsive and accessible UI components.',
      'Optimized backend API endpoints, reducing load times by 20%.'
    ]
  },
  {
    type: 'volunteering',
    company: 'Koç University',
    role: 'Undergraduate Teaching Assistant',
    range: 'Sep 2024 - Present',
    details: [
      'Assisted in teaching fundamental computer science courses to 100+ students.',
      'Conducted weekly office hours to help students debug their code and understand core concepts.',
      'Graded assignments and provided constructive feedback.'
    ]
  },
  {
    type: 'club',
    company: 'KU Computer Science Club',
    role: 'Event Coordinator',
    range: 'Sep 2022 - Jun 2023',
    details: [
      'Organized weekly coding workshops and annual hackathons for 200+ members.',
      'Managed technical resources and mentored junior students in web development.',
    ]
  },
  {
    type: 'prize',
    company: 'Hackathon 2023',
    role: '1st Place Winner',
    range: 'Oct 2023',
    details: [
      'Developed an AI-powered accessibility tool in 48 hours.',
      'Awarded first place among 50+ participating teams.'
    ]
  }
];

const typeLabels = {
  internship: 'INTERNSHIP',
  volunteering: 'VOLUNTEERING',
  club: 'CLUB ACTIVITY',
  prize: 'PRIZE / AWARD'
};

const spotlightColors = {
  internship: 'rgba(106, 186, 251, 0.15)',
  volunteering: 'rgba(255, 170, 51, 0.15)',
  club: 'rgba(236, 70, 90, 0.15)',
  prize: 'rgba(119, 255, 51, 0.15)'
};

export default function Experience() {
  return (
    <section id="experience" className={`section container ${styles.experience}`}>
      <FadeIn>
        <h2 className="section-title"><span>03.</span> My Experiences</h2>
      </FadeIn>

      <div className={styles.timeline}>
        {jobs.map((job, index) => (
          <FadeIn key={index} delay={index * 0.15}>
            <SpotlightCard 
              className={`${styles.job} ${styles[job.type]}`}
              spotlightColor={spotlightColors[job.type]}
            >
              <div className={styles.jobContent}>
                <div className={styles.jobTypeBadge}>
                  {typeLabels[job.type]}
                </div>
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
              <div className={styles.jobLogo}>
                <span>LOGO</span>
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
