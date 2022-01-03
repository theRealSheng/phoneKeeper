import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './button_with_text.styles';

const ButtonWithText = ({onPress, text, btnStyle = null, textStyle = null}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, !btnStyle ? {} : btnStyle]}>
      <Text style={[styles.btnText, !textStyle ? {} : textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithText;
