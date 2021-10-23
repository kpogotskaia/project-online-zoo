import { Header } from './Header';
import { Footer } from './Footer';
import { SectionOne } from './section-one/SectionOne';
import { HowItWorks } from './how-it-works/HowItWorks';
import { PetsInZoo } from './section-three/PetsInZoo';
import { PayAndFeed } from './section-four/PayAndFeed';
import { Testimonials } from './section-five/Testimonials';
import { Map } from './section-six/Map';


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
