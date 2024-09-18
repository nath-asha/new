import styles from '../styles/Projects.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img src={`/assets/images/${project.image}`} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
    </div>
  );
}
