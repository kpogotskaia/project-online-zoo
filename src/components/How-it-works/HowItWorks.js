import { SectionWrapper } from '../SectionWrapper';
import { Button } from '../../components/Button';
import { HowItWorksSlider } from '../../sliders/HowItWorksSlider';
import buttonIcon from '../../assets/buttonIcon.png'
import { BENEFITS } from '../../constants';
import { Heading } from '../Block-heading/BlockHeading';

import styles from './style.module.scss';

export const HowItWorks = () => {
  return (
    <SectionWrapper className={styles.howItWorks}>
      <Heading name='How it Works?'/>

      <p className={styles.howItWorksPharagraph}>
          As a voice for wildlife, we are devastated by the impact
          of the 2020 Australian bushfires on precious species and
          their habitat, and we are determined to assist in all
          aspects, including providing veterinary support and
          raising much-needed emergency funds. Zoo Online saves
          wildlife and inspires everyone to make conservation
          a priority in their lives. Animals have the right
          to a pain-free and happy life. They have equal
          claim to the resources of this planet, and deserve
          a life of dignity and compassion.As a voice for wildlife,
          we are devastated by the impact of the 2020 Australian
          bushfires on precious species and their habitat.
      </p>

      <HowItWorksSlider />
      <Button name='watch online' icon={buttonIcon}/>


      <div className={styles.benefits}>
        {BENEFITS.map((benefits, i) => (
          <div key={i} className={styles.benefitsCard}>
            <img className={styles.benefitsBlockImg} src={benefits.imgUrl} alt={benefits.alt} />
            <h5  className={styles.benefitsBlockHeading}> {benefits.heading} </h5>
            <p className={styles.benefitsBlockPharagraph}>{benefits.pharagraph}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
