import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';
import {Spacing} from '../../../styles/spacing';
import {Colors} from '../../../styles/colors';

export default StyleSheet.create({
  btn: {
    padding: Spacing.x,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  btnText: {
    fontSize: Fonts.Size.l,
  },
});
