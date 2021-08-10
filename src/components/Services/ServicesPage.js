import React from 'react';
import Category from './Category/Category';
import CategoryList from './CategoryList/CategoryList';
import classes from './ServicesPage.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  Aos.init();
  return (
    <div className={classes.sp_container} id='service_page'>
      <div className={classes.sp_contents}>
        <Category />
        <div
          className={classes.sp_group4}
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='1000'
        />
        <CategoryList />
      </div>
    </div>
  );
};

export default ServicesPage;
