import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderLink } from '../HeaderLink';

import styles from './style.module.scss';

const ROUTES = [
  {
    link: '/about',
    label: 'About'
  },
  {
    link: '/zoos',
    label: 'Zoos'
  },
  {
    link: '/map',
    label: 'Map'
  },
  {
    link: '/contact',
    label: 'Contact Us'
  },
  {
    link: '/design',
    label: 'Design'
  },
];

export const Header = () => {

  const [isOpened, setIsOpened] = useState(false);
  const openedClassName = isOpened ? styles.opened : styles.closed;

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/" className={styles.headerLogo}>
            <span>zoo</span>
            <span>online</span>
          </Link>

          <span
            className={classNames(styles.headerMenuIcon, openedClassName)}
            onClick={() => setIsOpened(!isOpened)}
          ></span>

          <nav className={classNames(styles.headerMenuContainer, openedClassName)}>
            <ul>
              {ROUTES.map(({ link, label }) =>
                <HeaderLink key={link} to={link} label={label} />
              )}
            </ul>
          </nav>
          <div className={styles.Revers}>
            <div className={styles.ReversBtn}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
