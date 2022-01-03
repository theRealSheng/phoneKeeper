import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Fonts} from '../../styles/fonts';
import {Spacing} from '../../styles/spacing';

export default StyleSheet.create({
  noItemContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Spacing.xl,
    position: 'relative',
  },
  noItem: {
    marginBottom: Spacing.xl,
    fontSize: Fonts.Size.l,
  },
  btn: {
    alignSelf: 'center',
  },
  add: {
    height: 200,
    width: 200,
  },
  addAbsolute: {
    position: 'absolute',
    zIndex: 100,
    bottom: 10,
    right: 10,
    height: 100,
    width: 100,
  },
  lottie: {
    aspectRatio: 1,
  },
  pull: {
    height: 200,
    width: 200,
  },
  header: {
    height: 80,
    fontSize: Fonts.Size.xl,
    marginBottom: Spacing.l,
    textDecorationLine: 'underline',
    color: Colors.primary,
    fontStyle: 'italic',
  },
});
