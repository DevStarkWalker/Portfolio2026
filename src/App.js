import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './App.css'; 
import pokemon from "./pokemon.png";


const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  useEffect(() => {
    // Cursor Effect
    const cursor = document.getElementById('cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.1;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="page-container">
      <div className="left-section">
        <div className="left-content">
          <div className="intro-text">
            <h1>Hello, I'm Dev</h1>
            <h2>A Software Engineer & Unity Developer.</h2>
          </div>
          <nav className="fixed-nav-links">
            <button
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About Me
            </button>
            <button
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </nav>
        </div>
        <div className="social-icons">
          <a href="https://github.com/devstarkwalker" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/devon-walker-7780a921a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="right-section">
        <div className="content-container">
          <section id="about" className="content-section">
            <p>
              I am a software engineer with experience in simulation, full-stack development, and interactive systems.
              My academic background in computer science and game studies provided a strong foundation in programming,
              system design, and problem solving, while my industry project work has expanded my skill set across modern development environments.
              I enjoy learning new technologies, building scalable solutions, and contributing to teams that value innovation and technical excellence.
            </p>
          </section>

          <section id="experience" className="content-section">
            <div className="job">
              <div className="job-dates">2024 - Present</div>
              <div className="job-title"> Senior Unity Software Developer </div>
              <p className="job-description">
                As a Senior Unity software developer at CACI, I play a pivotal role in applying object-oriented design principles and modular architecture while designing, extending, and maintaining a large C# codebase supporting configurable simulation scenarios and hardware-dependent deployments. I also play a huge role in the collaboration with designers, QA, and government stakeholders to translate requirements into technical solutions aligned with contract milestones.
              </p>
              <div className="job-tags">
                <span className="tag">C#</span>
                <span className="tag">Unity</span>
                <span className="tag">Plastic</span>
              </div>
            </div>
            <div className="job">
              <div className="job-dates">2021 - 2023</div>
              <div className="job-title">Undergrad & Graduate Research Assistant</div>
              <p className="job-description">
                Developed a high-quality, educational, virtual reality app for a local school, helping teach students about different careers in the maritime and shipbuilding industry. Worked with a small cross-functional team of 3D artists and animators to achieve deadlines while tackling systems and tools, leading development on the back end.
              </p>
              <div className="job-tags">
                <span className="tag">C#</span>
                <span className="tag">C++</span>
                <span className="tag">Unity</span>
                <span className="tag">Unreal</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
            <div className="job">
              <div className="job-dates">2021 - 2023</div>
              <div className="job-title">Student at Old Dominion University</div>
              <p className="job-description">
                I specialized in game design and development with a focus on game mechanics, interactive media, and immersive technology.
                 Throughout my studies, I gained hands-on experience with real-time engines, prototyping workflows,
                  and production tools used to develop engaging digital experiences. This specialization allowed me to explore
                   user experience design, simulation concepts, and the technical implementation of interactive systems,
                    reinforcing my interest in building software that blends usability, performance, and innovation.
              </p>
              <div className="job-tags">
                <span className="tag">C++</span>
                <span className="tag">C#</span>
                <span className="tag">GitHub</span>
                <span className="tag">Java</span>
              </div>
            </div>
            <div className="job">
              <div className="job-dates">2020 - 2021</div>
              <div className="job-title">Student at Tidewater Community College</div>
              <p className="job-description">
                I developed a solid foundation in programming, algorithms, and software engineering principles,
                 gaining essential skills in problem solving and computational thinking.
                  My coursework and project work emphasized system design, data structures, performance optimization,
                   and collaborative development practices, preparing me to work effectively within modern software workflows.
                    This foundation has continued to support my professional growth across multiple languages, frameworks, and development environments.
              </p>
              <div className="job-tags">
                <span className="tag">C++</span>
                <span className="tag">C#</span>
                <span className="tag">Java</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
          </section>

          <section id="projects" className="content-section">
            <div className="project-list">
              <div className="project">
                <div className="project-title">Jarvis Jr. (Voice Assistant)</div>
                <div className="project-description">
                  I developed a personal voice assistant and task-tracking application inspired by the idea of creating a true
                   “Jarvis”-style assistant from the comics and films. Built with a Python backend and a React user interface,
                    the system integrates OpenAI API calls for natural language understanding, task creation, scheduling, and contextual responses.
                     The assistant currently helps manage development goals and daily life tasks while “gamifying” productivity through rewards,
                      progress tracking, and dynamic feedback. This remains my favorite project, and its capabilities continue to expand
                       as I iterate and explore new automation workflows and conversational behaviors.
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">OpenAI</span>
                    <span className="tag">React</span>
                  </div>
                </div>
                <a
                  href="https://github.com/DevStarkWalker/Jarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View on GitHub
                </a>
              </div>

              <div className="project">
                <div className="project-title">Pokemon Card Collector App</div>
                <div className="project-description">
                  Built a data ingestion and storage pipeline to extract and normalize Pokémon trading card data from the PokemonTCG API.
                   Designed a relational PostgreSQL schema using Prisma to map card metadata and set relationships, and implemented a Node.js
                    scraping workflow to populate and maintain the database. Used PgAdmin to validate data, run queries, and verify schema integrity.
                     Initial front-end was slated for React, but development concluded after database and data services were completed,
                      demonstrating proficiency in API integration, ORM modeling, and SQL database design.
                  <div className="project-tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Prisma</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">PgAdmin</span>
                    <span className="tag">PokemonTCG API</span>
                  </div>
                </div>
                  <div className="project-image">
                    <img src={pokemon} alt="Pokemon Card Collector App Preview" />
                  </div>
              </div>

              <div className="project">
                <div className="project-title">Portfolio Website</div>
                <div className="project-description">
                  This personal portfolio website was designed and developed in JavaScript and React to present my skills,
                   professional experience, and project work. The site serves as both a technical showcase and a centralized
                    profile for recruiters, collaborators, and prospective clients, with a focus on clean UI, responsive design,
                     and maintainable front-end architecture.

                  <div className="project-tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Web Dev</span>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="project-title">Company Website</div>
                <div className="project-description">
                  A company website designed and developed using JavaScript and React to showcase the organization’s services,
                   capabilities, and completed work. The project emphasized visual clarity, navigation structure,
                    and responsive design to effectively communicate offerings to prospective customers and partners while
                     maintaining a scalable front-end codebase.

                  <div className="project-tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Web Dev</span>
                  </div>
                </div>
                <a
                  href="https://devstarkwalker.github.io/NovaehWebPage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View webpage
                </a>
              </div>

              <div className="project">
                <div className="project-title">"Moon Game"</div>
                <div className="project-description">
                  A first-person thriller/horror game developed collaboratively in Unity with C# by a small group of college alumni.
                   The project explores atmospheric design, immersive UI/UX practices, and tension-building mechanics while aiming
                    to implement procedural map generation and environmental variability. The focus is to create a compelling horror
                     experience through dynamic level layouts, visual feedback, sound design, and an interface that reinforces mood
                      and player uncertainty.

                  <div className="project-tags">
                    <span className="tag">Unity</span>
                    <span className="tag">C#</span>
                    <span className="tag">Game Dev</span>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="project-title">"Aim Trainer"</div>
                <div className="project-description">
                  An interactive 3D aim trainer for first-person shooter players, developed in Unity with C# alongside fellow alumni.
                   This prototype served as a test of team workflow and technical scope, emphasizing target spawning logic, input handling,
                    shot accuracy tracking, and responsive feedback loops. The goal was to deliver a functional and optimized training experience
                     while validating our ability to design, implement, and iterate on a complete Unity project as a team.

                  <div className="project-tags">
                    <span className="tag">Unity</span>
                    <span className="tag">C#</span>
                    <span className="tag">Game Dev</span>
                  </div>
                </div>
                <a
                  href="https://github.com/Ascendium-Interactive/Aim-Trainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View on GitHub
                </a>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
