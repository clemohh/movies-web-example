import React from 'react'
import './Navbar.css'
import { AiFillHome } from "react-icons/ai"
import { BiMoviePlay } from "react-icons/bi"
import {Link} from 'react-scroll'
import { BiPhoneCall } from "react-icons/bi"
import { BiUnderline } from "react-icons/bi"
function Navbar () {
  return (
    <div className='navigation'>
      <li>
        <Link  to='home' 
        spy={true}
        smooth={true}>
      <AiFillHome className="icon active-nav"/>
      </Link>
      </li>
      <li>
      <Link  to='movies' 
        spy={true}
        smooth={true}> 
      <BiMoviePlay className="icon"/>
      </Link>
      </li>
    
      <li>
      <Link  to='contact' 
        spy={true}
        smooth={true}> 
      <BiPhoneCall className="icon"/>
      </Link>
      </li>
      <li>
      <Link to='footer' 
        spy={true}
        smooth={true}> 
      <BiUnderline className="icon"/>
      </Link>
      </li>
      </div>
  );
}

let Icons = document.querySelectorAll('.navigation .icon')
Icons.forEach(icon=>{
  icon.addEventListener('click', ()=>{
    changeactive();
    icon.classList.add('active-nav');
  });
});

function changeactive(){
  Icons.forEach(icon => {
    icon.classList.remove('active-nav')

  });
}
export default Navbar