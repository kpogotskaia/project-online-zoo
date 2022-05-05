import { Paginator, THEME} from '../../Paginator/index';
import React, {useState} from "react";
import classes from './style.module.scss';
import { ANIMALS } from '../../../constants';
import { clamp } from '../../../utils';

const reArrangeItems = (arr, shift) =>
  arr.reduce((target, item, i) => {
    target[clamp(i, shift, 0, arr.length)] = item;
    return target;
  }, []);

export const MapPageGallery = () => {

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
                ${i === 1 ? classes['slider__slide--active'] : ''}
              `}
              style={{backgroundImage: `url('${animal.imgUrl}'`}}
              onClick={() => {
                if (1 !== i) {
                  const shift = i === 0 ? 1 : -(i - 1);
                  const reArranged = reArrangeItems(slides, shift);
                  const selectedInd = ANIMALS.findIndex(a => a.alt === reArranged[1].alt);
                  setSlides(reArranged);
                  setSelectedSlideIndex(selectedInd);
                }
              }}
            >
            </div>
          )}
        </div>

        <div className={classes['paginatorSlider']}>
          <Paginator
            amount={ANIMALS.length}
            selected={selectedSlideIndex + 1}
            theme={THEME.LIGHT}
          />
        </div>
      </div>
  );
};
