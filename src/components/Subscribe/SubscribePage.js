import React from 'react';
import classes from './SubscribePage.module.css';
import ICON from '../../content/subIcon.png';

const SubscribePage = () => {
  return (
    <div className={classes.subscribe_container}>
      <div className={classes.subscribe_background}>
        <div className={classes.subscribe_heading}>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </div>
        <div className={classes.subscribe_content}>
          <div className={classes.subscribe_form}>
            <div className={classes.subscribe_icon}>
              <img src={ICON} alt='img' />
            </div>
            <div className={classes.subscribe_textField}>
              <input
                className={classes.inputField}
                type='text'
                placeholder='Your email'
                name='email'
                autocomplete='off'
              />
            </div>
          </div>
          <div>
            <button type='submit' className={classes.inputButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
