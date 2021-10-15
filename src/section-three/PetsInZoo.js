import './PetsInZoo.scss';

import { Button } from '../button/Button';

import ThreeSliderPandaImg from '../assets/treeScreen/panda.png';
import ThreeSliderEagleImg from '../assets/treeScreen/eagle.png';
import ThreeSliderMonkeyImg from '../assets/treeScreen/monkey.png';
import ThreeSliderCrocImg from '../assets/treeScreen/kro.png';
import ArrowRightImg from'../assets/rightArr.png';
import ArrowLeftImg from '../assets/leftArr.png';

export const PetsInZoo = () => {
  return (
    <section className="section-three">
      <div className="container">
        <h3 className="section-three__heading">Pets in Zoo</h3>
        <div className="section-three__slider">
          <span className="section-three__left-button">
              <img src={ArrowRightImg} alt="left-arrow" />
          </span>
          <div className="section-three__slider-active img">
            <img src={ThreeSliderPandaImg} alt="panda" />
            <p>Panda’s name is Bei Bei. He
                is 2 years old. Bei Bei is from China.
                He loves bamboos.
            </p>
            <div className="section-three__slider-active__btn">
                <button className="button">watch online
                    <div className="button__play-icon">
                        <span></span>
                    </div>
                </button>
                <button className="button button-donate">donate
                    <div className="button__play-icon">
                        $
                    </div>
                </button>
            </div>
          </div>
          <div className="section-three__slider-eagle img">
              <img src={ThreeSliderEagleImg} alt="eagle" />
            </div>
          <div className="section-three__slider-monkey img">
              <img src={ThreeSliderMonkeyImg} alt="monkey" />
          </div>
          <div className="section-three__slider-crocodille img">
              <img src={ThreeSliderCrocImg} alt="crocodille" />
          </div>
          <span className="section-three__right-button">
              <img src={ArrowLeftImg} alt="right-arrow" />
            </span>
        </div>
        <div className="gallery-scroll">
            <span>01/</span>
            <span>08</span>
            <div className="gallery-scroll__line">
                <div className="gallery-scroll__line-button"></div>
            </div>
        </div>
        <button className="section-three__button button">
            chosee your favorite
          </button>
      </div>
    </section>
  );
};
