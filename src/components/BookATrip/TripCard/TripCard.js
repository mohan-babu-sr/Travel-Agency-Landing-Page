import React from 'react';
import classes from './TripCard.module.css';
import CardImage from '../../../content/tripcard.png';
import TripCardImage from '../../../content/TCardImage.png';
import TripCardImage2 from '../../../content/TripCardImg2.png';
const TripCard = () => {
  return (
    <div className={classes.tcd_container}>
      <div className={classes.tcd_decore}>
        <div className={classes.tcd_parentcard}>
          <img className={classes.tcd_parentcardimg1} src={TripCardImage} />
          <img className={classes.tcd_parentcardimg2} src={TripCardImage2} />
        </div>
        {/* <div className={classes.tcd_parentcard}>
          <div>
            <img src={CardImage} />
          </div>
          <div>jkbdaj</div>
        </div> */}
      </div>
    </div>
  );
};

export default TripCard;
