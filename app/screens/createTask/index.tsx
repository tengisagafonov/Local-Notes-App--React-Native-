import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from 'app/components/header';
import {
  addTask,
  updateDescriptionTaskById,
  updatePriorityTaskById,
  updateStatusTaskById,
  updateTitleTaskById,
} from 'store/reduxes/task';
import Dropdown from 'app/components/dropdown';
import {Status} from 'types/task';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {StackParamList} from 'app/screens';
import {Colors, Spacing} from 'config/theme';
import {Tasks} from 'store/selectors/task';

interface ICreateTask {
  route: RouteProp<StackParamList, 'Create'>;
}

const CreateTask = (props: ICreateTask) => {
  const {id} = props.route.params;
  const tasks = useSelector(Tasks.info);
  const task = tasks.tasks.filter(i => i.id === id)[0];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <Header title={'Create'} goBack />
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
            navigation.goBack();
          }}
          style={styles.submit}>
          <Text>Submit</Text>
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

export default CreateTask;
