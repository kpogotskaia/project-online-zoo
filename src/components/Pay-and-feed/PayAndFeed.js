import { Button } from '../../components/Button';
import { DONATION_STEPS } from '../../constants';
import { SectionWrapper } from '../SectionWrapper';
import DonationArrowImg from '../../assets/donation/Arrow.png';
import { Heading } from '../Block-heading/BlockHeading';

import styles from './style.module.scss';

export const PayAndFeed = () => {
  return (
    <SectionWrapper className={styles.payAndFeed}>
      <Heading name='Pay and Feed'/>

      <p className={styles.charityPharagraph}>
        The opportunity to easily and naturally
        (but as often as possible) donate to the
        needs of animals that you like.
      </p>

      <div className={styles.blockDonation}>
        {DONATION_STEPS.map((donation, i) => (
          [
          <div key={i} className={styles.charityCard}>
            <img src={donation.imgUrl} alt={donation.alt} />
            <h5>{donation.heading}</h5>
          </div>,
          <img className={styles.donationArrow} src={DonationArrowImg} alt="arrow" />
          ]
        ))}
      </div>

      <Button name='donate'/>
    </SectionWrapper>
  );
};
