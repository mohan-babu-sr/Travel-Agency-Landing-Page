import React from 'react';
import classes from './TripContent.module.css';
import V1 from '../../../content/value1.png';
import V2 from '../../../content/value2.png';
import V3 from '../../../content/value3.png';

const TripContent = () => {
  return (
    <div className={classes.tc_container}>
      <div className={classes.tc_subheading}>Easy and Fast</div>
      <div className={classes.tc_heading}>
        Book your next trip in 3 easy steps
      </div>
      <div className={classes.tc_values}>
        <img src={V1} />
        <div>
          <div className={classes.tc_valuesh}>Choose Destination</div>
          <div className={classes.tc_valuessh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </div>
        </div>
      </div>
      <div className={classes.tc_values}>
        <img src={V2} />
        <div>
          <div className={classes.tc_valuesh}>Make Payment</div>
          <div className={classes.tc_valuessh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </div>
        </div>
      </div>
      <div className={classes.tc_values}>
        <img src={V3} />
        <div>
          <div className={classes.tc_valuesh}>
            Reach Airport on Selected Date
          </div>
          <div className={classes.tc_valuessh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripContent;
