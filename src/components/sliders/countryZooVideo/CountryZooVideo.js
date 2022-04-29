import { useState, useEffect } from 'react';

import './CountryZooVideo.scss';

const slidesPerSection = 3;

export const CountryZooVideo = ({videos}) => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [curSectionIndex, setCurSectionIndex] = useState(0);
  const slidesSectionsAmount = videos.length / slidesPerSection;

  const curSlides = videos.filter((_, i) =>
    i >= curSectionIndex &&
    i < (curSectionIndex + 1 * slidesPerSection)
  );

  const activeVideoUrl = videos[0].videoUrl;

  useEffect(() => {
    setActiveVideo(videos[0]);
  }, [videos, activeVideoUrl]);

  return (
    <div className="content-video">
      <img className="active-video" src={activeVideo.videoUrl} alt={activeVideo.alt} />
      <div className="content-video__slider">
        {curSlides.map((video, i) => (
          <div
            key={i}
            className="slide"
            onClick={e => setActiveVideo(video)}
          >
            <img className="video" src={video.videoUrl} alt={video.alt}/>
          </div>
        ))}
        <div className="scroll-items">
          {new Array(slidesSectionsAmount).fill(null).map((_, i) => (
            <div
              key={i}
              className={`
                ${'scroll-item'}
                ${i === curSectionIndex ? 'scroll-item--active' : ''}
              `}
              onClick={e => setCurSectionIndex(i)}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
