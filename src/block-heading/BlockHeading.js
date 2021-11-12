import './BlockHeading.scss'

export const Heading = (props) => {
  return (
    <h3 className='heading'>
      {props.name}
    </h3>
  );
};
