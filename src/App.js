import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from './components/Experience';
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import Card from "./components/Earth";
import Truck from "./components/Truck";
import CreativeCard from './components/CreativeCard';
import InstagramSection from './components/InstagramSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Truck />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <InstagramSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
