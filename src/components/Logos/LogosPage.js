import React from 'react';
import Logo1 from '../../content/logo1.png';
import Logo2 from '../../content/logo2.png';
import Logo3 from '../../content/logo3.png';
import Logo4 from '../../content/logo4.png';
import Logo5 from '../../content/logo5.png';
import classes from './LogosPage.module.css';

const LogosPage = () => {
  return (
    <div className={classes.logos_container}>
      <marquee behavior='scroll' direction='left' scrollamount='10'>
        <img src={Logo1} />
        <img src={Logo2} />
        <img src={Logo3} />
        <img src={Logo4} />
        <img src={Logo5} />
      </marquee>
    </div>
  );
};

export default LogosPage;
