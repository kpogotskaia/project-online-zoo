import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
import { CountryZooLeftAside } from '../components/sliders/countryZooAside/CountryZooLeftAside';
import { CountryZooVideo } from '../components/sliders/countryZooVideo/CountryZooVideo';
import { Button } from '../components/Button';
import { COUNTRY_ZOO_DESCRIPTION } from '../constants';

import styles from './style.module.scss';

export const CountryZoo = () => [
  <Header key="0" />,
  <section key="1" className={styles.infoZoo}>
    <div className={styles.container}>
      <div className={styles.infoZooContent}>
        <CountryZooLeftAside />

        <div className={styles.content}>
          <CountryZooVideo />

          <div className={styles.contentInfo}>
            {COUNTRY_ZOO_DESCRIPTION.map((info, i) => [
              <div key={i}>
                <h5 className={styles.heading}>{info.heading}</h5>
                <p className={styles.pharagraph}>{info.desc}</p>
              </div>
            ])}

            <Button className={styles.contentButton} name='feed'/>
          </div>
        </div>
      </div>
    </div>
  </section>,
  <Footer key="2" />
];
