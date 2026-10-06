function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "MySQL"
  ];

  return (
    <section id="skills" className="section">
      <div className="section-title">
        <p>MY TECHNOLOGIES</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;