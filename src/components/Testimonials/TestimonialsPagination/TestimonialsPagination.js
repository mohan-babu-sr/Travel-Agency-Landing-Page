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

const paginationData = [
  {
    author: 'Mike taylor',
    position: 'Lahore, Pakistan',
    description:
      ' “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    image: UserImage,
  },
  {
    author: 'Chris Thomas',
    position: 'CEO of Red Button',
    description:
      ' “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    image: UserImage,
  },
];

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
            {paginationData.map((data, idx) => (
              <div className='tmp_card' key={idx}>
                <div className='tmp_cardContent'>
                  <div>
                    <img src={data.image} alt='img' />
                  </div>
                  <div className='tmp_details'>
                    <div className='tmp_desc'>{data.description}</div>
                    <div className='tmp_auth'>{data.author}</div>
                    <div className='tmp_position'>{data.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
