function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-title">
        <p>MY WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="project-card">
        <div className="project-image">
          <span>CHIHAB STORE</span>
        </div>

        <div className="project-info">
          <p className="project-number">01</p>

          <h3>Chihab Store</h3>

          <p>
            An e-commerce website built to manage products,
            shopping cart functionality and orders.
          </p>

          <div className="project-tech">
            <span>PHP</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/mohamedyakin41-stack/bjj-store-php" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://chihabstore.freehosting.dev" target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;