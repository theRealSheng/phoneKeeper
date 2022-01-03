import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  textWrapper: {
    textAlign: 'center',
  },
  title: {
    fontSize: Fonts.Size.x,
  },
});
