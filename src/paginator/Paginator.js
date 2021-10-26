import './Paginator.scss';

export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

export const Paginator = (props) => {
  return (
    <div className="paginator">
      <span>
        {props.num}
      </span>
      <div className="paginator__line">
        <div className="paginator__line-button">
          {props.theme}
        </div>
      </div>
    </div>
  );
};
