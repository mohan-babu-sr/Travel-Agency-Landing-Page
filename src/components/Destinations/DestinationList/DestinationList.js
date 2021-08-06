import React from 'react';
import classes from './DestinationList.module.css';
import Icon from '../../../content/navigation.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DestinationList = () => {
  Aos.init();
  return (
    <div
      className={classes.dl_container}
      data-aos='zoom-out'
      data-aos-duration='1000'
    >
      <div
        className={classes.dl_card1}
        data-aos='flip-up'
        data-aos-duration='1500'
      >
        <div className={classes.dl_content}>
          <div className={classes.dl_details}>
            <div>Rome, Italty</div>
            <div className={classes.dl_amount}>$5,42k</div>
          </div>
          <div className={classes.dl_navigation}>
            <a
              href='https://goo.gl/maps/3DKEY4HW3SVHcPkMA'
              target='_blank'
              className={classes.dl_navimg}
            >
              <img src={Icon} />
            </a>
            <div>10 Days Trip</div>
          </div>
        </div>
      </div>
      <div
        className={classes.dl_card2}
        data-aos='flip-up'
        data-aos-duration='1500'
      >
        <div className={classes.dl_content}>
          <div className={classes.dl_details}>
            <div>London, UK</div>
            <div className={classes.dl_amount}>$4.2k</div>
          </div>
          <div className={classes.dl_navigation}>
            <a
              href='https://goo.gl/maps/26wBmXJX5FbpmpMr9'
              target='_blank'
              className={classes.dl_navimg}
            >
              <img src={Icon} />
            </a>
            <div>12 Days Trip</div>
          </div>
        </div>
      </div>
      <div
        className={classes.dl_card3}
        data-aos='flip-up'
        data-aos-duration='1500'
      >
        <div className={classes.dl_content}>
          <div className={classes.dl_details}>
            <div>Full Europe</div>
            <div className={classes.dl_amount}>$15k</div>
          </div>
          <div className={classes.dl_navigation}>
            <a
              href='https://goo.gl/maps/gHtnuBVyTPW5huF77'
              target='_blank'
              className={classes.dl_navimg}
            >
              <img src={Icon} />
            </a>
            <div>28 Days Trip</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationList;
