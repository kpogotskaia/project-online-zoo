import './ActiveIMG.scss';

import PandaImg from '../assets/glery1screen/panda.png';

export const ActiveIMG = () => {
  return (
    <div className="section-three__slider-active img">
    <img className="img-active__img" src={PandaImg} alt="panda" />
    <p className="img-active__pharagraph"> Panda’s name is Bei Bei. He
        is 2 years old. Bei Bei is
        from China. He loves bamboos.
    </p>
    <div className="section-three__slider-active__btn">
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
  );
};
