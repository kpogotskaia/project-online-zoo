import { useState } from 'react';
import classNames from 'classnames';

import { Button } from '../Button';
import { DONATION_STEPS, HIDDEN_SCROLL } from '../../constants';
import { DonationPopup } from '../../donationPopup/DonationPopup';
import { SectionWrapper } from '../SectionWrapper';
import { Heading } from '../BlockHeading/BlockHeading';
import DonationArrowImg from '../../assets/donation/Arrow.png';

import styles from './style.module.scss';

export const PayAndFeed = () => {
  const [isOpened, setIsOpened] = useState(false);

  const togglePopup = e => {
    const delay = isOpened ? 300 : 0;

    setTimeout(() => {
      if (isOpened) {
        document.body.classList.remove(HIDDEN_SCROLL);
      } else {
        document.body.classList.add(HIDDEN_SCROLL);
      }

      setIsOpened(!isOpened);
    }, delay);
  };



  return (
    <div className={styles.payAndFeed}>
      <SectionWrapper>
          <Heading name='Pay and Feed'/>

          <p className={styles.blockDonationPharagraph}>
            The opportunity to easily and naturally
            (but as often as possible) donate to the
            needs of animals that you like.
          </p>

          <div className={styles.blockDonation}>
            {DONATION_STEPS.map((donation, i) =>
              <div key={`${i}0`} className={styles.blockDonationCard}>
                <img className={styles.blockDonationCardImg} src={donation.imgUrl} alt={donation.alt} />
                <h5 className={styles.blockDonationCardHeading}>{donation.heading}</h5>

                {i !== DONATION_STEPS.length - 1 &&
                  <img className={styles.blockDonationCardArrow} src={DonationArrowImg} alt="arrow"/>
                }
              </div>
            )}
           </div>

          <Button name='donate'
            className={classNames(styles.buttonPopup)}
            onClick={togglePopup}
          />

          {isOpened &&
            <DonationPopup isOpened={isOpened} close={togglePopup} />
          }

      </SectionWrapper>

    </div>
  );
};
