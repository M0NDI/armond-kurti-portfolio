import Navbar from "./components/Navbar";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div id="app-wrapper" className="app">
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