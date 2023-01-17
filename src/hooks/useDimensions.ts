import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {OrientationType} from '../models/navigation';

export function useOrientation(): {orientation: OrientationType} {
  const [orientation, setOrientation] = useState<OrientationType>(
    OrientationType.portrait,
  );

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation(OrientationType.portrait);
      } else {
        setOrientation(OrientationType.landscape);
      }
    });
  }, []);

  return {orientation};
}
