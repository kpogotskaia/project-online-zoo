import classNames from 'classnames';

import styles from './style.module.scss';

export const THEME = {
  LIGHT: 'L',
  DARK: 'D'
};

const paginatorWidth = 245;

export const Paginator = ({ className, amount, selected }) => {

  const width = paginatorWidth / amount;
  const left = width * (selected - 1)

  return (
    <div className={classNames(className, styles.paginator)}>
      <span>
        {selected}/<span className={styles['amount-style']}>{amount}</span>
      </span>
      <div className={styles.paginatorLine}>
        <div
          className={styles.paginatorLineButton}
          style={{ left, width }}
        ></div>
      </div>
    </div>
  );
};
