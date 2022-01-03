import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';
import {Spacing} from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    padding: Spacing.x,
    paddingBottom: Spacing.xx,
  },
  imgBorder: {
    borderStyle: 'dashed',
    borderRadius: Spacing.x,
    borderWidth: 2,
    borderColor: Colors.secondary,
    width: 200,
    height: 250,
    alignSelf: 'center',
    marginBottom: Spacing.l,
    marginTop: Spacing.l,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderColor: Colors.secondary,
  },
  buttons: {
    flexDirection: 'column',
  },
  btnText: {
    fontSize: Fonts.Size.l,
    alignSelf: 'center',
    marginBottom: Spacing.m,
  },
  imageError: {
    color: Colors.error,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
});
