import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './button/Button';
import { SectionOne } from './section-one/SectionOne';
import { HowItWorks } from './section-two/HowItWorks';
import { PetsInZoo } from './section-three/PetsInZoo';


import './HomePage.scss';
import './assets/map.png';

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


export function HomePage() {
  return ([
    <Header key="0" />,
    <SectionOne key="1" />,
    <HowItWorks key="2" />,
    <PetsInZoo key="3" />,
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

        <Button />

    </section>,
    <Footer  key="7" />
  ]);
}
