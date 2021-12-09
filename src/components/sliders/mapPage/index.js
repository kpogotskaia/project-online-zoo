import { Paginator, THEME} from '../../Paginator/index';
import React, {useState} from "react";
import style from './style.module.scss';
import { MAP_PAGE_GALLERY } from '../../../constants';

export const MapPageGallery = () => {

  const [selectedSlideIndex] = useState(1);

  return (
    <div className={style.gallery}>
      <div className={style.galleryBlock}>
        <svg className={style.galleryBlockArrowLeft} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6663 16.1706L20.0167 29.5207C20.3255 29.8298 20.7376 30 21.1772 30C21.6167 30 22.0289 29.8298
          22.3376 29.5207L23.3208 28.5378C23.9605 27.8973 23.9605 26.8564 23.3208 26.2169L12.1102 15.0062L23.3332 3.78314C23.642
          3.47412 23.8125 3.06217 23.8125 2.6229C23.8125 2.18315 23.642 1.7712 23.3332 1.46194L22.3501 0.479263C22.0411 0.17024 21.6291 0 21.1896 0C20.7501 0
          20.3379 0.17024 20.0291 0.479263L6.6663 13.8416C6.35679 14.1516 6.18679 14.5655 6.18777 15.0055C6.18679 15.4472 6.35679 15.8608
          6.6663 16.1706Z" fill="#828282"/>
        </svg>

        <div className={style.galleryBlockImg}>
          {MAP_PAGE_GALLERY.map((animals, i) => (
            <div
            key={i}
            className={`
            ${style.galleryImg}
            ${i === 1 ? style.active : ''}
          `}>
            <img className={style.galleryImg} src={animals.imgUrl} alt={animals.alt} />
            </div>
          ))}
        </div>

        <svg className={style.galleryBlockArrowRight} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3337 13.8294L9.98332 0.479264C9.67454 0.170243 9.26235 0 8.82284 0C8.38334 0 7.97114 0.170243 7.66237
          0.479264L6.6792 1.46218C6.03945 2.10267 6.03945 3.14363 6.6792 3.78314L17.8898 14.9938L6.66676 26.2169C6.35799 26.5259
          6.1875 26.9378 6.1875 27.3771C6.1875 27.8168 6.35799 28.2288 6.66676 28.5381L7.64993 29.5207C7.95895 29.8298 8.3709 30
          8.81041 30C9.24991 30 9.66211 29.8298 9.97088 29.5207L23.3337 16.1584C23.6432 15.8484 23.8132 15.4345 23.8122 14.9945C23.8132 14.5528
          23.6432 14.1392 23.3337 13.8294Z" fill="#828282"/>
        </svg>
      </div>

      <Paginator
        amount={MAP_PAGE_GALLERY.length}
        selected={selectedSlideIndex + 1}
        theme={THEME.LIGHT}
      />
  </div>
  );
};