import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import './CountryZoo.scss';

export const CountryZoo = () => [
  <Header key="0" />,
  <section className="info-zoo">
    <div className="container">
      <div className="info-zoo__content">
        <aside className="left-menu">
          <div className="arrow-top">
            <img src="assets/left-menu/VectorTop.png" alt="" />
          </div>
          <div className="left-menu__animal">
            <img className="left-menu__animal-panda active" src="assets/left-menu/panda.png" alt="panda" />
          </div>
          <div className="left-menu__animal">
            <img className="left-menu__animal-eagle" src="assets/left-menu/eagle.png" alt="panda" />
          </div>
          <div className="left-menu__animal">
            <img className="left-menu__animal-croc" src="assets/left-menu/croc.png" alt="panda" />
          </div>
          <div className="left-menu__animal">
            <img className="left-menu__animal-monkey" src="assets/left-menu/monkey.png" alt="panda" />
          </div>
          <div className="arrow-bottom">
            <img src="assets/left-menu/Vectorbottom.png" alt="" />
          </div>
        </aside>
        <div className="content">
          <div className="content-video">
            <h3>The Beijing Zoo</h3>
            <div className="content-video__slider">
              <div>
                <img className="active-video" src="../assets/Zoos-video/Rectangle19.png" alt=''/>
              </div>
              <div>
                <img src="../assets/Zoos-video/small-video.png" alt=''/>
              </div>
              <div>
                <img src="../assets/Zoos-video/small-video.png" alt=''/>
              </div>
              <div>
                <img src="../assets/Zoos-video/small-video.png" alt=''/>
              </div>

            </div>
            <div className="content-video__scroll">
              <div className="content-video__scroll-button active-scroll"></div>
              <div className="content-video__scroll-button"></div>
              <div className="content-video__scroll-button"></div>
            </div>
          </div>
          <div className="content-info">
            <h5 className="content-info__heading">Population:</h5>
            <p className="content-info__pharagraph">About 1,590 individuals</p>
            <h5 className="content-info__heading">Habitat:</h5>
            <p className="content-info__pharagraph">Temperate forests high in the mountains of southwest China</p>
            <h5 className="content-info__heading">Diet:</h5>
            <p className="content-info__pharagraph">
              A panda's daily diet consists almost entirely
              of the leaves, stems and shoots of
              various bamboo species. Bamboo contains
              very little nutritional value so pandas
              must eat 12-38kg every day to meet their
              energy needs.
            </p>
            <h5 className="content-info__heading">Donated</h5>
            <p className="content-info__pharagraph">687.546$</p>
            <button className="content-button">feed</button>
          </div>
        </div>
      </div>
    </div>
  </section>,
  <Footer key="1" />
];
