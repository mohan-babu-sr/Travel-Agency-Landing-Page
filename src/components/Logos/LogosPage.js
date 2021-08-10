import React from 'react';
import Logo1 from '../../content/logo1.png';
import Logo2 from '../../content/logo2.png';
import Logo3 from '../../content/logo3.png';
import Logo4 from '../../content/logo4.png';
import Logo5 from '../../content/logo5.png';
import classes from './LogosPage.module.css';

const logo = [Logo1, Logo2, Logo3, Logo4, Logo5];

const LogosPage = () => {
  return (
    <div className={classes.logos_container}>
      <marquee behavior='scroll' direction='left' scrollamount='10'>
        {logo.map((data, idx) => (
          <img src={data} key={idx} alt='img' />
        ))}
      </marquee>
    </div>
  );
};

export default LogosPage;
