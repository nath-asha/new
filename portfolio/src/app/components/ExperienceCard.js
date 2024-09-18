import styles from '../styles/Experience.module.css';

export default function ExperienceCard({ exp }) {
  return (
    <div className={styles.card}>
      <h2>{exp.company}</h2>
      <p>{exp.role}</p>
      <p>{exp.duration}</p>
      <p>{exp.description}</p>
    </div>
  );
}
