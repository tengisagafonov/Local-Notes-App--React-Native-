import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from 'app/components/header';
import {updateTask} from 'store/reduxes/task';
import {RouteProp} from '@react-navigation/native';
import Dropdown from 'app/components/dropdown';
import {Status, TaskType} from 'types/task';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Colors, Spacing} from 'config/theme';
import {StackParamList} from 'app/screens';

interface IEditTask {
  route: RouteProp<StackParamList, 'Edit'>;
}

const EditTask = (props: IEditTask) => {
  const [task, setTask] = useState<TaskType>(props.route.params.task);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View>
      <Header title={'Edit'} goBack />
      <View style={styles.main}>
        <View style={styles.formItem}>
          <Text>Title: </Text>
          <TextInput
            value={task?.title}
            onChangeText={text =>
              setTask(prev => ({...prev, ...{title: text}}))
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
              setTask(prev => ({...prev, ...{description: text}}))
            }
          />
        </View>
        <View style={styles.formItem}>
          <Text>Status: </Text>
          <Dropdown
            value={{name: task?.status}}
            data={Object.values(Status).map(item => ({name: item}))}
            onChange={val =>
              setTask(prev => ({...prev, ...{status: val.name}}))
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
              setTask(prev => ({...prev, ...{priority: val.name}}))
            }
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateTask({task: task}));
            navigation.goBack();
          }}
          style={styles.submit}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {width: '100%', padding: Spacing.larger},
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

export default EditTask;
