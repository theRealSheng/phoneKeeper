import React from 'react';
import {Image} from 'react-native';

import styles from './image_server.styles';

import AppConfig from '../../../common/config/app_config';

const ImageServer = ({imageUrl, imgStyle}) => {
  return <Image style={[styles.img, !imgStyle ? {} : imgStyle]} source={{uri: AppConfig.hostPublic() + imageUrl}} />;
};

export default ImageServer;
