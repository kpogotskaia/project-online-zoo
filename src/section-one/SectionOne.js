import './SectionOne.scss';

import { Button } from '../button/Button';

import '../assets/glery1screen/wild.jpg';
import PandaImg from '../assets/glery1screen/panda.png';
import EagleImg from '../assets/glery1screen/eagle.png';
import MonkeyImg from '../assets/glery1screen/monkey.png';
import CrocImg from '../assets/glery1screen/croc.png';
import FoxImg from '../assets/glery1screen/fox.png';
import YoutubeIcon from '../assets/sociales/youtube.png';
import InstagramIcon from '../assets/sociales/instagram.png';
import TwitterIcon from '../assets/sociales/twitter.png';
import VKIcon from '../assets/sociales/vk.png';

export const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
          <h1 className="section-one__heading">Watch your favorite animal online</h1>

          <Button />

          <div className="section-one__sociales">
              <a href="" className="instagram">
                  <img src={InstagramIcon} alt="instagram" />
              </a>
              <a href="" className="twitter">
                  <img src={TwitterIcon} alt="twitter" />
              </a>
              <a href="" className="youtube">
                  <img src={YoutubeIcon} alt="youtube" />
              </a>
              <a href="" className="vk">
                  <img src={VKIcon} alt="vk" />
              </a>
          </div>

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
          <div className="section-one__gallery-scroll">
              <span>02 /</span>
              <span>08</span>
              <div className="section-one__gallery-scroll-line">
                  <div className="gallery__scroll-button"></div>
              </div>
          </div>
      </div>
    </div>
</section>
  );
};