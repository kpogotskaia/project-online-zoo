import classes from './PetsInZoo.module.scss';

import { Button } from '../Button';
import { PetsInZooSlider } from '../sliders/pets-in-zoo/index';
import { ARROW } from '../constants';
import { Heading } from '../block-heading/BlockHeading';


export const PetsInZoo = () => {
  return (
    <section className={classes['section-three']}>
      <div className={classes['arrow-left']}>{ARROW.arrowLeft}</div>
      <div className={classes['container']}>
        <Heading name='Pets in Zoo'/>
        <PetsInZooSlider />
        <Button name='choose your favorite' />

      </div>
      <div className={classes['arrow-right']}>{ARROW.arrowRight}</div>
    </section>
  );
};
