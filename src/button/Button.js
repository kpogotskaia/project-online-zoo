import './Button.scss';

export const Button = (props) => {
  return (
    <button className="button">
      {props.name}
      {props.icon &&
      <img className="icon" src={props.icon} alt="icon" />
      }
    </button>
  );
};

