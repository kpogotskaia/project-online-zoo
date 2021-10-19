import './Map.scss';

import { Button } from '../button/Button';

import VectorEagleImg from '../assets/vector/eagle.png';
import VectorCrocImg from '../assets/vector/croc.png';
import VectorMonkeyImg from '../assets/vector/monkey.png';
import VectorPandaImg from '../assets/vector/panda.png';
import TooltipEagleImg from '../assets/vector/eagleTooltip.png';
import '../assets/map.png';


export const Map = () => {
  return (
    <section className="section-six">
    <h3 className="section-six__heading">Map</h3>
    <div className="section-six__map">
        <div className="section-six__map-vector vector__eagle">
            <img className="eagle" src={VectorEagleImg} alt="" />
        </div>
        <div className="section-six__map-vector vector__croc">
            <img className="crocodille" src={VectorCrocImg} alt="" />
        </div>
        <div className="section-six__map-vector vector__monkey">
            <img className="monkey" src={VectorMonkeyImg} alt="" />
        </div>
        <div className="section-six__map-vector vector__panda">
            <img className="panda" src={VectorPandaImg} alt="" />
        </div>
    </div>

    <div className="section-six__tooltip">
        <img className="section-six__tooltip-img" src={TooltipEagleImg} alt="" />
        <div>
            <h3>West End Bald Eagle</h3>
            <p><b>Region:</b> an an island near Los Angeles</p>
            <p><b>Population:</b> more than 270pairs in 2013</p>
        </div>
    </div>

    <Button />

</section>
  );
};
