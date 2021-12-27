import { Button } from '../Button';
import { PetsInZooSlider } from '../sliders/PetsInZooSlider';
import { Heading } from '../BlockHeading/BlockHeading';
import { SectionWrapper } from '../SectionWrapper';

export const PetsInZoo = () => {
  return (
    <SectionWrapper>
      <Heading name='Pets in Zoo'/>
      <PetsInZooSlider />
      <Button name='choose your favorite' />
    </SectionWrapper>
  );
};
