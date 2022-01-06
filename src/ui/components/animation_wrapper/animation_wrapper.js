import React from 'react';
import {Text, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './animation_wrapper.styles';

const AnimatedWrapper = ({children, showAnimation, containerStyle = {}, textStyle = {}, title, style, ...lottieProps}) => {
  if (!showAnimation) {
    return <>{children}</>;
  }

  return (
    <Modal visible style={[styles.container, containerStyle]}>
      <LottieView style={[styles.lottie, style]} autoPlay loop {...lottieProps} />
      {title && <Text style={[styles.title, textStyle]}>{title}</Text>}
    </Modal>
  );
};

export default AnimatedWrapper;
