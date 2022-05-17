import html5 from '../html.png'
import css3 from '../css-3.png'
import js from '../js.png'
import react from '../atom.png'
import figma from '../figma.png'
import Bounce from 'react-reveal/Bounce';

const SkillsSection = () => {
  return (
    <div className="skills" id="skillssection">
        <h2 id="skillstitle">Skills</h2>
        <Bounce>
          <div className="skill-icons">
              <div className="skill-icon"><img src={html5} alt="html5" /></div>
              <div className="skill-icon"><img src={css3} alt="css3" /></div>
              <div className="skill-icon"><img src={js} alt="javascript" /></div>
              <div className="skill-icon"><img src={react} alt="react" /></div>
              <div className="skill-icon"><img src={figma} alt="figma" /></div>
          </div>
        </Bounce>
    </div>
  )
}

export default SkillsSection