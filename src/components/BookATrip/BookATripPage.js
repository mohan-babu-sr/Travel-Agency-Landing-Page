import React from 'react';
import classes from './BookATripPage.module.css';
import TripCard from './TripCard/TripCard';
import TripContent from './TripContent/TripContent';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BookATripPage = () => {
  Aos.init();
  return (
    <div className={classes.bt_container}>
      <div className={classes.bt_contents}>
        <TripContent />
        <TripCard />
      </div>
    </div>
  );
};

export default BookATripPage;
