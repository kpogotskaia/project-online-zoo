import classNames from 'classnames';

import styles from './style.module.scss';

export const THEME = {
  LIGHT: 'L',
  DARK: 'D'
};

const paginatorWidth = 245;

export const Paginator = ({ className, amount, selected, theme }) => {

  const width = paginatorWidth / amount;
  const left = width * (selected - 1);

  return (
    <div className={classNames(className, styles.paginator)}>
      <span
        className={classNames(styles.amount, {
          [styles.amountLight]: theme === THEME.LIGHT
        })}
      >
        {selected}/<span className={styles.amountStyle}>{amount}</span>
      </span>

      <div className={styles.paginatorLine}>
        <div
          className={classNames(styles.paginatorLineButton, {
            [styles.paginatorLineButtonLight]: theme === THEME.LIGHT
          })}
          style={{ left, width }}
        ></div>
      </div>
    </div>
  );
};
