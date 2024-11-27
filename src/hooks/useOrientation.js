import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [wh, setWH] = useState(Dimensions.get('window').height);
  const [ww, setWW] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handleOrientationChange = () => {
      setWH(Dimensions.get('window').height);
      setWW(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  return {ww, wh};
};

export default useOrientation;
