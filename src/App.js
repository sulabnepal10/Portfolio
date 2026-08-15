import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/style.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Experience } from './components/Experience';
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { CommunitySection } from "./components/CommunitySection";
import InstagramSection from './components/InstagramSection';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="trace-rail" aria-hidden="true">
        <span className="trace-rail-pulse" />
      </div>
      <NavBar />
      <Banner />
      <Experience />
      <Skills />
      <ProjectsSection />
      <EducationSection />
      <CommunitySection />
      <InstagramSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
