import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <Fade>
      <div className="about" id="aboutmesection">
        <h2 id="aboutmetitle">About Me</h2>
        <p>I am a first class graduate of Computer Science with a CGPA of 4.57/.5.00.<br />
        I am proficient in HTML 5, CSS 3, JavaScript, React and Color Psychology. <br />
        Thank you for checking out my portfolio and I look forward to working with you in the future.</p>
        <a href="https://drive.google.com/file/d/1KeylTVydpNOdiCnylMY-QIbGSJ0fg54J/view?usp=sharing"><button className="resumebtn">Download Resume</button></a>
      </div>
    </Fade>
  )
}

export default AboutMe