import profile from "./profile.jpeg";
import mage from "./mage.png";
import { Typewriter } from "react-simple-typewriter";
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
        <img className="mage" src={mage} />
      </div>
    </div>
  );
};
export default Home;
