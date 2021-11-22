import { Paginator, THEME} from '../../components/Paginator/Paginator';
import { IMG } from '../../constants';

import React, {useState, useEffect} from "react";

import styles from './style.module.scss';

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
      <div className={styles.howItWorksSlider}>
        <div className={styles.slider}>
          <img src={IMG[prevImgIndex]} alt="prev" />
          {IMG[activeIndex]}
          <img src={IMG[nextImgIndex]} alt="next" />
        </div>

        <Paginator
          amount={IMG.length}
          selected={activeIndex + 1}
          theme={THEME.DARK}
        />
      </div>
  );
};


