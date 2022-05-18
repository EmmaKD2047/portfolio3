import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import Email from './components/Email';

function App() {
  return (
    <div className="container">
      <HeroSection />
      <Projects />
      <AboutMe />
      <SkillsSection />
      <Email />
    </div>
  );
}

export default App; 
