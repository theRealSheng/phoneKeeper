import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';
import {Spacing} from '../../styles/spacing';

export default StyleSheet.create({
  card: {
    height: 400,
    width: 300,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Spacing.m,
    padding: Spacing.x,
    marginBottom: Spacing.xx,
  },
  name: {
    marginBottom: Spacing.xl,
    fontSize: Fonts.Size.xl,
  },
  img: {
    height: 230,
    marginBottom: Spacing.l,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lottieWrapper: {
    height: 50,
    width: 50,
  },
  lottie: {
    aspectRatio: 1,
  },
});
