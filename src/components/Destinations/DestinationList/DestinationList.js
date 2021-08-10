import React from 'react';
import classes from './DestinationList.module.css';
import Icon from '../../../content/navigation.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CardImage1 from '../../../content/destination-1.png';
import CardImage2 from '../../../content/destination-2.png';
import CardImage3 from '../../../content/destination-3.png';

const destinationListData = [
  {
    title: 'Rome, Italty',
    amount: '$5,42k',
    location: 'https://goo.gl/maps/3DKEY4HW3SVHcPkMA',
    duration: '10 Days Trip',
    image: `${CardImage1}`,
  },
  {
    title: 'London, UK',
    amount: '$4.2k',
    location: 'https://goo.gl/maps/26wBmXJX5FbpmpMr9',
    duration: '12 Days Trip',
    image: `${CardImage2}`,
  },
  {
    title: 'Full Europe',
    amount: '$15k',
    location: 'https://goo.gl/maps/gHtnuBVyTPW5huF77',
    duration: '28 Days Trip',
    image: `${CardImage3}`,
  },
];

const DestinationList = () => {
  Aos.init();

  return (
    <div
      className={classes.dl_container}
      data-aos='zoom-out'
      data-aos-duration='1000'
    >
      {destinationListData.map((data, idx) => (
        <div
          key={idx}
          className={classes.dl_card1}
          data-aos='flip-up'
          data-aos-duration='1500'
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className={classes.dl_content}>
            <div className={classes.dl_details}>
              <div>{data.title}</div>
              <div className={classes.dl_amount}>{data.amount}</div>
            </div>
            <div className={classes.dl_navigation}>
              <a
                href={data.location}
                target='_blank'
                className={classes.dl_navimg}
              >
                <img src={Icon} />
              </a>
              <div>{data.duration}</div>
            </div>
          </div>
        </div>
      ))}
      {/* <div
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
      </div> */}
      {/* <div
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
      </div> */}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default DestinationList;
