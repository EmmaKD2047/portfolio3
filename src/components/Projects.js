import Zoom from 'react-reveal/Zoom'

const Projects = () => {
  return (
    <div className="projects" id="projectssection">
        <div className="projecttitle">
            <h2>Projects</h2>
        </div>
        <Zoom top>
          <div className="projectmockups">
              <a href="https://emmakd2047.github.io/Meet-Website/" target="_blank"><div className="mockups one" style={{ 
                paddingTop: '150px',
                paddingLeft: '20px',
                }}>
                <h2>Meet Website</h2>
                <p>Click To View Live Website</p>
              </div></a>
              <a href="https://emmakd2047.github.io/Perfect-Pair/" target="_blank"><div className="mockups two" style={{ 
                paddingTop: '150px',
                paddingLeft: '20px'
                }}>
                <h2>Perfect Pair</h2>
                <p>Click To View Live Website</p>
              </div></a>
              <a href="https://emmakd2047.github.io/iCloud-Photos-Redesign/" target="_blank"><div className="mockups three">
                <h2>iCloud Photos Redesign</h2>
                <p>Click To View Live Website</p>
              </div></a>
              <a href="https://emmakd2047.github.io/Blog-Template/" target="_blank"><div className="mockups four">
                <h2>Blog Template</h2>
                <p>Click To View Live Website</p>
              </div></a>
          </div>
        </Zoom>
    </div>
  )
}

export default Projects