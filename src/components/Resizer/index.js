import { useEffect, useState } from 'react';

export const Resizer = ({ Component }) => {
  const [screenWidth, setScreenWidth] = useState(document.body.offsetWidth);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setScreenWidth(document.body.offsetWidth);
    });
  }, []);

  return (
    <Component screenWidth={screenWidth} />
  );
};

