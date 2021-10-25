import './Paginator.scss';

export const Paginator = (props) => {
  return (
    <div className="gallery-scroll">
      <span>{props.num}</span>
      <div className="gallery-scroll__line">
        <div className="gallery-scroll__line-button">{props.color}</div>
      </div>
    </div>
  );
};

