import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  lottie: {
    width: '100%',
    aspectRatio: 1,
    padding: 10,
  },
  title: {
    fontSize: Fonts.Size.l,
    alignSelf: 'center',
  },
});
