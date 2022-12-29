import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ModalTest from 'app/components/modal';
import Dropdown from 'app/components/dropdown';

const Form = ({
  visible,
  setVisible,
}: {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
}) => {
  return (
    <ModalTest setVisible={setVisible} visible={visible} title={'Form'}>
      <View style={styles.main}>
        <View style={styles.formItem}>
          <Text>Title: </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formItem}>
          <Text>Description: </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formItem}>
          <Text>Status: </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formItem}>
          <Text>Priority: </Text>
          <Dropdown
            data={[{name: 0}, {name: 1}, {name: 2}]}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </ModalTest>
  );
};

const styles = StyleSheet.create({
  main: {width: '100%'},
  formItem: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {borderBottomWidth: 1, width: '70%'},
  submit: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
});

export default Form;
