import githubLogo from "../../public/assets/images/github-logo.png";
import liveDemoArrow from "../../public/assets/images/live-demo-arrow.svg";
import { Link } from "react-router-dom";
import "../CSS/Projects.css";

const Projects = () => {
  return (
    <div id="projects-main-container" className="text-2xl">

      <div className="projects-inner flex justify-center items-center h-screen text-zinc-100 z-0">
        <div className="project flex flex-col items-center justify-center w-full h-full">
          <div className="project-tools-used">JavaScript React HTML CSS</div>
          <img className="project-thumbnail" />
          <div className="project-links flex w-full">
            <Link to={"https://github.com/M0NDI/mondi-movie-app"}>
              <img src={githubLogo} className="h-16 bg-zinc-300 rounded-2xl p-4" />
            </Link>
            <Link to={"https://m0ndi.github.io/mondi-movie-app/"}>
              <img src={liveDemoArrow} className="h-16 bg-zinc-300 rounded-2xl p-4" />
            </Link>
          </div>
        </div>

        <div className="project flex flex-col items-center">
          <div className="project-tools-used"></div>
          <img className="project-thumbnail" />
          <div className="project-links"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
