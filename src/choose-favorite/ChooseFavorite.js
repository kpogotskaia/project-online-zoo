import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import './ChooseFavorite.scss';

export const ChooseFavorite = () => ([
  <Header key="0" />,
  <section className="choose-section">
    <div className="container">
      <h1>Choose your favorite</h1>
      <p>
        As a voice for wildlife, we are devastated
        by the impact of the 2020 Australian bushfires
        on precious species and their habitat, and we
        are determined to assist in all aspects, including
        viding veterinary support and raising much-needed
        emergency funds. Zoo Online saves wildlife and
        inspires everyone to make conservation a priority
        in their lives. Animals have the right to a pain-free
        and happy life. They have equal claim to the resources
        of this planet, and deserve a life of dignity and
        compassion.As a voice for wildlife, we are devastated
        by the impact of the 2020 Australian bushfires on
        precious species and their habitat.
      </p>
      <div className="gallery">
        <div className="choose-gallery">
          <div><img className="left-arrow" src="assets/leftArr.png" alt="left-arrow" /></div>
          <img className="choose-gallery__img monkey" src="assets/choose-gallery/monkey.png" alt="monkey" />
          <img className="choose-gallery__img panda active" src="assets/choose-gallery/panda.png" alt="panda" />
          <img className="choose-gallery__img crocodille" src="assets/choose-gallery/croc.png" alt="crocodille" />
          <img className="choose-gallery__img eagle" src="assets/choose-gallery/eagle.png" alt="eagle" />
          <img className="choose-gallery__img tiger" src="assets/choose-gallery/tiger.png" alt="tiger" />
          <img className="choose-gallery__img elephant" src="assets/choose-gallery/eleph.png" alt="elephant" />
          <img className="choose-gallery__img lew" src="assets/choose-gallery/lew.png" alt="lew" />
          <img className="choose-gallery__img zebra" src="assets/choose-gallery/zebra.png" alt="zebra" />
          <div><img className="right-arrow" src="assets/rightArr.png" alt="right-arrow" /></div>
        </div>

        <div className="gallery__scroll">
          <span>02/</span>
          <span>08</span>
          <div className="gallery__scroll-line">
            <div className="gallery__scroll-line-button"></div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="map-vector vector__eagle">
          <img className="eagle" src="assets/vector/eagle.png" alt="" />
        </div>
        <div className="map-vector vector__croc">
          <img className="crocodille" src="assets/vector/croc.png" alt="" />
        </div>
        <div className="map-vector vector__monkey">
          <img className="monkey" src="assets/vector/monkey.png" alt="" />
        </div>
        <div className="map-vector vector__panda active-vector">
          <img className="panda" src="assets/vector/panda.png" alt="" />
        </div>
      </div>

      <button className="button">
        watch online
        <div className="button__play-icon">
          <span></span>
        </div>
      </button>
    </div>
  </section>,
  <Footer key="1" />
]);
