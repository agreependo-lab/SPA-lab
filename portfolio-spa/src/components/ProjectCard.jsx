function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
