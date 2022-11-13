import React from 'react';
import logo from '../Component/pic/logo.png';

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo} alt='' height='50px' width='50px' />
                </div>
                <p>@2022. All right reserved by V-Themes </p>
            </div>
        </footer>
    </>
  )
}

export default Footer;