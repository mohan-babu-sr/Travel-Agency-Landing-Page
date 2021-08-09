import React from 'react';
import './HeroContent.css';
import PlayButton from '../../../content/Playbutton.png';
import 'aos/dist/aos.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroContent = () => {
  Aos.init();
  return (
    <div className='hero_contanier'>
      <div className='hero_çontents'>
        <div className='hero_çontent'>
          <div className='hero_content_1'>
            <span data-aos='fade-up' data-aos-duration='3000'>
              Best Destinations around the world
            </span>
            <br />
            <div
            // data-aos='fade-up'
            // data-aos-anchor-placement='center-center'
            // data-aos-duration='3000'
            >
              Travel, enjoy and live a new and full life
            </div>
          </div>
          <p className='hero_content_2'>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className='hero_div_btn'>
            <button className='hero_button1'>Find out more</button>
            <button className='hero_button2'>
              <img src={PlayButton} alt='Jadoo PlayButton' />
              <span>Play Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

// <div>
//   <div>
//     <div className={classes.plane1}></div>
//     <div className={classes.plane2}></div>
//     <div className={classes.traveller1}></div>
//   </div>
//   {/* <div data-aos='fade-right'> */}
//   <div>
//     <div className={classes.tagline}>
//       Best Destinations around the world
//     </div>
//     <div className={classes.herodecore}>
//       <div className={classes.heading}>
//         Travel, enjoy and live a new and full life
//       </div>
//     </div>
//     <div className={classes.description}>
//       Built Wicket longer admire do barton vanity itself do in it. Preferred
//       to sportsmen it engrossed listening. Park gate sell they west hard for
//       the.
//     </div>
//   </div>
//   <div>
//     <button className={classes.cta}>Find out more</button>
//     <button className={classes.playbutton}>
// <img
//   className={classes.playbuttonimg}
//   src={PlayButton}
//   alt='Jadoo PlayButton'
// />
// <span className={classes.playbuttontext}>Play Demo</span>
//     </button>
//   </div>
// </div>
