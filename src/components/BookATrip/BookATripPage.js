import React from 'react';
import classes from './BookATripPage.module.css';
import TripCard from './TripCard/TripCard';
import TripContent from './TripContent/TripContent';

const BookATripPage = () => {
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
