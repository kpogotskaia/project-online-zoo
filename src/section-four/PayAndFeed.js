import classes from './PayAndFeed.module.scss';

import { Button } from '../button/Button';

import DonationArrowImg from '../assets/donation/Arrow.png';
import CardImg from '../assets/donation/cardpng.png';
import ZooImg from '../assets/donation/zoo.png';
import AnimalImg from '../assets/donation/panda.png';

const DONATION = [
  {
    imgUrl: CardImg,
    alt: 'card',
    heading: `You pay with a
    VISA card`
  },
  {
    imgUrl: ZooImg,
    alt: 'zoo',
    heading: `Payment goes to the Zoo`
  },
  {
    imgUrl: AnimalImg,
    alt: 'pands',
    heading: `Panda gets the bamboo`
  }
];

export const PayAndFeed = () => {
  return (
    <section className={classes['section-four']}>
    <div className={classes['container']}>
        <h3 className={classes['section-four__heading']}>Pay and feed</h3>
        <p className={classes['section-four__pharagraph']}>
            The opportunity to easily and naturally
            (but as often as possible) donate to the
            needs of animals that you like.
        </p>
        <div className={classes['section-four__donation']}>
          {DONATION.map(donation => ( [
            <div className={classes['section-four__donation-card']}>
                <img src={donation.imgUrl} alt={donation.alt} />
                <h5>{donation.heading}</h5>
            </div>,
            <div className={classes['section-four__donation-arrow']}>
                <img className={classes['arrow-left']} src={DonationArrowImg} alt="arrow" />
            </div> ]
          ))}
        </div>

        <button className={classes['section-four__button button']}>
          donate
          <div className={classes['play']}></div>
        </button>
    </div>
</section>
  );
};
