import React, { useState } from 'react';
import classNames from 'classnames';

import { TESTIMONIALS } from '../../../constants';
import { Paginator, THEME } from '../../Paginator/index';
import { clamp } from '../../../utils';

import styles from './style.module.scss';

export const TestimonialsSlider = () => {
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlideIndex = (shift) => {
    setActiveIndex(clamp(activeIndex, shift, 0, TESTIMONIALS.length));
  };

  let curOffset = offset;

  return (
    <div className={styles.testimonialsSlider}>
      <div className={styles.slidesContainer}>
        <div className={styles.slides}>
          <div
            className={styles.slidesMove}
            style={{left: `-${offset * activeIndex}px`}}
          >
            {TESTIMONIALS.map((testimonials, i) => (
              <div
                key={i}
                ref={e => {
                  if (e) {

                    // 20 - horizontal margin
                    const nextOffset = e.offsetWidth + 20;

                    if (curOffset !== nextOffset) {
                      setOffset(nextOffset);
                      curOffset = nextOffset;
                    }
                  }
                }}
                className={classNames(styles.slide, {
                  [styles.slideActive]: activeIndex === i
                })}
              >
                <img src={testimonials.imgUrl} alt={testimonials.alt} />
                <h3 className={styles.name}>{testimonials.heading}</h3>
                <p className={styles.pharagraph}>{testimonials.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={classNames(styles.arrow, styles.arrowLeft)}
          onClick={e => changeSlideIndex(-1)}
        ></div>

        <div
          className={classNames(styles.arrow, styles.arrowRight)}
          onClick={e => changeSlideIndex(1)}
        ></div>
      </div>

      <Paginator
        className={styles.paginator}
        amount={TESTIMONIALS.length}
        selected={activeIndex + 1}
        theme={THEME.DARK}
      />
    </div>
  );
};
