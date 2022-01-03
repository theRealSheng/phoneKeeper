import React from 'react';
import {Image} from 'react-native';

import styles from './Image_display.styles';

import {Settings} from '../../../common/constants/setttings';

const ImageDisplay = ({imageUrl, imgStyle}) => {
  const path = !Settings.isIos ? imageUrl : imageUrl.replace('file://', '');
  return <Image style={[styles.img, !imgStyle ? {} : imgStyle]} source={{uri: path}} />;
};

export default ImageDisplay;
