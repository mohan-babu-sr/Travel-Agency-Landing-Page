import React, { Component } from 'react';
import Slider from 'react-slick';
import UserImage from '../../../content/UserImage.png';
import './TestimonialsPagination.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export default class TestimonialsPagination extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      vertical: true,
    };
    return (
      <div className='tmp_container'>
        <div className='tmp_containerCard'>
          <Slider {...settings}>
            <div className='tmp_card'>
              <div className='tmp_cardContent'>
                <div className='tmp_userImg'>
                  <img src={UserImage} />
                </div>
                <div className='tmp_details'>
                  <div className='tmp_desc'>
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Of
                    believed or diverted no.”
                  </div>
                  <div className='tmp_auth'>Mike taylor</div>
                  <div className='tmp_position'>Lahore, Pakistan</div>
                </div>
              </div>
            </div>
            <div className='tmp_card'>
              <div className='tmp_cardContent'>
                <div className='tmp_userImg'>
                  <img src={UserImage} />
                </div>
                <div className='tmp_details'>
                  <div className='tmp_desc'>
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Of
                    believed or diverted no.”
                  </div>
                  <div className='tmp_auth'>Chris Thomas</div>
                  <div className='tmp_position'>CEO of Red Button</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

// import React from 'react';
// import classes from './TestimonialsPagination.module.css';

// const TestimonialsPagination = () => {
//   return <div className={classes.tmp_container}>

//   </div>;
// };

// export default TestimonialsPagination;
