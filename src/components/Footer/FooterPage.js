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
          {/* <div className={classes.footer_2c}>
            <div className={classes.fTitle}>Company</div>
            <div className={classes.fDesc}>About</div>
            <div className={classes.fDesc}>Carrers</div>
            <div className={classes.fDesc}>Mobile</div>
          </div>

          <div className={classes.footer_2c}>
            <div className={classes.fTitle}>Contact</div>
            <div className={classes.fDesc}>Help/FAQ</div>
            <div className={classes.fDesc}>Press</div>
            <div className={classes.fDesc}>Affilates</div>
          </div>

          <div className={classes.footer_2c}>
            <div className={classes.fTitle}>More</div>
            <div className={classes.fDesc}>Airlinefees</div>
            <div className={classes.fDesc}>Airline</div>
            <div className={classes.fDesc}>Low fare tips</div>
          </div> */}
        </div>

        <div className={classes.footer_3}>
          <div className={classes.footer_socials}>
            {footerSocial.map((data, idx) => (
              <div className={classes.footer_social} key={idx}>
                <a href={data.link} target='_blank'>
                  <img src={data.image} />
                </a>
              </div>
            ))}
            {/* <div className={classes.footer_social}>
              <a href='https://en-gb.facebook.com/' target='_blank'>
                <img src={SOCIAL1} />
              </a>
            </div>

            <div className={classes.footer_social}>
              <a
                href='https://www.instagram.com/accounts/login/'
                target='_blank'
              >
                <img src={SOCIAL2} />
              </a>
            </div> */}
          </div>

          <div className={classes.footer_footer32}>
            <div>Discover our app</div>
          </div>
          <div className={classes.footer_footer33}>
            {footerStore.map((data, idx) => (
              <a href={data.link} target='_blank' key={idx}>
                <img src={data.image} />
              </a>
            ))}
            {/* <a href='https://play.google.com/store' target='_blank'>
              <img src={GoogleStore} />
            </a>
            <a href='https://www.apple.com/in/app-store/' target='_blank'>
              <img src={PlayStore} />
            </a> */}
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
