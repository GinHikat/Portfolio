import {
  personalData,
  experienceData,
  projectsData,
  skillsDict,
  habitsData,
  hallOfFameData,
  educationData,
} from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Habits from "./components/Habits";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import HallOfFame from "./components/HallOfFame";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      {/* Background Decorative Blobs */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <Navbar personalData={personalData} />

      <main>
        <Hero personalData={personalData} />
        <About personalData={personalData} />
        <Education educationData={educationData} />
        <Experience experienceData={experienceData} />
        <Skills skillsDict={skillsDict} />
        <Habits habitsData={habitsData} />
        <Projects projectsData={projectsData} />
        <HallOfFame hallOfFameData={hallOfFameData} />
      </main>

      <Footer personalData={personalData} />
    </div>
  );
}

export default App;
