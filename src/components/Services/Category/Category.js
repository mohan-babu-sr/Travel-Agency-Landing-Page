import React from 'react';
import './Category.css';
import '../../../index.css';

const Category = () => {
  return (
    <div className='cp_container'>
      <div
        className='pageHeading cp_heading'
        data-aos='fade-up'
        data-aos-delay='50'
        data-aos-duration='2000'
      >
        CATEGORY
      </div>
      <div
        className='pageSubheading cp_subheading'
        data-aos='fade-up'
        data-aos-delay='50'
        data-aos-duration='3000'
      >
        We Offer Best Services
      </div>
    </div>
  );
};

export default Category;
