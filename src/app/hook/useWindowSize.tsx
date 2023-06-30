import { useState, useEffect, useLayoutEffect } from 'react';

function useWindowSize() {
  const [screenWidth, setScreenWidth] = useState('0px');
  const [screenHeight, setScreenHeight] = useState('0px');

  useEffect(() => {
    setScreenWidth(window.innerWidth + 'px');
    setScreenHeight(window.innerHeight + 'px');
  }, []);

  useLayoutEffect(() => {
    function onResize() {
      if (window.outerWidth < window.innerWidth) {
        setScreenWidth(window.innerWidth + 'px');
        setScreenHeight(window.innerHeight + 'px');
      }
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { screenWidth, screenHeight };
}

export default useWindowSize;