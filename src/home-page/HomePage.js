import { Header } from '../components/Header';
import { Footer } from '../footer/Footer';
import { SectionOne } from '../section-one/SectionOne';
import { HowItWorks } from '../how-it-works/HowItWorks';
import { PetsInZoo } from '../pets-in-zoo/PetsInZoo';
import { PayAndFeed } from '../pay-and-feed/PayAndFeed';
import { Testimonials } from '../components/Testimonials';
import { Map } from '../map/Map';


import './HomePage.scss';

export function HomePage() {
  return ([
    <Header key="0" />,
    <SectionOne key="1" />,
    <HowItWorks key="2" />,
    <PetsInZoo key="3" />,
    <PayAndFeed key="4" />,
    <Testimonials key="5" />,
    <Map key="6" />,
    <Footer  key="7" />
  ]);
}
