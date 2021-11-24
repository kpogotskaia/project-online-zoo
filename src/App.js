import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './homePage/HomePage';
import { CountryZoo } from './zoosPage/index';
import { ChooseFavorite } from './mapPage/index';
import { getPath } from './navigation';
import { APP_PREFIX, APP_ROUTES } from './navigation';

import './App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to={getPath(APP_ROUTES.ABOUT)} />} />
    <Route path={APP_PREFIX} element={<Navigate replace to={APP_ROUTES.ABOUT} />} />
    <Route path={getPath(APP_ROUTES.ABOUT)} element={<HomePage />} />
    <Route path={getPath(APP_ROUTES.ZOOS)} element={<CountryZoo />} />
    <Route path={getPath(APP_ROUTES.MAP)} element={<ChooseFavorite />} />
    <Route path="*" element={"not found"} />
  </Routes>
);
