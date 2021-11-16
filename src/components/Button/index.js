import styles from './style.module.scss';

export const Button = (props) => {
  return (
    <button className={styles.button}>
      {props.name}
      {props.icon &&
        <img className={styles.icon} src={props.icon} alt="icon" />
      }
    </button>
  );
};

