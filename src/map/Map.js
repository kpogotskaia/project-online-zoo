import './Map.scss';

import { Button } from '../button/Button';

import VectorEagleImg from '../assets/vector/eagle.png';
import VectorCrocImg from '../assets/vector/croc.png';
import VectorMonkeyImg from '../assets/vector/monkey.png';
import VectorPandaImg from '../assets/vector/panda.png';
import TooltipEagleImg from '../assets/vector/eagleTooltip.png';
import buttonIcon from '../assets/buttonIcon.png'
import '../assets/map.png';


export const Map = () => {
  return (
    <section className="map">
    <h3 className="map__heading">Map</h3>
    <div className="map__block">
        <div className="map__block-vector vector__eagle">
            <img className="eagle" src={VectorEagleImg} alt="eagle" />
        </div>
        <div className="map__block-vector vector__croc">
            <img className="crocodille" src={VectorCrocImg} alt="croc" />
        </div>
        <div className="map__block-vector vector__monkey">
            <img className="monkey" src={VectorMonkeyImg} alt="monkey" />
        </div>
        <div className="map__block-vector vector__panda">
            <img className="panda" src={VectorPandaImg} alt="panda" />
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

</section>
  );
};
