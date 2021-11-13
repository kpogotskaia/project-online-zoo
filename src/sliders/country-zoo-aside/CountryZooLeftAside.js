import { LEFT_MENU_ANIMAL,  LEFT_MENU_ARROW} from '../../constants';
import './CountryZooLeftAside.scss';

export const CountryZooLeftAside = () => {
  return (
    <aside className="left-menu">
      <img className="arrow-top" src={LEFT_MENU_ARROW.LeftMenuArrowTop} alt={LEFT_MENU_ARROW.alt} />

      <div className='left-menu__imgs'>
        {LEFT_MENU_ANIMAL.map((animals, i) => (
          <div className={`
            ${'left-menu__animal'}
            ${i === 0 ? 'left-menu__animal-active' : ''}
            `}
          >
            <img className="left-menu__animal" src={animals.imgUrl} alt={animals.alt} />
          </div>
        ))}
      </div>

      <img className="arrow-bottom" src={LEFT_MENU_ARROW.LeftMenuArrowBottom} alt={LEFT_MENU_ARROW.alt} />

  </aside>
  );
};


