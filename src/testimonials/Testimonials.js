import classes from './Testimonials.module.scss';

import { Button } from '../button/Button';
import { ARROW } from '../constants';
import { TestimonialsSlider } from '../sliders/testimonials';
import { Heading } from '../block-heading/BlockHeading';

export const Testimonials = () => {
  return (
    <section className={classes['testimonialses']}>
      <div className={classes['arrow-left']}>{ARROW.arrowLeft}</div>
        <div className={classes['container']}>
          <Heading name='Testimonials' />
          <TestimonialsSlider />
          <Button name='leave feedback' />
        </div>
      <div className={classes['arrow-right']}>{ARROW.arrowRight}</div>
    </section>
  );
};
