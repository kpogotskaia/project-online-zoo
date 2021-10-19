import './SectionOne.scss';

import { Button } from '../button/Button';
import { SliderFavoriteAnimal } from '../slider-fev-animal/SliderFavoriteAnimal';


import '../assets/glery1screen/wild.jpg';
import YoutubeIcon from '../assets/sociales/youtube.png';
import InstagramIcon from '../assets/sociales/instagram.png';
import TwitterIcon from '../assets/sociales/twitter.png';
import VkIcon from '../assets/sociales/vk.png';

const SOCIAL_ICONS = [
  {
    link: 'https://www.instagram.com',
    imgUrl: InstagramIcon,
    description: 'instagram',
  },
  {
    link: 'https://www.twitter.com',
    imgUrl: TwitterIcon,
    description: 'twitter'
  },
  {
    link: 'https://www.youtube.com',
    imgUrl: YoutubeIcon,
    description: 'youtube'
  },
  {
    link: 'https://www.vk.com',
    imgUrl: VkIcon,
    description: 'vk'
  }
];

export const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        <h1 className="section-one__heading">
          Watch your favorite animal online
        </h1>

        <Button />

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
