import React from 'react';
import classes from './FooterPage.module.css';
import SOCIAL1 from '../../content/fb.png';
import SOCIAL2 from '../../content/insta.png';
import SOCIAL3 from '../../content/twit.png';
import GoogleStore from '../../content/GooglePlay.png';
import PlayStore from '../../content/PlayStore.png';

const footerData = [
  { title: 'Company', des1: 'About', des2: 'Carrers', des3: 'Mobile' },
  { title: 'Contact', des1: 'Help/FAQ', des2: 'Press', des3: 'Affilates' },
  {
    title: 'More',
    des1: 'Airlinefees',
    des2: 'Airline',
    des3: 'Low fare tips',
  },
];

const footerSocial = [
  { link: 'https://en-gb.facebook.com/', image: SOCIAL1 },
  { link: 'https://www.instagram.com/accounts/login/', image: SOCIAL2 },
  { link: 'https://twitter.com/home', image: SOCIAL3 },
];
const footerStore = [
  { link: 'https://play.google.com/store', image: GoogleStore },
  { link: 'https://www.apple.com/in/app-store/', image: PlayStore },
];

const FooterPage = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_content}>
        <div className={classes.footer_1}>
          <div className={classes.footer_company}>Jadoo.</div>
          <div className={classes.footer_companyDesc}>
            Book your trip in minute, get full Control for much longer.
          </div>
        </div>
        <div className={classes.footer_2}>
          {footerData.map((data, idx) => (
            <div className={classes.footer_2c} key={idx}>
              <div className={classes.fTitle}>{data.title}</div>
              <div className={classes.fDesc}>{data.des1}</div>
              <div className={classes.fDesc}>{data.des2}</div>
              <div className={classes.fDesc}>{data.des3}</div>
            </div>
          ))}
        </div>

        <div className={classes.footer_3}>
          <div className={classes.footer_socials}>
            {footerSocial.map((data, idx) => (
              <div className={classes.footer_social} key={idx}>
                <a href={data.link} target='_blank' rel='noreferrer'>
                  <img src={data.image} alt='img' />
                </a>
              </div>
            ))}
          </div>

          <div className={classes.footer_footer32}>
            <div>Discover our app</div>
          </div>
          <div className={classes.footer_footer33}>
            {footerStore.map((data, idx) => (
              <a href={data.link} target='_blank' rel='noreferrer' key={idx}>
                <img src={data.image} alt='img' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.footer_copyright}>
        All rights reserved@jadoo.co
      </div>
    </div>
  );
};

export default FooterPage;
