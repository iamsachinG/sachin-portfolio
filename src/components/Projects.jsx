function Projects() {
    const projects = [
  {
    title: "Trimbak Organic",
    description:
      "Business website developed for an organic products brand with responsive design and modern UI.",
    github: "https://github.com/iamsachinG/Trimbak_Organic",
    demo: "https://iamsaching.github.io/Trimbak_Organic/",
    tech: ["React", "CSS", "JavaScript"]
  },

  {
    title: "The Leaf",
    description:
      "Modern web application focused on clean UI and responsive design.",
    github: "https://github.com/iamsachinG/The-Leaf",
    demo: "https://iamsaching.github.io/The-Leaf/",
    tech: ["React", "CSS"]
  },

  {
    title: "Weather App",
    description:
      "Weather forecasting application using external APIs to display real-time weather information.",
    github: "https://github.com/iamsachinG/Weather",
    demo: "https://iamsaching.github.io/Weather/",
    tech: ["React", "Firebase"]
  }
];

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <a href={project.github}>
                                <button>GitHub</button>
                            </a>

                            <a href={project.demo}>
                                <button>Live Demo</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;