import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel/TestimonialsCarousel';
import classes from './TestimonialsPage.module.css';
import TestimonialsPagination from './TestimonialsPagination/TestimonialsPagination';

const TestimonialsPage = () => {
  return (
    <div>
      <div className={classes.tm_container}>
        <div className={classes.tm_contents}>
          <TestimonialsCarousel />
          <TestimonialsPagination />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
