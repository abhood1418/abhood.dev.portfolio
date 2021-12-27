import profile from "./profile.jpeg";
import mage from "./mage.png";
import mage2 from "../../Assets/mage-gif.gif";
import dance from "../../Assets/dancemage.gif";
import funny from "../../Assets/funnymage.gif"
import wedding from "../../Assets/weddingphoto.jpeg"
import { Typewriter } from "react-simple-typewriter";
import AboutMe from "../AboutMe/AboutMe";
import { stacks } from "../../services/stacks";
import Stack from "../../components/Stack/Stack";
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
        {/* <ul className="tech-stack">
            {stacks.map((stack) => (
              <Stack stack={stack} />
            ))}
          </ul> */}
        <img src={dance} />
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
              I am a Software Engineer and graduate of General Assembly's
              Software Engineering Immersive program, where I developed my
              JavaScript, React, Ruby on Rails, and other technical skills. I am
              driven and passionate about building unique, creative, and
              innovative applications that inspire and better the lives of
              others!
              <br />
              <p>
                If you'd like to know more about me follow the link below!
              </p>
            </p>
            <a class="btnfos btnfos-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
     Learn More
    </a> 
          </div>
          <div className="accolades">
            <div className="card1" className="cards">
              <h1 className="Acc-color">5</h1>
              <h4 className="sub-acc-title">Deployed Projects!</h4>
              <p className="acc-desc">
                Investigate my built projects in the <strong><span className="highlight1">Projects</span></strong> section. 
              </p>
            </div>

            <div className="card2" className="cards">
            <h1 className="Acc-color">700+</h1>
              <h4 className="sub-acc-title">Hours Coded!</h4>
              <p className="acc-desc">
                GA SEI Program, Code Wars, LeetCode, Mammoth Interactive Hello Coding Course, & <span className="highlight1">More.</span>
              </p>
            </div>

            <div className="card3" className="cards">
            <h1 className="Acc-color">Current Project</h1>
              <h4 className="sub-acc-title">Game Masters Ruby on Rails Backend!</h4>
              <p className="acc-desc">
                Developing full CRUD backend for Game Masters Project with User Auth and Associations.
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

      {/* <AboutMe /> */}
    </div>
  );
};
export default Home;
