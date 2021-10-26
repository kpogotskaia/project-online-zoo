import classes from './Testimonials.module.scss';

import { Button } from '../button/Button';
import { Paginator} from '../paginator/Paginator';
import { TESTIMONIALS } from '../constants';

const ARR = {
  arrowLeft: '<',
  arrowRight: '>'
};

export const Testimonials = () => {
  return (
    <section className={classes['testimonialses']}>
      <div className={classes['arrow arrow-left']}>{ARR.arrowLeft}</div>
        <div className={classes['container']}>
          <h1 className={classes['testimonialses__heading']}>Testimonials</h1>

          <div className={classes['testimonialses__block']}>
            {TESTIMONIALS.map((testimonials, i) => (
              <div key={i} className={classes['testimonialses__block-info']}>
                <div className={classes['card-user']}>
                  <img src={testimonials.imgUrl} alt={testimonials.alt} />
                </div>
                <h3 className={classes['name']}>{testimonials.heading}</h3>
                <p className={classes['pharagraph']}>{testimonials.desc}</p>
              </div>
            ))}
          </div>

          <Paginator />
          <Button name='leave feedback' />
        </div>
      <div className={classes['arrow arrow-right']}>{ARR.arrowRight}</div>
    </section>
  );
};
