import React from 'react';
import './TestimonialsCarousel.css';
import Slider from 'react-slick';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
  Aos.init();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  console.log(carouselData);
  return (
    <div className='tmc_container'>
      <div className='tmc_carousel'>
        <div>
          <Slider {...settings}>
            {carouselData.map((data, idx) => (
              <div key={idx}>
                <div
                  className='pageHeading tmc_heading'
                  data-aos='fade-left'
                  data-aos-delay='50'
                  data-aos-duration='3000'
                >
                  {data.title}
                </div>
                <div
                  className='pageSubheading tmc_subheading'
                  data-aos='fade-up'
                  data-aos-delay='50'
                  data-aos-duration='3000'
                >
                  {data.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
