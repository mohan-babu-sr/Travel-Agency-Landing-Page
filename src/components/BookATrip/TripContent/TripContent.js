import React from 'react';
import './TripContent.css';
import '../../../index.css';
import V1 from '../../../content/value1.png';
import V2 from '../../../content/value2.png';
import V3 from '../../../content/value3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const tripContent = [
  {
    title: 'Choose Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    image: V1,
  },
  {
    title: 'Make Payment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    image: `${V2}`,
  },
  {
    title: 'Reach Airport on Selected Date',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    image: `${V3}`,
  },
];

const TripContent = () => {
  Aos.init();
  return (
    <div className='tc_container'>
      <div
        className='pageHeading tc_heading'
        data-aos='fade-up'
        data-aos-delay='50'
        data-aos-duration='1000'
      >
        Easy and Fast
      </div>
      <div
        className='pageSubheading tc_subheading'
        data-aos='fade-up'
        data-aos-delay='50'
        data-aos-duration='1500'
      >
        Book your next trip in 3 easy steps
      </div>
      {tripContent.map((data, idx) => (
        <div className='tc_values' key={idx}>
          <img
            src={data.image}
            alt='img'
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='2000'
          />
          <div>
            <div
              className='tc_valuesH'
              data-aos='fade-up'
              data-aos-delay='50'
              data-aos-duration='2000'
            >
              {data.title}
            </div>
            <div
              className='tc_valuesSH'
              data-aos='fade-up'
              data-aos-delay='50'
              data-aos-duration='3000'
            >
              {data.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripContent;
