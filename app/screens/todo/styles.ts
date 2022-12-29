import {StyleSheet} from 'react-native';
import {Colors} from 'config/theme';

export const styles = StyleSheet.create({
  main: {flex: 1},
  add: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 22,
  },
});
