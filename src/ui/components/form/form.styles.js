import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Spacing} from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  submit: {
    backgroundColor: Colors.white,
    borderWidth: Spacing.xs,
    paddingLeft: 50,
    paddingRight: 50,
    alignSelf: 'center',
  },
  btnText: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});
