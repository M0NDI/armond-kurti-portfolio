import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToAboutMe = () => {
    // Scroll to the #about-me-container element
    const aboutMeContainer = document.getElementById("about-me-container");
    const navbarHeight = document.getElementById("navbar-container").offsetHeight;
    window.scrollTo({
      top: aboutMeContainer.offsetTop - navbarHeight -10,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    // Scroll to the #projects-container element
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
      window.scrollTo({
        top: projectsContainer.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContactMe = () => {
    // Scroll to the #about-me-container element
    const contactMeContainer = document.getElementById("contact-me-container");
    const navbarHeight = document.getElementById("navbar-container").offsetHeight;
    window.scrollTo({
      top: contactMeContainer.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <div id="navbar-container" className="h-14 w-full fixed top-0 z-50">
      <ul className="flex justify-evenly items-center h-full bg-transparent">
        <li className="text-zinc-200">
          <Link onClick={scrollToAboutMe}>About</Link>
        </li>
        <li className="text-zinc-200">
          <Link onClick={scrollToProjects}>Projects</Link>
        </li>
        <li className="text-zinc-200">
          <Link onClick={scrollToContactMe}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;