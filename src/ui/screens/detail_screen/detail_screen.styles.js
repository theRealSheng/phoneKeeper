import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {Spacing} from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    height: '100%',
    padding: Spacing.xl,
  },
  img: {
    height: 400,
  },
  data: {
    padding: Spacing.xl,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: Fonts.Size.x,
    marginBottom: Spacing.m,
  },
  key: {
    fontWeight: 'bold',
    marginRight: Spacing.m,
  },
  keyValue: {
    fontWeight: '400',
    fontStyle: 'italic',
  },
});
