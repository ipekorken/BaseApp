import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [wh, setWH] = useState(Dimensions.get('window').height);
  const [ww, setWW] = useState(Dimensions.get('window').width);
  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? true
      : false,
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setWH(Dimensions.get('window').height);
      setWW(Dimensions.get('window').width);
      setIsPortrait(
        Dimensions.get('window').height > Dimensions.get('window').width
          ? true
          : false,
      );
    };

    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  return {ww, wh, isPortrait};
};

export default useOrientation;
