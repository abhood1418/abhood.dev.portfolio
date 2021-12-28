import profile from "./profile.jpeg";
import mage from "./mage.png";
import mage2 from "../../Assets/mage-gif.gif";
import dance from "../../Assets/dancemage.gif";
import funny from "../../Assets/funnymage.gif";
import toon from "../../Assets/toonmage.png";
import mail from "../../Assets/mail.png";
import linked from "../../Assets/linked.png";
import git from "../../Assets/git.png";
import resume from "../../Assets/resumepic.png";
import coolmage from "../../Assets/coolmage.png";
import gamemaster from "../../Assets/gamemaster.png";
import imporium from "../../Assets/imporium.png";
import sweatmage from "../../Assets/sweatmage.gif";
import nevermore from "../../Assets/nevermore.png";
import firemage from "../../Assets/firemage.gif";
import resumepdf from "../../Assets/Andrew Hood.pdf";
import wedding from "../../Assets/weddingphoto.jpeg";
import { Typewriter } from "react-simple-typewriter";
import AboutMe from "../AboutMe/AboutMe";
import { stacks } from "../../services/stacks";
import Stack from "../../components/Stack/Stack";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main-div">
      <div className="home-left-div">
        <img className="profile-pic" src={profile} />
        <h1 className="first-name">
          Andrew <span className="last-name">Hood</span>
        </h1>
        <h2 className="typewriter">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Creative",
              "Aspiring Code Wizard",
              "Software Engineer",
            ]}
            loop={4}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h2>
      </div>
      <div className="home-right-div">
        <img className="dancemage" src={dance} />
        <hr />
        <hr />
      </div>
      <div id="about-me" className="about-main-div">
        <h1 className="about-2-title">About Me:</h1>
        <hr />

        <div className="desc-main">
          <div className="general-about">
            <img src={wedding} className="me-card-img" />
            <p className="about-me-desc">
              I'm a Software Engineer and graduate of General Assembly's
              Software Engineering Immersive program, where I developed my
              JavaScript, React, Ruby on Rails, and other technical skills. I am
              driven and passionate about building unique, creative, and
              innovative applications that inspire and better the lives of
              others!
              <br />
              <p>If you'd like to know more about me follow the link below!</p>
            </p>
            <Link to="/about" class="btnfos btnfos-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Learn More
            </Link>
          </div>
          <div className="accolades">
            <div className="card1" className="cards">
              <h1 className="Acc-color">5</h1>
              <h4 className="sub-acc-title">Deployed Projects!</h4>
              <p className="acc-desc">
                Investigate my built projects in the
                <br />
                <strong>
                  <span className="highlight1"> Projects </span>
                </strong>
                section.
              </p>
            </div>

            <div className="card2" className="cards">
              <h1 className="Acc-color">700+</h1>
              <h4 className="sub-acc-title">Hours Coded!</h4>
              <p className="acc-desc">
                GA SEI Program, Code Wars, LeetCode, Mammoth Interactive Hello
                Coding Course, & <span className="highlight1">More.</span>
              </p>
            </div>

            <div className="card3" className="cards">
              <h1 className="Acc-color">Current Project</h1>
              <h4 className="sub-acc-title">
                Game Masters Ruby on Rails Backend!
              </h4>
              <p className="acc-desc">
                Developing full CRUD backend for Game Masters Project with User
                Auth and Associations.
              </p>
            </div>
          </div>
        </div>

        <h1 className="about-title">Current Arcane Knowledge Stack:</h1>
      </div>

      <div className="stacks-main-div">
        <ul className="tech-stack">
          {stacks.map((stack) => (
            <Stack stack={stack} />
          ))}
        </ul>
      </div>

      {/* <hr />  */}

      <div id="projects" className="projects-title-div">
        <img className="sweatmage" src={sweatmage} />
        <h1 className="projects-main-title">My Projects</h1>
      </div>
      <hr className="whiteruler" />

      {/* Card 1 */}

      <div className="projects-main-div">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={imporium} className="imporium" />
            </div>
            <div class="flip-card-back">
              <h1>Imporium</h1>
              <p className="proj-pad">
                Easy to use online market place for NFT's of the etherium
                network. Also a platform for creator to mint their own NFT's.
              </p>
              <p className="proj-pad">
                Built with: React, React Router, JavaScript, CSS3, Express.js,
                Mongoose, Heroku, Netlify, & MongoDB.
              </p>
              <a className="ref-link" href="https://imporium.netlify.app/">
                Live Site
              </a>
              <a
                className="ref-link"
                href="https://github.com/abhood1418/imporium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}

      <div className="projects-main-div">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={gamemaster} className="imporium" />
            </div>
            <div class="flip-card-back">
              <h1>Game Masters</h1>
              <p className="proj-pad">
                An app where Game Masters from all TTRPGs can gather to share
                and receive feedback on their game design ideas.{" "}
              </p>
              <p className="proj-pad">
                Built with: React, React Router, Google AirTable, JavaScript,
                Bootstrap, MUI, CSS3, & Netlify.
              </p>
              <a
                className="ref-link"
                href="https://modest-turing-486509.netlify.app/"
              >
                Live Site
              </a>
              <a
                className="ref-link"
                href="https://github.com/abhood1418/Game-Masters"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}

      <div className="projects-main-div">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={nevermore} className="imporium" />
            </div>
            <div class="flip-card-back">
              <h1>Nevermore</h1>
              <p className="proj-pad">
                An App for writers to meet, share, compete, and inspire one
                another as well as host collections of their own creations.
              </p>
              <p className="proj-pad">
                Built with: Ruby on Rails, React, JavaScript, SASS, CSS3,
                Heroku, & Netlify.
              </p>
              <a
                className="ref-link"
                href="https://silly-blackwell-8fd80c.netlify.app/"
              >
                Live Site
              </a>
              <a
                className="ref-link"
                href="https://github.com/abhood1418/Nevermore"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="whiteruler" />

      <div className="contact-main-div">
        <div id="contact" className="contact-title">
          Contact Me
        </div>
        <hr />

        <div className="contact-main-body">
          <div className="contact-card-main">
            <div className="contact-sub-title">
              Want to earn experience and level up with me? 
              <br />
              <p className="contact-sub-sub">Check out my Links Below or contact me directly! I would love to meet and work together!</p>
              <div className="contact-card">
                <div className="icon-div">
                  
                  <div>
                    <a href="mailto:abhooddirect@gmail.com"><img className="icons" src={mail} /></a>
                    <p className="icon-text">Email Me</p>
                  </div>
                  
                  <div>
                    <a href="https://www.linkedin.com/in/andrew-b-hood/"><img className="icons" src={linked} /></a>
                    <p className="icon-text">LinkedIn</p>
                  </div>
                  
                  <div>
                    <a href="https://github.com/abhood1418"><img className="icons" src={git} /></a>
                    <p className="icon-text">GitHub</p>
                  </div>
                  
                  <div>
                    <a href={resumepdf} download><img className="icons" src={resume} /></a>
                    <p className="icon-text">Resume</p>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="contact-mage-div">
            <img className="coolmage" src={coolmage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
