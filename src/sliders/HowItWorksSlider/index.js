import { Paginator, THEME} from '../../paginator/Paginator';
import { IMG } from '../../constants';

import React, {useState, useEffect} from "react";

import './styles.scss';

export const HowItWorksSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
          const res = current === IMG.length - 1 ? 0 : current + 1;
          return res;
      })
    }, 5000);

    return () => clearInterval()
  }, [])

  // calculate prev index
  const prevImgIndex = activeIndex ? activeIndex - 1 : IMG.length - 1;
  // calculate next index
  const nextImgIndex = activeIndex === IMG.length - 1 ? 0 : activeIndex + 1;

  return (
    [
      <div className="slider">
        <div className="slider-img slider-img-prev"
            key={prevImgIndex}>
            {IMG[prevImgIndex]}
        </div>
        <div className="slider-img"
            key={activeIndex}>
            {IMG[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
            key={nextImgIndex}>
            {IMG[nextImgIndex]}
        </div>
      </div>,
      <Paginator
        amount={IMG.length}
        selected={activeIndex + 1}
        theme={THEME.DARK}
      />
    ]
  );
};


