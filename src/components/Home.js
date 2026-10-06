function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Mohammed Chihab</span>
        </h1>

        <h2>Full-Stack Developer</h2>

        <p className="home-description">
          I build modern websites and web applications using
          React, JavaScript, PHP and MySQL.
        </p>

        <div className="home-buttons">
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="home-card">
        <div className="code-window">
          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code">
            <p><span className="purple">const</span> developer = {"{"}</p>
            <p>&nbsp;&nbsp;name: <span className="green">"Mohammed Chihab"</span>,</p>
            <p>&nbsp;&nbsp;role: <span className="green">"Full-Stack Developer"</span>,</p>
            <p>&nbsp;&nbsp;skills: [<span className="green">"React", "PHP", "MySQL"</span>]</p>
            <p>{"}"};</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;