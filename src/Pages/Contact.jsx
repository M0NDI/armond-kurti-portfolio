import "../CSS/Contact.css";
import emailLogo from "../../public/assets/images/logos/email-logo.svg";
import githubLogo from "../../public/assets/images/logos/github-logo.png";
import phoneLogo from "../../public/assets/images/logos/phone-logo.svg";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      id="contact-me-main-container"
      className="text-2xl h-screen h-screen w-screen flex items-center justify-center"
    >
      <div className="contact-items flex flex-col justify-center items-center w-8/12">
        <div className="contact-email contact-item flex justify-evenly">
          <img src={emailLogo} className="h-16" />
          <p className="flex items-center text-zinc-200 text-4xl">armond.kurti@hotmail.com</p>
        </div>
        <div className="contact-github contact-item flex justify-evenly m-4">
          <img src={githubLogo} className="h-16" />
          <p className="flex items-center text-zinc-200 text-4xl"><Link to="https://github.com/M0NDI">https://github.com/M0NDI</Link></p>
        </div>
        <div className="contact-github contact-item flex justify-evenly ">
          <img src={phoneLogo} className="h-16" />
          <p className="flex items-center text-zinc-200 text-4xl">+44 7916712239</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
