import classes from './style.module.scss'
import { TESTIMONIALS } from '../../constants';
import { Paginator, THEME } from '../../paginator/Paginator';
import React, {useState, useEffect} from "react";

export const TestimonialsSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState(TESTIMONIALS);

  return (
    <>
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
      <Paginator
        amount={TESTIMONIALS.length}
        selected={activeIndex + 1}
        theme={THEME.DARK}
      />
    </>
  );
};



/*
отсчет начинается с первого слайда, current
при нажатии на стрелку влево - первый слайд уходит за визуал экрана,
а тот что был на втором месте - становится на место первого.

при нажатии на стрелку вправо - первый слайд становится на место второго,
в второй уходит с видуала экрана, при этом на экране появляется третий слайд
и становится на место первого. и так по кругу

*/
