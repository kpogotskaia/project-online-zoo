import { Button } from '../button/Button';
import { SliderFavoriteAnimal } from '../slider-fev-animal/SliderFavoriteAnimal';
import { SOCIAL_ICONS } from '../constants';
import '../assets/glery1screen/wild.jpg';
import buttonIcon from '../assets/buttonIcon.png'
import './SectionOne.scss';

export const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        <h1 className="section-one__heading">
          Watch your favorite animal online
        </h1>

        <Button name='watch online' icon={buttonIcon} />

        <div className="section-one__sociales">
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
