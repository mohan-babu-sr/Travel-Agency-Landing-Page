import React from 'react';
import './HeroContent.css';
import PlayButton from '../../../content/Playbutton.png';
import 'aos/dist/aos.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroContent = () => {
  Aos.init();
  return (
    <div className='hero_container'>
      <div className='hero_çontents'>
        <div className='hero_çontent'>
          <div className='hero_content_1'>
            <span data-aos='fade-up' data-aos-duration='3000'>
              Best Destinations around the world
            </span>
            <br />
            <div>Travel, enjoy and live a new and full life</div>
          </div>
          <p
            className='hero_content_2'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className='hero_div_btn'>
            <button
              className='hero_button1'
              data-aos='fade-up'
              data-aos-duration='2400'
            >
              Find out more
            </button>
            <button
              className='hero_button2'
              data-aos='fade-up'
              data-aos-duration='2400'
            >
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
