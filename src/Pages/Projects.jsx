import { Link } from "react-router-dom";
import "../CSS/Projects.css";

import githubLogo from "../../public/assets/images/logos/github-logo.png";
import liveDemoArrow from "../../public/assets/images/live-demo-arrow.svg";
import movieAppPreview from "../../public/assets/images/movieapppreview.gif";
import felixapppreview from "../../public/assets/images/felixapppreview.gif";
import javascriptLogo from "../../public/assets/images/logos/javascript-logo.png";
import reactLogo from "../../public/assets/images/logos/react-logo.png";
import htmlLogo from "../../public/assets/images/logos/html-logo.png";
import cssLogo from "../../public/assets/images/logos/css-logo.png";
import tailwindcssLogo from "../../public/assets/images/logos/tailwindcss-logo.webp";
import reactRouterLogo from "../../public/assets/images/logos/react-router-logo.png";
import axiosLogo from "../../public/assets/images/logos/axios-logo.svg";

const Projects = () => {
  return (
    <div id="projects-main-container" className="text-2xl">
      <div className="projects-inner text-zinc-100">
        {/*  */}

        <div className="project text-center">
          <div className="mb-8 outline w-full">Mondi Movie App</div>
          <div className="project-tools-used w-full flex justify-evenly">
            <div className="tool-used tool-javascript ">
              <img src={javascriptLogo}/>
            </div>
            <div className="tool-used tool-react">
              <img src={reactLogo}/>
            </div>
            <div className="tool-used tool-html">
              <img src={htmlLogo}/>
            </div>
            <div className="tool-used tool-css">
              <img src={cssLogo}/>
            </div>
            <div className="tool-used tool-react-router">
              <img src={reactRouterLogo}/>
            </div>
            <div className="tool-used tool-axios">
              <img src={axiosLogo}/>
            </div>
          </div>
          <img className="project-thumbnail" src={movieAppPreview} />
          <div className="project-links flex justify-evenly  p-4 w-full">
            <Link to={"https://github.com/M0NDI/mondi-movie-app"} className="flex flex-col w-28">
              <img src={githubLogo} className="h-16 bg-transparent rounded-2xl p-2" />
            </Link>
            <Link to={"https://m0ndi.github.io/mondi-movie-app/"} className="flex flex-col w-28">
              <img src={liveDemoArrow} className="h-16 bg-transparent rounded-2xl p-2" />
            </Link>
          </div>
        </div>

        <div className="project text-center">
        <div className="mb-8 outline w-full">Felix Roasting Company Clone</div>
          <div className="project-tools-used w-full flex justify-evenly">
            <div className="tool-used tool-javascript ">
              <img src={javascriptLogo}/>
            </div>
            <div className="tool-used tool-react">
              <img src={reactLogo}/>
            </div>
            <div className="tool-used tool-html">
              <img src={htmlLogo}/>
            </div>
            <div className="tool-used tool-css">
              <img src={cssLogo}/>
            </div>
            <div className="tool-used tool-tailwindcss">
              <img src={tailwindcssLogo}/>
            </div>
            <div className="tool-used tool-react-router">
              <img src={reactRouterLogo}/>
            </div>
          </div>
          <img className="project-thumbnail" src={felixapppreview} />
          <div className="project-links flex justify-evenly p-4 w-full">
            <Link
              to={"https://github.com/M0NDI/felix-roasting-company-clone"}
              className="flex flex-col w-28"
            >
              <img src={githubLogo} className="h-16 bg-transparent rounded-2xl p-2" />
            </Link>
            <Link
              to={"https://m0ndi.github.io/felix-roasting-company-clone/"}
              className="flex flex-col w-28"
            >
              <img src={liveDemoArrow} className="h-16 bg-transparent rounded-2xl p-2" />
            </Link>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
