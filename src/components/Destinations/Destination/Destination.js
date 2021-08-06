import React from 'react';
import classes from './Destination.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Destination = () => {
  Aos.init();
  return (
    <div className={classes.dd_container}>
      <div
        className={classes.dd_heading}
        data-aos='fade-up'
        data-aos-anchor-placement='center-center'
        data-aos-duration='1500'
      >
        Top Selling
      </div>
      <div
        className={classes.dd_subheading}
        data-aos='fade-up'
        data-aos-anchor-placement='center-center'
        data-aos-duration='1500'
      >
        Top Destinations
      </div>
    </div>
  );
};

export default Destination;
