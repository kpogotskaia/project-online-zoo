import styles from './style.module.scss';

import { Button } from '../Button';
import { PetsInZooSlider } from '../sliders/petsInZoo/index';
import { Heading } from '../BlockHeading/BlockHeading';


export const PetsInZoo = () => {
  return (
    <section className={styles.PetsInZoo}>

      <div className={styles.container}>
        <Heading name='Pets in Zoo'/>
        <PetsInZooSlider />
        <Button name='choose your favorite' />
      </div>
      
    </section>
  );
};
