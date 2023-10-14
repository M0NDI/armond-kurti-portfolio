import Navbar from "./components/Navbar";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <div id="app-wrapper" className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<AboutMe />}
        ></Route>
        <Route
          path="/projects"
          element={<Projects />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;