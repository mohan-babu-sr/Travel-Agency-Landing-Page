import React from 'react';
import classes from './FooterPage.module.css';
import SOCIAL1 from '../../content/fb.png';
import SOCIAL2 from '../../content/insta.png';
import SOCIAL3 from '../../content/twit.png';
import GoogleStore from '../../content/GooglePlay.png';
import PlayStore from '../../content/PlayStore.png';

const navRow1 = ['Company', 'About', 'Carrers', 'Mobile'];
const navRow2 = ['Contact', 'Help/FAQ', 'Press', 'Affilates'];
const navRow3 = ['More', 'Airlinefees', 'Airline', 'Low fare tips'];
const FooterPage = () => {
  //   for (const i in navRow1) {
  //     console.log(navRow1[i]);
  //   }
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
          <div className={classes.footer_2c}>
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
          </div>
        </div>

        <div className={classes.footer_3}>
          <div className={classes.footer_socials}>
            <div className={classes.footer_social}>
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
            </div>
            <div className={classes.footer_social}>
              <a href='https://twitter.com/home' target='_blank'>
                <img src={SOCIAL3} />
              </a>
            </div>
          </div>
          <div className={classes.footer_footer32}>
            <div>Discover our app</div>
          </div>
          <div className={classes.footer_footer33}>
            <a href='https://play.google.com/store' target='_blank'>
              <img src={GoogleStore} />
            </a>
            <a href='https://www.apple.com/in/app-store/' target='_blank'>
              <img src={PlayStore} />
            </a>
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
