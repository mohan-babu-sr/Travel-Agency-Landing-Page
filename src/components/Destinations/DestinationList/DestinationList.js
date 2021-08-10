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
    <div className={classes.dl_container}>
      {destinationListData.map((data, idx) => (
        <div
          key={idx}
          className={classes.dl_card}
          data-aos='fade-up'
          data-aos-duration='3000'
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
                rel='noreferrer'
                className={classes.dl_navimg}
              >
                <img src={Icon} alt='img' />
              </a>
              <div>{data.duration}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;
