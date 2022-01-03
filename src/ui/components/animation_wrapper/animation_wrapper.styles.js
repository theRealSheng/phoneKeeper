import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    flex: 1,
    width: '100%',
    aspectRatio: 0.5,
  },
  title: {
    fontSize: Fonts.Size.l,
    alignSelf: 'center',
  },
});
