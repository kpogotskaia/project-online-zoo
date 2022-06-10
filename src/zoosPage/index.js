import {useState} from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
import { CountryZooLeftAside } from '../components/sliders/countryZooAside/CountryZooLeftAside';
import { CountryZooVideo } from '../components/sliders/countryZooVideo/CountryZooVideo';
import { Button } from '../components/Button';

import styles from './style.module.scss';

export const CountryZoo = ({animals}) => {
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);
  const selectedAnimal = animals[selectedAnimalIndex];

  return [
    <Header key="0" />,
    <section key="1" className={styles['country-zoo']}>
      <CountryZooLeftAside
        slides={animals}
        selectedAnimalIndex={selectedAnimalIndex}
        setSelectedAnimalIndex={setSelectedAnimalIndex}
      />

      <div className={styles.content}>
        <h2 className={styles['page-title']}>
          The Beijing Zoo
        </h2>
        <div className={styles['horizontal-section']}>
          <CountryZooVideo videos={selectedAnimal.videos} />
          <div className={styles.contentInfo}>
            <div>
              <h5 className={styles.heading}>Population:</h5>
              <p className={styles.pharagraph}>About {selectedAnimal.population} individuals</p>
            </div>
            <div>
              <h5 className={styles.heading}>Habitat:</h5>
              <p className={styles.pharagraph}>{selectedAnimal.habitat}</p>
            </div>
            <div>
              <h5 className={styles.heading}>Diet:</h5>
              <p className={styles.pharagraph}>{selectedAnimal.descLong}</p>
            </div>
            <div>
              <h5 className={styles.heading}>Donated:</h5>
              <p className={styles.pharagraph}>{selectedAnimal.donated}</p>
            </div>
            <Button name='feed'/>
          </div>
        </div>
      </div>
    </section>,
    <Footer key="2" />
  ];
};
