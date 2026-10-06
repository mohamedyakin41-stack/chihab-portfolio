function About() {
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div>
          <h3>I'm a Full-Stack Developer</h3>

          <p>
            I'm passionate about web development and building modern
            web applications. I enjoy learning new technologies and
            improving my development skills.
          </p>

          <p>
            My main technologies are React, JavaScript, PHP and MySQL.
          </p>
        </div>

        <div className="about-info">
          <div>
            <strong>01</strong>
            <span>Developer</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Web Applications</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;