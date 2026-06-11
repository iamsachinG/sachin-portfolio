function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",

    "Node.js",
    "Express.js",
    "REST API",
    "GraphQL",

    "MongoDB",
    "MySQL",

    "Git",
    "GitHub",
    "Postman",

    "Docker",
    "Kubernetes",

    "Python",
    "TensorFlow"
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;