import { Link } from "react-router-dom";
import "../CSS/Projects.css";

import githubLogo from "../../public/assets/images/logos/github-logo.png";
import liveDemoArrow from "../../public/assets/images/live-demo-arrow.svg";
import javascriptLogo from "../../public/assets/images/logos/javascript-logo.png";
import reactLogo from "../../public/assets/images/logos/react-logo.png";
import htmlLogo from "../../public/assets/images/logos/html-logo.png";
import cssLogo from "../../public/assets/images/logos/css-logo.png";
import tailwindcssLogo from "../../public/assets/images/logos/tailwindcss-logo.webp";
import reduxLogo from "../../public/assets/images/logos/redux-logo.svg";
import axiosLogo from "../../public/assets/images/logos/axios-logo.svg";
import nodejsLogo from "../../public/assets/images/logos/nodejs-logo.png";
import expressLogo from "../../public/assets/images/logos/express-logo.png";
import mongodbLogo from "../../public/assets/images/logos/monodb-logo.jpg";
import materialuiLogo from "../../public/assets/images/logos/materialui-logo.svg";
import bootstrapLogo from "../../public/assets/images/logos/bootstrap-logo.svg";

// app gifs
import movieAppPreview from "../../public/assets/images/movie-app-screen.png";
import felixAppPreview from "../../public/assets/images/felix-app-screen.png";
import mondiPhotoGalleryPreview from "../../public/assets/images/photo-app-screen.png";

const Projects = () => {
  return (
    <div id="projects-main-container" className="text-2xl">
      <div className="projects-inner flex flex-col text-zinc-100">
        {/*  */}

        <div id="carouselExample" className="carousel slide w-11/12 h-11/12 mt-12">
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="project movie-app text-center flex flex-col items-center justify-center w-full">
                <div className="project-title mb-8 outline w-9/12 p-2 font-bold mt-4">
                  Mondi Movie App
                </div>
                <div className="project-tools-used w-7/12 flex justify-evenly flex-wrap h-auto">
                  {" "}
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={javascriptLogo} />
                    <p className="text-lg">Javascript</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={reactLogo} />
                    <p className="text-lg">React</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={htmlLogo} />
                    <p className="text-lg">HTML</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={cssLogo} />
                    <p className="text-lg">CSS</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={axiosLogo} />
                    <p className="text-lg">Axios</p>
                  </div>
                </div>
                <img className="project-thumbnail w-9/12" src={movieAppPreview} />
                <div className="project-links flex justify-evenly p-4 w-full">
                  <Link
                    to={"https://github.com/M0NDI/mondi-movie-app"}
                    className="flex flex-col w-20 hover:outline hover:rounded"
                  >
                    <img src={githubLogo} className="bg-transparent rounded-2xl p-2" />
                  </Link>
                  <Link
                    to={"https://m0ndi.github.io/mondi-movie-app/"}
                    className="flex flex-col w-20 hover:outline rounded"
                  >
                    <img src={liveDemoArrow} className="h-12 bg-transparent rounded-2xl p-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item active">
              <div className="project movie-app text-center flex flex-col items-center justify-center w-full">
                <div className="project-title mb-8 outline w-9/12 p-2 font-bold mt-4">
                  Mondi Photo Gallery
                </div>
                <div className="project-tools-used w-7/12 flex justify-evenly flex-wrap h-auto">
                  {" "}
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={javascriptLogo} />
                    <p className="text-lg">Javascript</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={reactLogo} />
                    <p className="text-lg">React</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={nodejsLogo} />
                    <p className="text-lg">NodeJS</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={expressLogo} />
                    <p className="text-lg">ExpressJS</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={mongodbLogo} />
                    <p className="text-lg">MongoDB</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={reduxLogo} />
                    <p className="text-lg">Redux</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={htmlLogo} />
                    <p className="text-lg">HTML</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={cssLogo} />
                    <p className="text-lg">CSS</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={materialuiLogo} />
                    <p className="text-lg">MaterialUI</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={bootstrapLogo} />
                    <p className="text-lg">Bootstrap</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={tailwindcssLogo} />
                    <p className="text-lg">TailwindCSS</p>
                  </div>
                </div>
                <img className="project-thumbnail w-9/12" src={mondiPhotoGalleryPreview} />
                <div className="project-links flex justify-evenly p-4 w-full">
                  <Link
                    to={"https://github.com/M0NDI/fullstack-image-search-app"}
                    className="flex flex-col w-20 hover:outline hover:rounded"
                  >
                    <img src={githubLogo} className="bg-transparent rounded-2xl p-2" />
                  </Link>
                  <Link
                    to={"https://mondi-photo-gallery.onrender.com"}
                    className="flex flex-col w-20 hover:outline rounded"
                  >
                    <img src={liveDemoArrow} className="h-12 bg-transparent rounded-2xl p-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="project movie-app text-center flex flex-col items-center justify-center w-full">
                <div className="project-title mb-8 outline w-9/12 p-2 font-bold mt-4">
                  Felix Roasting Company Clone
                </div>
                <div className="project-tools-used w-7/12 flex justify-evenly flex-wrap h-auto">
                  {" "}
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={javascriptLogo} />
                    <p className="text-lg">Javascript</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={reactLogo} />
                    <p className="text-lg">React</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={htmlLogo} />
                    <p className="text-lg">HTML</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={cssLogo} />
                    <p className="text-lg">CSS</p>
                  </div>
                  <div className="tool-used tool-javascript flex flex-col items-center justify-center m-1">
                    <img src={tailwindcssLogo} />
                    <p className="text-lg">TailwindCSS</p>
                  </div>
                </div>
                <img className="project-thumbnail w-9/12" src={felixAppPreview} />
                <div className="project-links flex justify-evenly p-4 w-full">
                  <Link
                    to={"https://github.com/M0NDI/felix-roasting-company-clone"}
                    className="flex flex-col w-20 hover:outline hover:rounded"
                  >
                    <img src={githubLogo} className="bg-transparent rounded-2xl p-2" />
                  </Link>
                  <Link
                    to={"https://m0ndi.github.io/felix-roasting-company-clone/"}
                    className="flex flex-col w-20 hover:outline rounded"
                  >
                    <img src={liveDemoArrow} className="h-12 bg-transparent rounded-2xl p-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control carousel-control-prev w-12 h-12 m-auto"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next w-12 h-12 m-auto"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
