import dotMov1 from "../../assets/images/dotmov.png";
import dotMov2 from "../../assets/images/dotmov2.png";
import dotMov3 from "../../assets/images/dotmov3.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Some Projects</h2>
      <figure className="projects-figure">
        <img className="img-back" src={dotMov3} alt="dotmov" />
        <img src={dotMov2} alt="dotmov" />
        <img className="img-front" src={dotMov1} alt="dotmov" />
      </figure>
      <article className="projects-article">
        <h3 className="project-title">.MOV</h3>
        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <ul>
          <li>React</li>
          <li>SCSS</li>
          <li>TMDB API</li>
        </ul>
        <a href="https://github.com/WaldiTea">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href="http://www.google.de">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </article>
    </section>
  );
};

export default Projects;
