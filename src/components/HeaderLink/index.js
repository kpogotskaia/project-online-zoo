import { Link, useResolvedPath, useMatch } from 'react-router-dom';

import styles from './style.module.scss';

export const HeaderLink = ({ to, link, label }) => {
  const resolved = useResolvedPath(to);
  const matched = !!useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`
        ${styles.headerLink}
        ${matched ? styles.headerLinkActive : ''}
      `}
      to={to}>
        {label}
      </Link>
  );
};
