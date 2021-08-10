import React from 'react';
import './Destination.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../index.css';

const Destination = () => {
  Aos.init();
  return (
    <div className='dd_container'>
      <div
        className='pageHeading dd_heading'
        data-aos='fade-up'
        data-aos-anchor-placement='center-center'
        data-aos-duration='1500'
      >
        Top Selling
      </div>
      <div
        className='pageSubheading dd_subheading'
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
