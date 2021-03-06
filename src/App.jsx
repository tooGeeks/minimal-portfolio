import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
