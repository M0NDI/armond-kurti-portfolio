import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div id="app-wrapper">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AboutMe />
              <Projects />
              <Contact />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;