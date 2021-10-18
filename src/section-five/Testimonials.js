import './Testimonials.scss';

import { Button } from '../button/Button';

import UserMImg from '../assets/users/usrM.png';
import UserGImg from'../assets/users/users.png';

export const Testimonials = () => {
  return (
    <section className="section-five">
      <div className="section-five__arrow-left"></div>
        <div className="container">
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
    </section>
  );
};
