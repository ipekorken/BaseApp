import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'LANDSCAPE'
      : 'PORTRAIT',
  );

  useEffect(() => {
    const handleOrientationChange = ({window: {width, height}}) => {
      setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
    };

    Dimensions.addEventListener('change', handleOrientationChange);

    return () =>
      Dimensions.removeEventListener('change', handleOrientationChange);
  }, []);

  return orientation;
};

export default useOrientation;
