import { Link } from "react-router-dom";
import "./Nav.css";

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
        <Link to="/contact" className="contact-link">
          Contact Me
        </Link>
        <Link to="/resume" className="resume-link">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Nav;
