import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
