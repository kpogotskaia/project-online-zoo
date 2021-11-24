import { SectionWrapper } from '../SectionWrapper';
import { Button } from '../Button';
import { TestimonialsSlider } from '../sliders/TestimonialsSlider';
import { Heading } from '../BlockHeading/BlockHeading';

import styles from './style.module.scss';

export const Testimonials = () => {
  return (
    <SectionWrapper className={styles.testimonials}>
      <Heading name='Testimonials' />
      <TestimonialsSlider />
      <Button name='leave feedback' />
    </SectionWrapper>
  );
};
