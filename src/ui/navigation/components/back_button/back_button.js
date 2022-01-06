import React from 'react';
import {TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './back_button.styles';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.back}>
      <LottieView style={styles.lottie} autoPlay loop source={require('../../../assets/lottie/back_arrow.json')} />
    </TouchableOpacity>
  );
};

export default BackButton;
