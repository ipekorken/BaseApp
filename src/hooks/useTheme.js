import {useColorScheme} from 'react-native';

const useTheme = () => {
  const mode = useColorScheme();

  const lightTheme = {
    background: {
      primary: '#FFFFFF', // Ana arka plan rengi
      secondary: '#F5F5F5', // Kartlar ve bölümler için arka plan
      accent: '#E3E3E3', // Ek veya vurgulu alanlar
    },
    text: {
      primary: '#000000', // Ana metin rengi
      secondary: '#4F4F4F', // İkincil metin (alt bilgi vb.)
      placeholder: '#9E9E9E', // Placeholder metin rengi
    },
    button: {
      background: '#007BFF', // Buton arka plan rengi
      text: '#FFFFFF', // Buton metin rengi
      disabled: '#E0E0E0', // Buton pasifken arka plan
    },
    border: {
      primary: '#D6D6D6', // Genel sınır rengi
      focus: '#007BFF', // Odaklanmış elemanların sınır rengi
    },
  };

  const darkTheme = {
    background: {
      primary: '#121212', // Ana arka plan rengi
      secondary: '#1F1F1F', // Kartlar ve bölümler için arka plan
      accent: '#333333', // Ek veya vurgulu alanlar
    },
    text: {
      primary: '#FFFFFF', // Ana metin rengi
      secondary: '#B3B3B3', // İkincil metin (alt bilgi vb.)
      placeholder: '#707070', // Placeholder metin rengi
    },
    button: {
      background: '#1E88E5', // Buton arka plan rengi
      text: '#FFFFFF', // Buton metin rengi
      disabled: '#424242', // Buton pasifken arka plan
    },
    border: {
      primary: '#333333', // Genel sınır rengi
      focus: '#1E88E5', // Odaklanmış elemanların sınır rengi
    },
  };

  return mode == 'dark' ? darkTheme : lightTheme;
};

export default useTheme;
