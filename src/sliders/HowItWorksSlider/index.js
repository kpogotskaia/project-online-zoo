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

    return () => clearInterval(interval);
  }, [])

  // calculate prev index
  const prevImgIndex = activeIndex ? activeIndex - 1 : IMG.length - 1;
  // calculate next index
  const nextImgIndex = activeIndex === IMG.length - 1 ? 0 : activeIndex + 1;

  return (
    [
      <div key="slider" className="slider">
        <div className="slider-img slider-img-prev">
          <img src={IMG[prevImgIndex]} alt="prev" />
        </div>
        <div className="slider-img">
            {IMG[activeIndex]}
        </div>
        <div className="slider-img slider-img-next">
          <img src={IMG[nextImgIndex]} alt="next" />
        </div>
      </div>,
      <Paginator
        key="paginator"
        amount={IMG.length}
        selected={activeIndex + 1}
        theme={THEME.DARK}
      />
    ]
  );
};


