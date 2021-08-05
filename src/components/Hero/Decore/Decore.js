import React from 'react';
import Ellipse8 from '../../../content/Ellipse 8.png';
import classes from './Decore.module.css';

const Decore = () => {
  return (
    <div>
      <img className={classes.ellipse8} src={Ellipse8} alt='Jadoo Ellipse8' />
      <div className={classes.decore}></div>
    </div>
  );
};

export default Decore;
