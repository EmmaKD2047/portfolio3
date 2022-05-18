import kelogo from '../kelogo.png'
import background from '../IMG_1138.JPG'
import instagram from '../instagram-color.png'
import twitter from '../twitter.png'
import linkedin from '../linkedin.png'
import github from '../github.png'
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
  return (
    <div className="hero" id="herosection" style={{
        backgroundImage: `url(${background})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        }}>
        <nav className='nav nav-scrolled reveal'>
            <div className="logo">
                <img className="kelogo" src={kelogo} alt="kelogo" />
            </div>
            <div className="links">
                <ul>
                    <a href="#herosection" id="home"><li>Home</li></a>
                    <a href="#projectssection" className="otherlinks"><li>Projects</li></a>
                    <a href="#aboutmesection" className="otherlinks"><li>About</li></a>
                    <a href="#skillssection" className="otherlinks"><li>Skills</li></a>
                    <a href="#contactsection" className="otherlinks"><li>Contact</li></a>
                </ul>
            </div>
        </nav>
        <div className="profilecard">
            <Fade>
                <div className="info">
                    <h1>Emmanuel Kadiri</h1>
                    <p style={{fontWeight: 'bold'}}>Frontend Developer</p>
                </div>
            </Fade>
        </div>
        <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#projectssection"></a>
            <p>Scroll Down For More</p>
        </div>
        <div className="socials">
            <a href="https://twitter.com/kdcoding"><img src={twitter} alt="" style={{ width: '30px', position: 'fixed', right: '25px', bottom: '160px'}}/></a>
            <a href="http://www.instagram.com/kdcoding/"><img src={instagram} alt="" style={{ width: '40px', position: 'fixed', right: '20px', bottom: '110px'}}/></a>
            <a href="https://www.linkedin.com/in/emmanuel-kadiri-930259b8/"><img src={linkedin} alt="" style={{ width: '30px', position: 'fixed', right: '25px', bottom: '70px'}}/></a>
            <a href="https://github.com/EmmaKD2047"><img src={github} alt="" style={{ width: '30px', position: 'fixed', right: '25px', bottom: '20px'}}/></a>
        </div>
    </div>
  )
}

export default HeroSection