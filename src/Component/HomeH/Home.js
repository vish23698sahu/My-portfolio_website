import React from 'react';
import './Home.css';
import {Typewriter} from 'react-simple-typewriter';
import profileP from '../pic/profilephoto.jpg';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome to my World!!</h3>
            <h1>
              Hi I'm <span>Vishakha Sahu</span>
            </h1>
            <h2>
                a
              <Typewriter
                words={[" Full Stack Dev", " React Developer", " Web Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            {/* <p>Lorem ipsum text</p> */}

            <div className='hero_btn d_flex'>
                <div className='col_1'>
                    <h4>FIND WITH ME</h4>
                    <div className='button'>
                        <button className='btn_shadow'>
                          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-facebook-f'></i>
                          </a>
                        </button>
                        <button className='btn_shadow'>
                          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                          <i className='fab fa-instagram'></i>
                          </a>
                        </button>
                        <button className='btn_shadow'>
                          <a href='https://www.linkedin.com/in/vishakhasahu/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin-in'></i>
                          </a>
                        </button>
                    </div>
                </div>

                <div className='col_1'>
                    <h4>Best Skill on</h4>
                    <button className='btn_shadow'>
                      <a href='https://github.com/vish23698sahu' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </button>
                </div>
            </div>
          </div>

          <div className='right'>
            <div className='right_img'>
                <img src={profileP} height='650px' alt='profile' />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;