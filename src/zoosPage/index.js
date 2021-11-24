import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';

import './CountryZoo.scss';
import { CountryZooLeftAside } from '../components/sliders/countryZooAside/CountryZooLeftAside';
import { CountryZooVideo } from '../components/sliders/countryZooVideo/CountryZooVideo';

export const CountryZoo = () => [
  <Header key="0" />,
  <section key="1" className="info-zoo">
    <div className="container">
      <div className="info-zoo__content">
        <CountryZooLeftAside />

        <div className="content">
          <CountryZooVideo />

          <div className="content-info">
            <h5 className="content-info__heading">Population:</h5>
            <p className="content-info__pharagraph">About 1,590 individuals</p>
            <h5 className="content-info__heading">Habitat:</h5>
            <p className="content-info__pharagraph">Temperate forests high in the mountains of southwest China</p>
            <h5 className="content-info__heading">Diet:</h5>
            <p className="content-info__pharagraph">
              A panda's daily diet consists almost entirely
              of the leaves, stems and shoots of
              various bamboo species. Bamboo contains
              very little nutritional value so pandas
              must eat 12-38kg every day to meet their
              energy needs.
            </p>
            <h5 className="content-info__heading">Donated</h5>
            <p className="content-info__pharagraph">687.546$</p>
            <button className="content-button">feed</button>
          </div>
        </div>
      </div>
    </div>
  </section>,
  <Footer key="2" />
];
