import { useState } from 'react';

import { TESTIMONIALS } from '../../constants';
import { Paginator, THEME } from '../../components/Paginator/Paginator';
import { ARROW } from '../../constants';

import styles from './style.module.scss'

export const TestimonialsSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.testimonialsSlider}>
      <div className={styles.arrowLeft}>{ARROW.arrowLeft}</div>
      <div className={styles.arrowRight}>{ARROW.arrowRight}</div>

      <div className={styles.slides}>
        {TESTIMONIALS.map((testimonials, i) => (
          <div key={i} className={styles.slide}>
            <img src={testimonials.imgUrl} alt={testimonials.alt} />
            <h3 className={styles.name}>{testimonials.heading}</h3>
            <p className={styles.pharagraph}>{testimonials.desc}</p>
          </div>
        ))}
      </div>

      <Paginator
        amount={TESTIMONIALS.length}
        selected={activeIndex + 1}
        theme={THEME.DARK}
      />
    </div>
  );
};
