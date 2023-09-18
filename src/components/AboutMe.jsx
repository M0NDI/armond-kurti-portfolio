import "../CSS/AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about-me-main-container" className="text-2xl">
      <div className="my-name-one flex justify-center items-center flex-col h-screen">
        <h1 className="typed text-8xl text-zinc-200 tracking-widest">Hi, I'm Armond.</h1>
        <p className="more-about-me text-zinc-100 m-12">MORE ABOUT ME</p>
      </div>
    </div>
  );
};

export default AboutMe;
