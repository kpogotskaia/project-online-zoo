import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink } from '../HeaderLink';
import { ROUTES } from '../../navigation';
import styles from './style.module.scss';

export const Header = () => {

  const [isOpened, setIsOpened] = useState(false);
  const openedClassName = isOpened ? styles.opened : styles.closed;

  return (
    <header>
      <div className={styles.headerBlock}>
        <Link to="/" className={classNames(styles.headerLogo, openedClassName)}>
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
            <li key={`${link}${label}`} className={classNames(styles.item)}>
              <HeaderLink to={link} label={label} />
            </li>
            )}
          </ul>
        </nav>
        <div className={classNames(styles.revers, openedClassName)}>
          <div className={styles.reversBtn}></div>
        </div>
      </div>
    </header>
  );
};
