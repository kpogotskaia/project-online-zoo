import style from './style.module.scss';
import { MAP_PAGE_BLOCK } from '../../constants';

export const MapPageBlock = () => {
  return (
    <div className="map">
      {MAP_PAGE_BLOCK.map((icons, i) => (
        <div className={style.mapVector}>
          <img className="eagle" src={icons.imgUrl} alt={icons.alt} />
        </div>
      ))}
    </div>
  );
};


//?????????????????
