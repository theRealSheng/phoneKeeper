import React from 'react';
import {View, Text} from 'react-native';

import styles from './header.styles';

const Header = ({title}) => (
  <View style={styles.container}>
    {title && (
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )}
  </View>
);

export default Header;
