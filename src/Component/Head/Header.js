import React, { useState } from 'react';
import './Header.css';
import logo from '../pic/logo.jpg';

const Header = () => {
  //When scroll header at top
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100 )
  } )

  // Toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
              <div className='logo'>
                <img src={logo} className='logo_main' alt='logo Vishakha' height="60px" /> 
              </div>
              <div className='navlink'>
                  <ul className={Mobile ? "nav-links-mobile": "link f_flex uppercase" } onClick={() => setMobile(false)} >
                  <li><a href='#home'>Home</a> </li>
                  {/* <li><a href='#features'>Features</a> </li> */}
                  <li><a href='#portfolio'>Portfolio</a> </li>
                  <li><a href='#resume'>Resume</a> </li>
                  <li><a href='#blog'>Book-a-Fact</a> </li>
                  {/* <li><a href='#blog'>Book-a-Fact</a> </li> */}
                  <li><a href='#contact'>Contact</a> </li>
                  {/* <li><button className='homne-btn'>BUY NOW</button> </li> */}
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)} >
                  {
                    Mobile ? 
                      <i class="fa fa-times close home-btn"></i> :
                      <i class="fa fa-bars open"></i>
                  }
                </button>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header;