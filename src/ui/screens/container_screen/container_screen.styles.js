import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successLottie: {
    aspectRatio: 0.5,
  },
  successText: {
    position: 'absolute',
    bottom: '10%',
    color: Colors.success,
  },
  failedText: {
    position: 'absolute',
    bottom: '10%',
    color: Colors.error,
  },
  successDeleteLottie: {
    aspectRatio: 0.47,
  },
});
