import React from 'react';
import "./About.css";
import manga from "../../images/manga.png";
import Fade from "react-reveal";



const About = () => {
  return (
    <div className='about-container' id='About'>
        <div className='about-content'>
        <Fade bottom duration={7500}> <h1>WE DELIVER EXCLUSIVE DIGITAL MANGA CONTENTS</h1> </Fade>
       <br />
      <Fade bottom duration={7500}><h2>Read manga novels and books for free and
        <br /> see How easy to add digital products and sell.</h2></Fade> 
       <br />
      
       <button className='btn-about' >Get started for free</button>
       </div> 
       
       <Fade right duration={10500}  ><img className='about-image' width={350}
            height={250}  
            src={manga} alt="" /></Fade>
    </div>
  )
}

export default About