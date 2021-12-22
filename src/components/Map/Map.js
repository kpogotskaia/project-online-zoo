import './Map.scss';

import { Button } from '../../components/Button';
import { VECTOR_IMG } from '../../constants';
import TooltipEagleImg from '../../assets/vector/eagleTooltip.png';
import buttonIcon from '../../assets/buttonIcon.png'
import { Heading } from '../BlockHeading/BlockHeading';
import { SectionWrapper } from '../SectionWrapper';

export const Map = () => {
  return (
    <div className="map">
      <SectionWrapper >
        <Heading name='Map' />
        <div className="map__block">

          <div className='country-usa'></div>
          <div className='country-afr'></div>
          <div className='country-china'></div>

          <div className="map__block-vector vector__eagle">
            {VECTOR_IMG.map((vector, i) => (
              <img key={i} className="eagle" src={vector.imgUrl} alt="eagle" />
            ))}
          </div>

        </div>
        <div className="map__tooltip">
          <img className="map__tooltip-img" src={TooltipEagleImg} alt="eagleImg" />
            <div>
                <h3>West End Bald Eagle</h3>
                <p><b>Region:</b> an an island near Los Angeles</p>
                <p><b>Population:</b> more than 270pairs in 2013</p>
            </div>
        </div>

        <Button name='watch online' icon={buttonIcon}/>
      </SectionWrapper>
    </div>
  );
};
