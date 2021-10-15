import './PayAndFeed.scss';

import { Button } from '../button/Button';

import DonationArrowImg from '../assets/donation/Arrow.png';
import CardImg from '../assets/donation/cardpng.png';
import ZooImg from '../assets/donation/zoo.png';
import AnimalImg from '../assets/donation/panda.png';


export const PayAndFeed = () => {
  return (
    <section className="section-four">
    <div className="container-second">
        <h3 className="section-four__heading">Pay and feed</h3>
        <p className="section-four__pharagraph">
            The opportunity to easily and naturally
            (but as often as possible) donate to the
            needs of animals that you like.
        </p>
        <div className="section-four__donation">
            <div className="section-four__donation-card">
                <img src={CardImg} alt="card" />
                <h5>You pay with a
                    VISA card</h5>
            </div>
            <div className="section-four__donation-arrow">
                <img className="arrow-left" src={DonationArrowImg} alt="arrow" />
            </div>
            <div className="section-four__donation-card">
                <img src={ZooImg} alt="zoo" />
                <h5>Payment goes to the Zoo</h5>
            </div>
            <div className="section-four__donation-arrow">
                <img className="arrow-right" src={DonationArrowImg} alt="arrow" />
            </div>
            <div className="section-four__donation-card">
                <img src={AnimalImg} alt="pands" />
                <h5>Panda gets the bamboo</h5>
            </div>
        </div>
        <button className="section-four__button button">
          donate
          <div className="play"></div>
        </button>
    </div>
</section>
  );
};
