import { useState } from 'react';
import { LEFT_MENU_ARROW, ANIMALS} from '../../../constants';
import { clamp } from '../../../utils';
import classes from './CountryZooLeftAside.module.scss';

const reArrangeItems = (arr, shift) =>
  arr.reduce((target, item, i) => {
    target[clamp(i, shift, 0, arr.length)] = item;
    return target;
  }, []);

export const CountryZooLeftAside = () => {

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(1);
  const [slides, setSlides] = useState(ANIMALS);

  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlideIndex = (shift) => {
    setActiveIndex(clamp(activeIndex, shift, 0, ANIMALS.length));
  };

  let curOffset = offset;

  return (
    <aside className={classes['left-menu']}>
      <div className={`
        ${classes['left-menu__imgs']}
        ${classes['slidesMove']}
        `}
        style={{bottom: `-${offset * activeIndex}px`}}
        >

        {slides.map((animals, i) => (
          <div
            key={animals.alt}
            className={`
            ${classes['left-menu__animal']}
            ${i === 0 ? classes['left-menu--active'] : ''}
            `}
            style={{backgroundImage: `url('${animals.imgUrl}'`}}
            onClick={() => {
              if (0 !== i) {
                const shift = i === 0 ? 1 : -i;
                const reArranged = reArrangeItems(slides, shift);
                const selectedInd = ANIMALS.findIndex(a => a.alt === reArranged[0].alt);
                setSlides(reArranged);
                setSelectedSlideIndex(selectedInd);
              }
            }}

            ref={e => {
              if (e) {
                // 33 - vertical margin
                const nextOffset = e.offsetWidth + 33;

                if (curOffset !== nextOffset) {
                  setOffset(nextOffset);
                  curOffset = nextOffset;
                }
              }
            }}
          >
          </div>
        ))}
      </div>

      <div
        className={`
        ${classes['arrow']}
        ${classes['arrow-top']}
        `}
        onClick={e => changeSlideIndex(-1)}
      ></div>

        <div
          className={`
          ${classes['arrow']}
          ${classes['arrow-bottom']}
          `}
          onClick={e => changeSlideIndex(1)}
        ></div>
  </aside>
  );
};


