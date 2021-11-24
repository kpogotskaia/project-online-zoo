import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
import { SectionOne } from '../components/SectionOne/SectionOne';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { PetsInZoo } from '../components/PetsInZoo/PetsInZoo';
import { PayAndFeed } from '../components/PayAndFeed';
import { Testimonials } from '../components/Testimonials';
import { Map } from '../components/Map/Map';


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
