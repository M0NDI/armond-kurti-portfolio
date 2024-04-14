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
    <div className="about-me-main text-2xl">
      <div className="my-name-one flex justify-center items-center flex-col h-screen">
        <h1
          id="hi-im-armond"
          className="typed text-zinc-200 tracking-widest flex items-center whitespace-nowrap overflow-hidden"
        >
          Hi, I'm Armond.
        </h1>
        <div className="more-about-me flex justify-center items-center flex-col text-zinc-100 cursor-pointer m-24">
          <p onClick={handleAboutMeClicked} className="text-3xl leading-loose">
            {isAboutMeClicked ? <AboutMeDescription /> : "MORE ABOUT ME"}
          </p>
          <img
            src={!isAboutMeClicked ? downArrow : upArrow}
            style={isAboutMeClicked ? { backgroundColor: "rgb(214, 187, 65)" } : { backgroundColor: "rgb(0, 0, 0)" }}
            className="about-me-arrows relative mt-4 z-50"
            alt="Arrow"
            onClick={handleAboutMeClicked}
          />
        </div>{/*  */}
      </div>
    </div>
  );
};

export default AboutMe;
