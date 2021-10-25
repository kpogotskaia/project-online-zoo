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
    <section className={classes['charity']}>
    <div className={classes['container']}>
        <h3 className={classes['charity__heading']}>Pay and feed</h3>
        <p className={classes['charity__pharagraph']}>
            The opportunity to easily and naturally
            (but as often as possible) donate to the
            needs of animals that you like.
        </p>
        <div className={classes['charity__donation']}>
          {DONATION.map(donation => ( [
            <div className={classes['charity__donation-card']}>
                <img src={donation.imgUrl} alt={donation.alt} />
                <h5>{donation.heading}</h5>
            </div>,
            <div className={classes['charity__donation-arrow']}>
                <img className={classes['arrow-left']} src={DonationArrowImg} alt="arrow" />
            </div> ]
          ))}
        </div>

        <Button name='donate'/>
    </div>
</section>
  );
};
