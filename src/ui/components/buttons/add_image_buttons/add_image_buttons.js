import React from 'react';
import {View} from 'react-native';

import styles from './add_image_buttons.styles';

import ButtonWithText from '../button_with_text';

import {useImagePicker} from '../../../hooks/useImagePicker';

const AddImageButtons = ({onSelect, cntrStyle = {}, btnStyle = {}}) => {
  const {onPressOpenCamera, onPressOPenLibrary} = useImagePicker({onSelect});

  return (
    <View style={[styles.container, cntrStyle]}>
      <ButtonWithText btnStyle={[btnStyle]} text={'Launch Camera'} onPress={onPressOpenCamera} />
      <ButtonWithText btnStyle={[btnStyle]} text={'Select from Library'} onPress={onPressOPenLibrary} />
    </View>
  );
};

export default AddImageButtons;
