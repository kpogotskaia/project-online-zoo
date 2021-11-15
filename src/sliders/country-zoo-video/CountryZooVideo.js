import { COUNTRY_ZOO_VODEO, COUNTRY_ZOO_VODEO_SCROLL } from '../../constants';
import './CountryZooVideo.scss';
import { Heading } from '../../block-heading/BlockHeading';

export const CountryZooVideo = () => {
  return (
    <div className="content-video">
    <Heading name='The Beijing Zoo' />
    <div className="content-video__slider">
      {COUNTRY_ZOO_VODEO.map((video, i) => (
      <div
        key={i}
        className={`
          ${'video'}
          ${i === 0 ? 'active-video' : ''}
        `}
      >
        <img className="video" src={video.videoUrl} alt={video.alt}/>
      </div>
      ))}
    </div>

    <div className="content-video__scroll">
      {COUNTRY_ZOO_VODEO_SCROLL.map((scroll, i) => (
        <div
          key={i}
          className={`
            ${'content-video__scroll-button'}
            ${i === 0 ? 'active-scroll' : ''}
          `}
        >
        </div>
      ))}
    </div>
  </div>
  );
};
