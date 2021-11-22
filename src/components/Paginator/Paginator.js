import './Paginator.scss';

export const THEME = {
  LIGHT: 'L',
  DARK: 'D'
};

export const Paginator = (props) => {
  return (
    <div className="paginator">
      <span>
        {props.selected}/<span className="amount-style">{props.amount}</span>
      </span>
      <div className="paginator__line">
        <div className="paginator__line-button"></div>
      </div>
    </div>
  );
};
