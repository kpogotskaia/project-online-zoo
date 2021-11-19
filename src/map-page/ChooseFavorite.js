import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
import { Heading } from '../components/Block-heading/BlockHeading';
import { MapPageGallery } from '../sliders/map-page';
import { SectionWrapper } from '../components/SectionWrapper/index';

import buttonIcon from './../assets/buttonIcon.png'

import styles from './ChooseFavorite.module.scss';
import { Button } from '../components/Button';
import { MapPageBlock } from '../components/Map-page-block';

export const ChooseFavorite = () => ([
  <Header key="0" />,
  <SectionWrapper key="1" className={styles.ChooseFavorite}>
      <Heading name='Choose your favorite'/>
      <p className={styles.pharagraphSection}>
        As a voice for wildlife, we are devastated
        by the impact of the 2020 Australian bushfires
        on precious species and their habitat, and we
        are determined to assist in all aspects, including
        viding veterinary support and raising much-needed
        emergency funds. Zoo Online saves wildlife and
        inspires everyone to make conservation a priority
        in their lives. Animals have the right to a pain-free
        and happy life. They have equal claim to the resources
        of this planet, and deserve a life of dignity and
        compassion.As a voice for wildlife, we are devastated
        by the impact of the 2020 Australian bushfires on
        precious species and their habitat.
      </p>

      <MapPageGallery />
      <MapPageBlock />
      <Button name='watch online' icon={buttonIcon}/>

  </SectionWrapper>,
  <Footer key="2" />
]);
