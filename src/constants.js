import PandaImg from './assets/glery1screen/panda.png';
import EagleImg from './assets/glery1screen/eagle.png';
import MonkeyImg from './assets/glery1screen/monkey.png';
import CrocImg from './assets/glery1screen/croc.png';
import FoxImg from './assets/glery1screen/fox.png';
import ElephImg from './assets/glery1screen/eleph.png';
import CatImg from './assets/glery1screen/cat.png';
import AnmImg from './assets/glery1screen/anm.png';
import CardImg from './assets/donation/cardpng.png';
import ZooImg from './assets/donation/zoo.png';
import AnimalImg from './assets/donation/panda.png';
import CardsProblemImg from './assets/cards/problem-solving.png';
import CardsAchivementImg from './assets/cards/achievement.png';
import CardsLoveImg from './assets/cards/love.png';
import YoutubeIcon from './assets/sociales/youtube.png';
import InstagramIcon from './assets/sociales/instagram.png';
import TwitterIcon from './assets/sociales/twitter.png';
import VkIcon from './assets/sociales/vk.png';
import UserMImg from './assets/users/usrM.png';
import UserGImg from'./assets/users/users.png';

export const TESTIMONIALS = [
  {
    imgUrl: UserMImg,
    alt: 'profile Img',
    heading: 'Vlad Kim',
    desc: `As a voice for wildlife, we are devastated
    by the impact of the 2020 Australian
    bushfires on precious species and their
    habitat.`
  },
  {
    imgUrl: UserGImg,
    alt: 'profile Img',
    heading: 'Nastya Sidorova',
    desc: `As a voice for wildlife, we are devastated
    by the impact of the 2020 Australian
    bushfires on precious species and their
    habitat.`
  }
];

export const SOCIAL_ICONS = [
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

export const ANIMALS = [
  {
    imgUrl: EagleImg,
    alt: 'eagle',
    desc: '',
  },
  {
    imgUrl: PandaImg,
    alt: 'panda',
    desc: `
      Panda’s name is Bei Bei. He
      is 2 years old. Bei Bei is
      from China. He loves bamboos.
    `,
  },
  {
    imgUrl: MonkeyImg,
    alt: 'monkey',
    desc: '',
  },
  {
    imgUrl: CrocImg,
    alt: 'croc',
    desc: '',
  },
  {
    imgUrl: FoxImg,
    alt: 'fox',
    desc: '',
  },
  {
    imgUrl: ElephImg,
    alt: 'elephant',
    desc: '',
  },
  {
    imgUrl: CatImg,
    alt: 'cat',
    desc: '',
  },
  {
    imgUrl: AnmImg,
    alt: 'anm',
    desc: '',
  }
];

export const DONATION_STEPS = [
  {
    imgUrl: CardImg,
    alt: 'card',
    heading: 'You pay with a VISA card'
  },
  {
    imgUrl: ZooImg,
    alt: 'zoo',
    heading: 'Payment goes to the Zoo'
  },
  {
    imgUrl: AnimalImg,
    alt: 'pands',
    heading: 'Panda gets the bamboo'
  }
];

export const BENEFITS = [
  {
    imgUrl: CardsProblemImg,
    alt: 'inspires',
    heading: `What inspires us?`,
    pharagraph: `As a voice for wildlife, we are devastated
    by the impact of the 2020 Australian bushfires on precious
    species and their habitat, and we are determined
    to assist in all aspects.`
  },
  {
    imgUrl: CardsAchivementImg,
    alt: 'mission',
    heading: `Our mission`,
    pharagraph: `Zoo Online saves wildlife and inspires
    everyone to make conservation a priority in their lives.`
  },
  {
    imgUrl: CardsLoveImg,
    alt: 'believ',
    heading: `What we believe in?`,
    pharagraph: `Animals have the right to a pain-free and happy
    life. They have equal claim to the resources of this planet,
    eserve a life of dignity and compassion.`
  }
];
