import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const useImagePicker = ({options = {}, onSelect}) => {
  const defaultOptions = {
    mediaType: 'photo',
    saveToPhotos: false,
    selectionLimit: 1,
    ...options,
  };

  const onPressOpenCamera = () => {
    launchCamera(defaultOptions, onSelect);
  };

  const onPressOPenLibrary = () => {
    launchImageLibrary(defaultOptions, onSelect);
  };

  return {
    onPressOpenCamera,
    onPressOPenLibrary,
  };
};

export {useImagePicker};
