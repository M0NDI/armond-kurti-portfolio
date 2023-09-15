import "../CSS/AboutMe.css";
import spaceBg from "../../public/assets/images/space.jpg";

const AboutMe = () => {
  return (
    <div id="about-me-container" className="text-2xl outline bg-zinc-900">
      <img src={spaceBg} className="object-cover w-screen h-screen absolute"/>
      <div className="my-name-one outline flex justify-center items-center h-screen">
        <p className="typed text-8xl text-zinc-200 tracking-widest z-50">Hi, I'm Armond.</p>
      </div>
    </div>
  );
};

export default AboutMe;