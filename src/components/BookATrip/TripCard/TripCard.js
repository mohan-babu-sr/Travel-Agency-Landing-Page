import React from 'react';
import classes from './TripCard.module.css';
import TripCardImage from '../../../content/TCardImage.png';
import TripCardImage2 from '../../../content/TripCardImg2.png';
const TripCard = () => {
  return (
    <div className={classes.tcd_container}>
      <div className={classes.tcd_decore}>
        <div className={classes.tcd_parentCard}>
          <img
            className={classes.tcd_parentCardImg1}
            src={TripCardImage}
            alt='img'
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='2000'
          />
          <img
            className={classes.tcd_parentCardImg2}
            src={TripCardImage2}
            alt='img'
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='3000'
          />
        </div>
      </div>
    </div>
  );
};

export default TripCard;
