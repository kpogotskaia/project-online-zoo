import { Button } from '../button/Button';
import { DONATION_STEPS } from '../constants';
import DonationArrowImg from '../assets/donation/Arrow.png';
import classes from './PayAndFeed.module.scss';

export const PayAndFeed = () => {
  return (
    <section className={classes['charity']}>
    <div className={classes['container']}>
        <h3 className={classes['charity__heading']}>
          Pay and feed
        </h3>
        <p className={classes['charity__pharagraph']}>
          The opportunity to easily and naturally
          (but as often as possible) donate to the
          needs of animals that you like.
        </p>
        <div className={classes['charity__donation']}>
          {DONATION_STEPS.map((donation, i) => ([
            <div key={i} className={classes['charity__donation-card']}>
              <img src={donation.imgUrl} alt={donation.alt} />
              <h5>{donation.heading}</h5>
            </div>,
            <div key={i + 1} className={classes['charity__donation-arrow']}>
              <img className={classes['arrow-left']} src={DonationArrowImg} alt="arrow" />
            </div>
          ]
          ))}
        </div>

        <Button name='donate'/>
    </div>
</section>
  );
};
