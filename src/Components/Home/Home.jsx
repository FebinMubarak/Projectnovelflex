import React from 'react'
import Fade from "react-reveal"
import "./Home.css";


const Banner = () => {
  return (
      <div id='Banner' > 
      <div  className='banner'>
        
        <Fade bottom duration={7500}><h1 className='h1'>Action, adventure, fantasy, mystery, <br /><span > romance and
            more—thousands of manga volumes for every fan!</span></h1></Fade>
           
      </div>
         
      </div>
  )
}

export default Banner;