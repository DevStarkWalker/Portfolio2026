import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './App.css'; 



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
      document.removeEventListener('mousemove', handleMouseMove); // Clean up listener on unmount
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
    }, { threshold: 0.5 }); // Adjust threshold as needed

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
        {/* Fixed Navigation Links */}

        <div className="content-container">
          <section id="about" className="content-section">

            <p>My passion for video games began at a young age, exploring early Nintendo games. This early fascination with gaming led me to discover more as I began to start modifying my Minecraft games, which eventually led me to delve deeper into the world of software development. After high school, I decided to turn my hobby into a career by studying how software works in a more structured way. I earned my Associate's degree in Computer Science from Tidewater Community College, which laid a solid foundation in programming principles. My journey continued at Old Dominion University, where I completed a Bachelor's degree in Game Studies and Design. This educational path helped me refine my skills and expand my knowledge in game development and programming. Today, I am a versatile programmer with experience across various languages and development environments.</p>
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
              Developed a high-quality, educationl, virtual reality app for a local school, helping teach students about the different careers in the maritime and ship building industry. Worked with a a small cross functional team of 3D artists and animators to acheive deadlines while tackling the systems and tools, leading development on the back end.
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
              I specialized in game design and development, focusing on game mechanics, interactive media, and immersive technology, while mastering tools and techniques for creating engaging digital experiences...
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
              I developed a strong foundation in programming, algorithms, and software development, gaining essential skills in problem-solving and computational thinking.
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
                    A personal voice assistant and task tracking app I have began to develop with the goal of creating a true Jarvis like from the comics/movies.
                    This is my favorite creation and has now began helping me keep track of development goals as well as my daily life tasks, while "Gamifying" it.
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">OpenAI</span>
                    <span className="tag">React</span>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-title">Portfolio Website</div>
                  <div className="project-description">
                    This website was designed and developed by me, for me, to showcase my skills, projects and career history.
                  </div>
                  <div className="project-tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Web Dev</span>
                  </div>
              </div>
              <div className="project">
                <div className="project-title">"Moon Game"</div>
                  <div className="project-description">
                    A thriller type first person horror game I am developing witha few college alumni. 
                    This project is hoping to include procedural map generation as well as in depth UI design to incapulated the horror feel.
                  <div className="project-tags">
                    <span className="tag">Unity</span>
                    <span className="tag">C#</span>
                    <span className="tag">Game Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
