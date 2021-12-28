import { Link } from "react-router-dom";
import "./Nav.css";
import resumepdf from "../../Assets/Andrew Hood.pdf"

const Nav = () => {
  return (
    <div className="nav-div">
      <div className="nav-div-left">
        <Link to="/" className="home-link">
          abhood.dev
        </Link>
      </div>
      <div className="nav-div-right">
        <Link to="/" className="home-link-2">
          Home
        </Link>
        <a href="#about-me" className="about-me-link">
        About Me
        </a>
        <a href="#projects" className="project-link">
          Projects
        </a>
        <a href="#contact" className="contact-link">
          Contact Me
        </a>
        <a className="contact-link" href={resumepdf} download>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;
