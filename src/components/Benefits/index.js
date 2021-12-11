import { SectionWrapper } from '../SectionWrapper';
import { BENEFITS } from '../../constants';

import styles from './style.module.scss';

export const Benefits = () => {
  return (
    <SectionWrapper className={styles.benefits}>
      {BENEFITS.map((benefits, i) => (
        <div key={i} className={styles.benefitsCard}>
          <img className={styles.benefitsCardBlockImg} src={benefits.imgUrl} alt={benefits.alt} />
          <h5 className={styles.benefitsCardBlockHeading}> {benefits.heading} </h5>
          <p className={styles.benefitsCardBlockPharagraph}>{benefits.pharagraph}</p>
        </div>
      ))}
    </SectionWrapper>
  );
};
