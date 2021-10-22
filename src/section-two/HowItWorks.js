import './HowItWorks.scss';

import { Button } from '../button/Button';
import { Paginator } from '../paginator/Paginator';

import MonkeysImg from '../assets/rectangles/monkeys.png';
import DeersImg from '../assets/rectangles/deers.png';
import PandasImg from '../assets/rectangles/panda.png';
import TwoMonkeysImg from '../assets/rectangles/twomonk.png';
import CardsProblemImg from '../assets/cards/problem-solving.png';
import CardsAchivementImg from '../assets/cards/achievement.png';
import CardsLoveImg from '../assets/cards/love.png';

const BENEFITS = [
  {
    imgUrl: CardsProblemImg,
    alt: 'inspires',
    heading: `What inspires us?`,
    pharagraph: `As a voice for wildlife, we are devastated
    by the impact of the 2020 Australian bushfires on precious
    species and their habitat, and we are determined
    to assist in all aspects.`
  },
  {
    imgUrl: CardsAchivementImg,
    alt: 'mission',
    heading: `Our mission`,
    pharagraph: `Zoo Online saves wildlife and inspires
    everyone to make conservation a priority in their lives.`
  },
  {
    imgUrl: CardsLoveImg,
    alt: 'believ',
    heading: `What we believe in?`,
    pharagraph: `Animals have the right to a pain-free and happy
    life. They have equal claim to the resources of this planet,
    eserve a life of dignity and compassion.`
  }
];

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

export const HowItWorks = () => {
  return (
    <section className="section-two">
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

          <Paginator />

          <Button />

      </div>
      <div className="section-two__benefits">
        <div className="container">
            {BENEFITS.map(benefits => (
              <div className='benefits-block'>
              <img className='benefits-block__img' src={benefits.imgUrl} alt={benefits.alt} />
              <h5  className='benefits-block__heading'> {benefits.heading} </h5>
              <p>{benefits.pharagraph}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
