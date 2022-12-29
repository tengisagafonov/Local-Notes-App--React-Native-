import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ModalTest from 'app/components/modal';
import {Spacing} from 'config/theme';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {StackParamList} from 'app/screens';
import {useDispatch} from 'react-redux';
import {refreshDraft} from 'store/reduxes/task';

const Dialog = ({
  visible,
  setVisible,
  navigation,
}: {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}) => {
  const dispatch = useDispatch();

  return (
    <ModalTest setVisible={setVisible} visible={visible} title={'Dialog'}>
      <View style={styles.main}>
        <View style={styles.info}>
          <Text>Has changes in draft , Do you want continue ? </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create');
            setVisible(false);
          }}
          style={styles.submit}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(refreshDraft());
            setVisible(false);
          }}
          style={styles.submit}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>
    </ModalTest>
  );
};

const styles = StyleSheet.create({
  main: {width: '100%'},
  info: {alignItems: 'center', marginTop: Spacing.larger},
  submit: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
});

export default Dialog;
