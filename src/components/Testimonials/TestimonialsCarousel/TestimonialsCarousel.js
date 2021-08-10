import React from 'react';
import './TestimonialsCarousel.css';
import Slider from 'react-slick';

const carouselData = [
  {
    title: 'Testimonials',
    description: 'What people say about Us.',
  },
  {
    title: 'Testimonials 2',
    description: 'What people say about Us.',
  },
  {
    title: 'Testimonials 3',
    description: 'What people say about Us.',
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: '<div class="slick-dots"></div>',
  };
  return (
    <div className='tmc_container'>
      <div className='tmc_carousel'>
        <div>
          <Slider {...settings}>
            {carouselData.map((data, idx) => (
              <div key={idx}>
                <div className='tmc_heading'>{data.title}</div>
                <div className='tmc_subheading'>{data.description}</div>
              </div>
            ))}
            {/* <div>
              <div className='tmc_heading'>Testimonials</div>
              <div className='tmc_subheading'>What people say about Us.</div>
            </div> */}
            {/* <div>
              <div className='tmc_heading'>Testimonials 2</div>
              <div className='tmc_subheading'>What people say about Us.</div>
            </div> */}
            {/* <div>
              <div className='tmc_heading'>Testimonials 3</div>
              <div className='tmc_subheading'>What people say about Us.</div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
