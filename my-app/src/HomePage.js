import { Header } from './Header';
import { Footer } from './Footer';

import './HomePage.scss';
import './assets/map.png';
import PandaImg from './assets/glery1screen/panda.png';
import EagleImg from './assets/glery1screen/eagle.png';
import MonkeyImg from './assets/glery1screen/monkey.png';
import CrocImg from './assets/glery1screen/croc.png';
import FoxImg from './assets/glery1screen/fox.png';
import MonkeysImg from './assets/rectangles/monkeys.png';
import DeersImg from './assets/rectangles/deers.png';
import PandasImg from './assets/rectangles/panda.png';
import TwoMonkeysImg from './assets/rectangles/twomonk.png';
import YoutubeIcon from './assets/sociales/youtube.png';
import InstagramIcon from './assets/sociales/instagram.png';
import TwitterIcon from './assets/sociales/twitter.png';
import VKIcon from './assets/sociales/vk.png';
import CardsProblemImg from './assets/cards/problem-solving.png';
import CardsAchivementImg from './assets/cards/achievement.png';
import CardsLoveImg from './assets/cards/love.png';
import ThreeSliderPandaImg from './assets/treeScreen/panda.png';
import ThreeSliderEagleImg from './assets/treeScreen/eagle.png';
import ThreeSliderMonkeyImg from './assets/treeScreen/monkey.png';
import ThreeSliderCrocImg from './assets/treeScreen/kro.png';
import ArrowRightImg from'./assets/rightArr.png';
import ArrowLeftImg from './assets/leftArr.png';
import DonationArrowImg from './assets/donation/Arrow.png';
import CardImg from './assets/donation/cardpng.png';
import ZooImg from './assets/donation/zoo.png';
import AnimalImg from './assets/donation/panda.png';
import UserMImg from './assets/users/usrM.png';
import UserGImg from'./assets/users/users.png';
import VectorEagleImg from './assets/vector/eagle.png';
import VectorCrocImg from './assets/vector/croc.png';
import VectorMonkeyImg from './assets/vector/monkey.png';
import VectorPandaImg from './assets/vector/panda.png';
import TooltipEagleImg from './assets/vector/eagleTooltip.png';

var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("section-two__gallery-img");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

export function HomePage() {
  return ([
    <Header key="0" />,
    <section key="1" className="section-one">
        <div className="container">
            <h1 className="section-one__heading">Watch your favorite animal online</h1>

            <button className="button">watch online
                <div className="button__play-icon">
                    <span></span>
                </div>
            </button>


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
        </div>

        <div className="section-one__gallery">
            <div className="section-one__gallery-imgs">
                <div>
                    <img className="img" src={EagleImg} alt="eagle" />
                </div>
                <div className="img-active">
                    <img className="img-active__img" src={PandaImg} alt="" />
                    <p className="img-active__pharagraph"> Panda’s name is Bei Bei. He
                        is 2 years old. Bei Bei is
                        from China. He loves bamboos.
                    </p>
                    <div className="img-active__btn">
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
    </section>,
    <section key="2" className="section-two">
        <div className="container">
            <h3 className="section-two__heading">How it works?</h3>
            <p className="section-two__pharagraph">
                As a voice for wildlife, we are devastated by the impact
                of the 2020 Australian bushfires on precious species and
                their habitat, and we are determined to assist in all
                aspects, including providing veterinary support and
                raising much-needed emergency funds. Zoo Online saves
                wildlife and inspires everyone to make conservation
                a priority in their lives. Animals have the right
                to a pain-free and happy life. They have equal
                claim to the resources of this planet, and deserve
                a life of dignity and compassion.As a voice for wildlife,
                we are devastated by the impact of the 2020 Australian
                bushfires on precious species and their habitat.
            </p>

            <div className="section-two__gallery">
                <div className="section-two__gallery-img">
                    <img src={DeersImg} alt="" />
                </div>
                <div className="section-two__gallery-img">
                    <img src={MonkeysImg} alt="smallMonkey" />
                </div>
                <div className="section-two__gallery-img">
                    <img src={PandasImg} alt="pandas" />
                </div>
                <div className="section-two__gallery-img">
                    <img src={TwoMonkeysImg} alt="" />
                </div>

                <a className="prev" onClick={minusSlide}>&#10094;</a>
                <a className="next" onClick={plusSlide}>&#10095;</a>

            </div>

            <div className="gallery-scroll">
                <span>01/</span>
                <span>04</span>
                <div className="gallery-scroll__line">
                    <div className="gallery-scroll__line-button"></div>
                </div>
            </div>
            <button className="button">watch online
                <div className="button__play-icon">
                    <span></span>
                </div>
            </button>
        </div>
        <div className="section-two__benefits">
            <div className="benefits">
                <img className="benefits-img" src={CardsProblemImg} alt="inspires" />
                <h5 className="benefits-heading">What inspires us?</h5>
                <p>As a voice for wildlife, we are devastated by
                    the impact of the 2020 Australian bushfires on
                    precious species and their habitat, and we are
                    determined to assist in all aspects.</p>
            </div>
            <div className="benefits">
                <img className="benefits-img" src={CardsAchivementImg} alt="mission" />
                <h5 className="benefits-heading">Our mission</h5>
                <p>Zoo Online saves wildlife and inspires everyone to make
                    conservation a priority in their lives. </p>
            </div>
            <div className="benefits">
                <img className="benefits-img" src={CardsLoveImg} alt="believ" />
                <h5 className="benefits-heading">What we believe in?</h5>
                <p>Animals have the right to a pain-free and happy life.
                    They have equal claim to the resources of this planet,
                    eserve a life of dignity and compassion.</p>
            </div>
        </div>
    </section>,
    <section key="3" className="section-three">
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
    </section>,
    <section key="4" className="section-four">
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
    </section>,
    <section key="5" className="section-five">
        <div className="container">
            <div className="section-five__arrow-left"></div>
            <div className="container-second">
                <h1 className="section-five__heading">Testimonials</h1>
                <div className="section-five__testimonials">
                    <div className="section-five__testimonials-card">
                        <div className="card-user">
                            <img src={UserMImg} alt="" />
                        </div>
                        <h3 className="name">Vlad Kim</h3>
                        <p className="pharagraph">As a voice for wildlife, we are devastated
                            by the impact of the 2020 Australian
                            bushfires on precious species and their
                            habitat.</p>
                    </div>
                    <div className="section-five__testimonials-card">
                        <div className="card-user">
                            <img src={UserGImg} alt="" />
                        </div>
                        <h3 className="name">Nastya Sidorova</h3>
                        <p className="pharagraph">As a voice for wildlife, we are devastated
                            by the impact of the 2020 Australian
                            bushfires on precious species and their
                            habitat.</p>
                    </div>
                </div>
                <div className="gallery-scroll">
                    <span>01/</span>
                    <span>08</span>
                    <div className="gallery-scroll__line">
                        <div className="gallery-scroll__line-button"></div>
                    </div>
                </div>
                <button className="section-five__button button">leave feedback
                    <div className="play"></div>
                </button>
            </div>
            <div className="section-five__arrow-right"></div>
        </div>
    </section>,
    <section key="6" className="section-six">
        <h3 className="section-six__heading">Map</h3>
        <div className="section-six__map">
            <div className="section-six__map-vector vector__eagle">
                <img className="eagle" src={VectorEagleImg} alt="" />
            </div>
            <div className="section-six__map-vector vector__croc">
                <img className="crocodille" src={VectorCrocImg} alt="" />
            </div>
            <div className="section-six__map-vector vector__monkey">
                <img className="monkey" src={VectorMonkeyImg} alt="" />
            </div>
            <div className="section-six__map-vector vector__panda">
                <img className="panda" src={VectorPandaImg} alt="" />
            </div>
        </div>

        <div className="section-six__tooltip">
            <img className="section-six__tooltip-img" src={TooltipEagleImg} alt="" />
            <div>
                <h3>West End Bald Eagle</h3>
                <p><b>Region:</b> an an island near Los Angeles</p>
                <p><b>Population:</b> more than 270pairs in 2013</p>
            </div>
        </div>

        <button className="section-six__button button">watch online
            <div className="button__play-icon">
                <span></span>
            </div>
        </button>
    </section>,
    <Footer  key="7" />
  ]);
}
