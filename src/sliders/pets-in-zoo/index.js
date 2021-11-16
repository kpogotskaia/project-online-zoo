
import { useState } from 'react';
import { ANIMALS } from '../../constants';
import { Paginator, THEME } from '../../components/Paginator/Paginator';

import classes from './style.module.scss';

const clamp = (cur, shift, minInclusive, maxExclusive) => {
  const target = cur + shift;
  return target >= minInclusive
    ? target < maxExclusive
      ? target
      : minInclusive
    : maxExclusive + target;
};

const reArrangeItems = (arr, shift) =>
  arr.reduce((target, item, i) => {
    target[clamp(i, shift, 0, arr.length)] = item;
    return target;
  }, []);

export const PetsInZooSlider = () => {

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(1);
  const [slides, setSlides] = useState(ANIMALS);

  return (
    <div className={classes['slider']}>
          <div className={classes['slider-slides']}>
      {slides.map((animal, i) =>
        <div
          key={animal.alt}
          className={`
            ${classes['slider__slide']}
            ${i === 0 ? classes['slider__slide--active'] : ''}
          `}
          style={{backgroundImage: `url('${animal.imgUrl}'`}}
          onClick={() => {
            if (0 !== i) {
              const shift = i === 0 ? 1 : -(i - 1);
              const reArranged = reArrangeItems(slides, shift);
              const selectedInd = ANIMALS.findIndex(a => a.alt === reArranged[1].alt);
              setSlides(reArranged);
              setSelectedSlideIndex(selectedInd);
            }
          }}
        >
          <p className={classes['slider__slide-info']}>
          {animal.desc}
          </p>
          <div className={classes['slider__slide-btns']}>
            <button className={classes['slider__slide-btn']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11.5" />
                <path d="M16 12L10 15.4641V8.5359L16 12Z" />
              </svg>
              watch online
            </button>
            <button className={classes['slider__slide-btn']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11.5" />
                <path d="M14.1982 15.6602C14.1982 15.1621 14.04 14.752 13.7236 14.4297C13.4072 14.1016 12.8799 13.8086 12.1416 13.5508C11.4033 13.2871 10.8291 13.0439 10.4189 12.8213C9.05371 12.0889 8.37109 11.0049 8.37109 9.56934C8.37109 8.59668 8.66699 7.79687 9.25879 7.16992C9.85059 6.54297 10.6533 6.1709 11.667 6.05371V4.1377H13.0732V6.07129C14.0928 6.21777 14.8809 6.65137 15.4375 7.37207C15.9941 8.08691 16.2725 9.01855 16.2725 10.167H14.1455C14.1455 9.42871 13.9785 8.84863 13.6445 8.42676C13.3164 7.99902 12.8682 7.78516 12.2998 7.78516C11.7373 7.78516 11.2979 7.9375 10.9814 8.24219C10.665 8.54688 10.5068 8.9834 10.5068 9.55176C10.5068 10.0615 10.6621 10.4717 10.9727 10.7822C11.2891 11.0869 11.8223 11.377 12.5723 11.6523C13.3223 11.9277 13.9111 12.1826 14.3389 12.417C14.7666 12.6514 15.127 12.9209 15.4199 13.2256C15.7129 13.5244 15.9385 13.8701 16.0967 14.2627C16.2549 14.6553 16.334 15.1152 16.334 15.6426C16.334 16.6328 16.0293 17.4355 15.4199 18.0508C14.8164 18.666 13.9727 19.0293 12.8887 19.1406V20.8545H11.4912V19.1494C10.3311 19.0205 9.4375 18.6045 8.81055 17.9014C8.18945 17.1982 7.87891 16.2666 7.87891 15.1064H10.0146C10.0146 15.8447 10.1992 16.416 10.5684 16.8203C10.9434 17.2246 11.4707 17.4268 12.1504 17.4268C12.8184 17.4268 13.3252 17.2656 13.6709 16.9434C14.0225 16.6211 14.1982 16.1934 14.1982 15.6602Z" />
              </svg>
              donate
            </button>
          </div>
        </div>
      )}
      </div>
      <Paginator
          amount={ANIMALS.length}
          selected={selectedSlideIndex + 1}
          theme={THEME.LIGHT}
      />
    </div>
  );
};
