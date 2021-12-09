import styles from './style.module.scss';

export const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={e => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {props.name}
      {props.icon &&
        <img className={styles.icon} src={props.icon} alt="icon" />
      }
    </button>
  );
};

