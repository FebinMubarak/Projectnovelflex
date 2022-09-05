import React from 'react'
import "./Navbar.css"
import {Link} from "react-scroll";

import mangalogo from "../../images/mangalogo.png"


const Navbar = () => {
  return (
    <div className='navbar'>
       
           <img  className='navbar-logo' src={mangalogo} alt="" />

           
      
       
      
        
       <Link 
       to="About" smooth={true} spy={true} activeClass="activeclass"><button className='b3 button'>About Us</button>
        </Link>
       
     
     
      <Link
      to="Manga" smooth={true} spy={true} activeClass="activeclass"
       >
      <button className='b4 button'>MangaBooks</button>
      </Link> 
      
        <button className='b5 button'>Signup </button>
    </div>
  )
}

export default Navbar;