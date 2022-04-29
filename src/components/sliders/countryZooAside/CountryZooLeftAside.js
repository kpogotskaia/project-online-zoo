import { useState } from 'react';
import { ANIMALS} from '../../../constants';
import { clamp } from '../../../utils';
import classes from './CountryZooLeftAside.module.scss';

const reArrangeItems = (arr, shift) =>
  arr.reduce((target, item, i) => {
    target[clamp(i, shift, 0, arr.length)] = item;
    return target;
  }, []);

export const CountryZooLeftAside = () => {
  const [slides, setSlides] = useState(ANIMALS);

  return (
    <aside className={classes['left-menu']}>
      <div className={classes['left-menu__imgs']}>
        <div>
          {slides.map((animals, i) => (
            <div
              key={animals.alt}
              className={`
                ${classes['slide']}
                ${i === 0 ? classes['slide--active'] : ''}
              `}
              onClick={() => {
                if (i !== 0) {
                  setSlides(reArrangeItems(slides, -i));
                }
              }}
            >
              <div style={{backgroundImage: `url('${animals.imgUrl}'`}}></div>
            </div>
          ))}

          <div
            className={`
              ${classes['arrow']}
              ${classes['arrow-top']}
            `}
            onClick={e => setSlides(reArrangeItems(slides, 1))}
          ></div>

          <div
            className={`
              ${classes['arrow']}
              ${classes['arrow-bottom']}
            `}
            onClick={e => setSlides(reArrangeItems(slides, -1))}
          ></div>
        </div>
      </div>
    </aside>
  );
};
