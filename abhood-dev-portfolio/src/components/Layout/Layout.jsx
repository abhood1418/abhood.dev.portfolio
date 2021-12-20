import Nav from "../Nav/Nav";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Layout = (props) => {
  return (
    <div>
      <Nav />
      {/* <AwesomeSlider animation="cubeAnimation"> */}
      <div>{props.children}</div>
      {/* </AwesomeSlider> */}
    </div>
  )
}

export default Layout;