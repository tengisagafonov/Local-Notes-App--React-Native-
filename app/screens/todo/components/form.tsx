import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Status, TaskType} from 'types/task';
import ModalTest from 'app/components/modal';
import Dropdown from 'app/components/dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTask,
  updateTitleTaskById,
  updateDescriptionTaskById,
  updateStatusTaskById,
  updatePriorityTaskById,
} from 'store/reduxes/task';
import {Colors} from 'config/theme';

const Form = ({
  visible,
  setVisible,
  id,
  task,
}: {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  id: number;
  task: TaskType;
}) => {
  const dispatch = useDispatch();

  return (
    <ModalTest setVisible={setVisible} visible={visible} title={'Form'}>
      <View style={styles.main}>
        <View style={styles.formItem}>
          <Text>Title: </Text>
          <TextInput
            value={task?.title}
            onChangeText={text =>
              dispatch(updateTitleTaskById({id: id, data: text}))
            }
            style={styles.input}
          />
        </View>
        <View style={styles.formItem}>
          <Text>Description: </Text>
          <TextInput
            style={styles.input}
            value={task?.description}
            onChangeText={text =>
              dispatch(updateDescriptionTaskById({id: id, data: text}))
            }
          />
        </View>
        <View style={styles.formItem}>
          <Text>Status: </Text>
          <Dropdown
            value={{name: task?.status}}
            data={Object.values(Status).map(item => ({name: item}))}
            onChange={val =>
              dispatch(updateStatusTaskById({id: id, data: val.name as Status}))
            }
            style={styles.input}
          />
        </View>
        <View style={styles.formItem}>
          <Text>Priority: </Text>
          <Dropdown
            value={{name: task?.priority}}
            data={[{name: 0}, {name: 1}, {name: 2}]}
            onChange={val =>
              dispatch(updatePriorityTaskById({id: id, data: val.name}))
            }
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(addTask(id));
            setVisible(false);
          }}
          style={styles.submit}>
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
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.darkGrey,
    width: '70%',
    paddingVertical: 8,
  },
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
