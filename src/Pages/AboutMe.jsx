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
        <h1 id="hi-im-armond" className="typed text-zinc-200 tracking-widest">
          Hi, I'm Armond.
        </h1>
        <div className="more-about-me flex justify-center items-center flex-col text-zinc-100 m-12 cursor-pointer w-8/12">
          <p onClick={handleAboutMeClicked}>
            {isAboutMeClicked ? <AboutMeDescription /> : "MORE ABOUT ME"}
          </p>
          <img
            src={!isAboutMeClicked ? downArrow : upArrow}
            className="about-me-arrows mt-2 relative top-100 z-50"
            alt="Arrow"
            onClick={handleAboutMeClicked}
          />
        </div>
      </div>
    </div>
  );
};

/* 
 Grab hi-im-armond div and smoothly move it higher up the screen when
 "more about me" is clicked. 

 When "more about me" is clicked, the more about me text disappears and 
 description about me appears.
*/

export default AboutMe;
