import classes from './HowItWorks.module.scss';
import MonkeysImg from '../assets/rectangles/monkeys.png';
import DeersImg from '../assets/rectangles/deers.png';
import PandasImg from '../assets/rectangles/panda.png';
import TwoMonkeysImg from '../assets/rectangles/twomonk.png';

var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("operation__gallery-img");

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
    <div className={classes['operation__gallery']}>
      <div className={classes['operation__gallery-img']}>
          <img src={DeersImg} alt="deer" />
      </div>
      <div className={classes['operation__gallery-img']}>
          <img src={MonkeysImg} alt="smallMonkey" />
      </div>
      <div className={classes['operation__gallery-img']}>
          <img src={PandasImg} alt="pandas" />
      </div>
      <div className={classes['operation__gallery-img']}>
          <img src={TwoMonkeysImg} alt="monkey" />
      </div>

      <a className={classes['prev']} onClick={minusSlide}>&#10094;</a>
      <a className={classes['next']} onClick={plusSlide}>&#10095;</a>
    </div>
  );
};


