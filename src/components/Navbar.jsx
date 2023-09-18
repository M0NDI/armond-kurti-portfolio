import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  const scrollToAboutMe = () => {
    // Scroll to the #about-me-container element
    // const navHeight = document.getElementById("navbar-container").offsetHeight;
    const aboutMeContainer = document.getElementById("about-me-main-container");
    window.scrollTo({
      top: aboutMeContainer.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    // Scroll to the #projects-container element
    const projectsContainer = document.getElementById("projects-main-container");
    if (projectsContainer) {
      window.scrollTo({
        top: projectsContainer.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContactMe = () => {
    // Scroll to the #about-me-container element
    const contactMeContainer = document.getElementById("contact-me-main-container");
    window.scrollTo({
      top: contactMeContainer.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="navbar-container" className="flex flex-col h-14 w-32 h-full fixed z-50">
      <ul className="nav-links-container flex flex-col justify-evenly items-center h-full bg-transparent">
        <li className="nav-link about-me-link" onClick={scrollToAboutMe}>
          <NavLink>About</NavLink>
        </li>
        <li className="nav-link projects-link" onClick={scrollToProjects}>
          <NavLink >Projects</NavLink>
        </li>
        <li className="nav-link contact-link" onClick={scrollToContactMe}>
          <NavLink >Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;