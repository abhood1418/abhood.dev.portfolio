import "./App.css";
import Home from "./screens/Home/home.js";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-div">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
