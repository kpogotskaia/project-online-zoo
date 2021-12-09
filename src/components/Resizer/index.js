import { useEffect, useState } from 'react';

export const Resizer = ({ Component }) => {
  const [screenWidth, setScreenWidth] = useState(document.body.offsetWidth);


  const resizeHandler = (e) => {
    setScreenWidth(document.body.offsetWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <Component screenWidth={screenWidth} />
  );
};

