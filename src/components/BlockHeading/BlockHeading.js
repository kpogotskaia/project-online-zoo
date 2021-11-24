import './BlockHeading.scss'

export const Heading = (props) => {
  return (
    <h2 className='heading'>
      {props.name}
    </h2>
  );
};
