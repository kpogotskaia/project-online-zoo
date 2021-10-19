import './SectionOne.scss';

import { Button } from '../button/Button';
import { SliderFavoriteAnimal } from '../slider-fev-animal/SliderFavoriteAnimal';


import '../assets/glery1screen/wild.jpg';
import YoutubeIcon from '../assets/sociales/youtube.png';
import InstagramIcon from '../assets/sociales/instagram.png';
import TwitterIcon from '../assets/sociales/twitter.png';
import VKIcon from '../assets/sociales/vk.png';


export const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        <h1 className="section-one__heading">Watch your favorite animal online</h1>

        <Button />

        <div className="section-one__sociales">
              <a href="" className="instagram">
                  <img src={InstagramIcon} alt="instagram" />
              </a>
              <a href="" className="twitter">
                  <img src={TwitterIcon} alt="twitter" />
              </a>
              <a href="" className="youtube">
                  <img src={YoutubeIcon} alt="youtube" />
              </a>
              <a href="" className="vk">
                  <img src={VKIcon} alt="vk" />
              </a>
        </div>

        <SliderFavoriteAnimal />
      </div>
    </section>
  );
};
