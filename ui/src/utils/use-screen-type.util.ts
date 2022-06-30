import { useEffect, useState } from 'react';
import { ScreenType } from '../core';

const getScreenType = (width: number): ScreenType => {
  if (width < 540) {
    return ScreenType.small;
  }

  return ScreenType.large;
};

export const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    getScreenType(window.innerWidth)
  );

  useEffect(() => {
    const handleWidthChange = () => {
      const newScreenType = getScreenType(window.innerWidth);
      setScreenType(newScreenType);
    };

    window.addEventListener('resize', handleWidthChange);

    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  return screenType;
};

export const useSmallScreen = () => {
  const screenType = useScreenType();

  return screenType === ScreenType.small;
};
