import React from 'react';
import NavBar from './TopNav/NavBar';
import HeroContent from './HeroContent/HeroContent';
import classes from './HeroPage.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroPage = () => {
  Aos.init();
  return (
    <div className={classes.hp_container}>
      <NavBar />
      <HeroContent />
      <div className={classes.hp_decore}></div>
      <div className={classes.hp_ellipse8}></div>
    </div>
  );
};

export default HeroPage;
