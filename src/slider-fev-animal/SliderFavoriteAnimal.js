import './SliderFavoriteAnimal.scss';

import { ActiveIMG } from '../active-IMG/ActiveIMG';
import { Paginator } from '../paginator/Paginator';

import PandaImg from '../assets/glery1screen/panda.png';
import EagleImg from '../assets/glery1screen/eagle.png';
import MonkeyImg from '../assets/glery1screen/monkey.png';
import CrocImg from '../assets/glery1screen/croc.png';
import FoxImg from '../assets/glery1screen/fox.png';

export const SliderFavoriteAnimal = () => {
  return (
    <div className="section-one__gallery">
      <div className="section-one__gallery-imgs">
          <div>
              <img className="img" src={EagleImg} alt="eagle" />
          </div>

          <div className="img-active">
            <img className="img-active__img" src={PandaImg} alt="panda" />
            <p className="img-active__pharagraph"> Panda’s name is Bei Bei. He
                is 2 years old. Bei Bei is
                from China. He loves bamboos.
            </p>
            <div className="img-active__btn">
                <button className="button-active">watch online
                    <div className="button__play-icon">
                        <span></span>
                    </div>
                </button>
                <button className="button-active button-donate">donate
                    <div className="button__play-icon">
                        $
                    </div>
                </button>
            </div>
          </div>
          <div>
              <img className="img" src={MonkeyImg} alt="monkey" />
          </div>
          <div>
              <img className="img" src={CrocImg} alt="croc" />
          </div>
          <div>
              <img className="img" src={FoxImg} alt="fox" />
          </div>
      </div>
      <div className="section-one__gallery-line">
          <div className="gallery__line-ellipse">
              <div></div>
          </div>
      </div>

      <Paginator />
    </div>
  );
};
