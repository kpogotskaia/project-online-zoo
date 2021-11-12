import { useState } from 'react';
import { Paginator, THEME } from '../../paginator/Paginator';
import { ANIMALS } from '../../constants';
import { ActiveBtnSlider } from '../active-btn-slider';

import classes from './SliderFavoriteAnimal.module.scss';

export const SliderFavoriteAnimal = () => {

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(1);

  return (
    <div className={classes['slider']}>
      <div className={classes['slider__line']}>
        <div className={classes['slider__line-ellipse']}>
          <div></div>
        </div>
      </div>

      <ActiveBtnSlider />
      <Paginator
        amount={ANIMALS.length}
        selected={selectedSlideIndex + 1}
        theme={THEME.LIGHT}
      />
    </div>
  );
};
