import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './home-page/HomePage';
import { CountryZoo } from './zoos-page/CountryZoo';
import { ChooseFavorite } from './map-page/ChooseFavorite';

import './App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="about" />} />
    <Route path="about" element={<HomePage />} />
    <Route path="zoos" element={<CountryZoo />} />
    <Route path="map" element={<ChooseFavorite />} />
    <Route path="*" element={"not found"} />
  </Routes>
);
