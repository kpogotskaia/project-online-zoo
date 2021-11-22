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
        <div className={styles.revers}>
          <div className={styles.reversBtn}></div>
        </div>
      </div>
    </header>
  );
};
