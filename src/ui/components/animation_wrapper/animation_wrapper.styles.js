import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    aspectRatio: 1,
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: Fonts.Size.l,
    alignSelf: 'center',
  },
});
