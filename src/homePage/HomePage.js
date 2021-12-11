import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
import { SectionOne } from '../components/SectionOne/SectionOne';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { PetsInZoo } from '../components/PetsInZoo';
import { PayAndFeed } from '../components/PayAndFeed';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { Map } from '../components/Map/Map';


import './HomePage.scss';

export function HomePage() {
  return ([
    <Header key="0" />,
    <SectionOne key="1" />,
    <HowItWorks key="2" />,
    <Benefits key="3" />,
    <PetsInZoo key="4" />,
    <PayAndFeed key="5" />,
    <Testimonials key="6" />,
    <Map key="7" />,
    <Footer  key="8" />
  ]);
}
