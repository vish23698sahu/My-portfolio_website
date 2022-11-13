import React, { Fragment } from 'react';
import Header from './Component/Head/Header';
import Home from './Component/HomeH/Home';
// import Features from './Component/Features/Features';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import './App.css';
import Footer from './Component/Footer';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      {/* <Features /> */}
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App;