import { Button } from '../Button';
import { SliderFavoriteAnimal } from '../sliders/sliderOne/SliderFavoriteAnimal';
import { SOCIAL_ICONS } from '../../constants';
import '../../assets/glery1screen/wild.jpg';
import buttonIcon from '../../assets/buttonIcon.png';
import styles from './style.module.scss';

export const SectionOne = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <h1 className={styles.mainSectionHeading}>
          Watch your favorite animal online
        </h1>

        <Button name='watch online' icon={buttonIcon} />

        <div className={styles.mainSectionSociales}>
          {SOCIAL_ICONS.map(data => (
            <a key={data.description} href={data.link}>
              <img src={data.imgUrl} alt={data.description} />
            </a>
          ))}
        </div>

        <SliderFavoriteAnimal />
      </div>
    </section>
  );
};

