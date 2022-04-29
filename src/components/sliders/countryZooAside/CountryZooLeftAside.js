import { useState } from 'react';
import { clamp } from '../../../utils';
import classes from './CountryZooLeftAside.module.scss';

const lastVisibleItem = 4;

const reArrangeItems = (arr, shift) =>
  arr.reduce((target, item, i) => {
    target[clamp(i, shift, 0, arr.length)] = item;
    return target;
  }, []);

export const CountryZooLeftAside = (props) => {
  const [slides, setSlides] = useState(props.slides);

  return (
    <aside className={classes['slider']}>
      <div
        className={`
          ${classes['arrow']}
          ${classes['arrow-top']}
        `}
        onClick={e => setSlides(reArrangeItems(slides, 1))}
      ></div>
      {slides.filter((_, i) => i < lastVisibleItem).map((animal, i) => (
        <div
          key={animal.alt}
          className={`
            ${classes['slide']}
            ${i === 0 ? classes['slide--active'] : ''}
          `}
          onClick={() => {
            if (i !== 0) {
              props.setSelectedAnimal(animal);
              setSlides(reArrangeItems(props.slides, -props.slides.findIndex(a => a.alt === animal.alt)));
            }
          }}
        >
          <div
            className={classes['image']}
            style={{backgroundImage: `url('${animal.imgUrl}'`}}
          ></div>
        </div>
      ))}
      <div
        className={`
          ${classes['arrow']}
          ${classes['arrow-bottom']}
        `}
        onClick={e => setSlides(reArrangeItems(slides, -1))}
      ></div>
    </aside>
  );
};
