import { useState } from "react";
import "../CSS/AboutMe.css";
import downArrow from "../../public/assets/images/down-arrow.svg";
import upArrow from "../../public/assets/images/up-arrow.svg";

import AboutMeDescription from "../components/AboutMeDescription";

const AboutMe = () => {
  const [isAboutMeClicked, setIsAboutMeClicked] = useState(false);

  const handleAboutMeClicked = () => {
    setIsAboutMeClicked(!isAboutMeClicked);
  };

  return (
    <div id="about-me-main-container" className="text-2xl">
      <div className="my-name-one flex justify-center items-center flex-col h-screen">
        <h1
          id="hi-im-armond"
          className="typed text-zinc-200 tracking-widest flex items-center whitespace-nowrap overflow-hidden"
        >
          Hi, I'm Armond.
        </h1>
        <div className="more-about-me flex justify-center items-center flex-col text-zinc-100 m-6 cursor-pointer w-8/12">
          <p onClick={handleAboutMeClicked} className="z-50 text-3xl leading-loose">
            {isAboutMeClicked ? <AboutMeDescription /> : "MORE ABOUT ME"}
          </p>
          <img
            src={!isAboutMeClicked ? downArrow : upArrow}
            className="about-me-arrows relative top-100 z-50"
            alt="Arrow"
            onClick={handleAboutMeClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
