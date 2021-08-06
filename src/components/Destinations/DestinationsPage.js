import React from 'react';
import Destination from './Destination/Destination';
import DestinationList from './DestinationList/DestinationList';
import classes from './DestinationsPage.module.css';

const DestinationsPage = () => {
  return (
    <div className={classes.dp_container}>
      <Destination />
      <DestinationList />
    </div>
  );
};

export default DestinationsPage;
