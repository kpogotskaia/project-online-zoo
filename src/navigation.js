export const APP_PREFIX = 'project-online-zoo';

export const APP_ROUTES = {
  ABOUT: 'about',
  MAP: 'map',
  ZOOS: 'zoos',
};

export const getPath = (segment) =>
  [APP_PREFIX, segment].join('/');

export const ROUTES = [
  {
    link: `../${getPath(APP_ROUTES.ABOUT)}`,
    label: 'About'
  },
  {
    link: `../${getPath(APP_ROUTES.ZOOS)}`,
    label: 'Zoos'
  },
  {
    link: `../${getPath(APP_ROUTES.MAP)}`,
    label: 'Map'
  },
  {
    link: `../${getPath(APP_ROUTES.MAP)}`,
    label: 'Contact Us'
  },
  {
    link: `../${getPath(APP_ROUTES.MAP)}`,
    label: 'Design'
  },
];
