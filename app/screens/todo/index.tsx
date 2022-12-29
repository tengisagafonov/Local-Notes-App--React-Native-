import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from 'config/theme';
import TaskItem from './components/taskItem';
import {useSelector, useDispatch} from 'react-redux';
import {Tasks} from 'store/selectors/task';
import {TaskType} from 'types/task';
import {
  clearState,
  createTask,
  deleteById,
  refreshDraft,
} from 'store/reduxes/task';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {StackParamList} from 'app/screens';
import Header from 'app/components/header';
import Dialog from './components/diolog';

const Todo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const task = useSelector(Tasks.info);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'Home'>>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (task.hasDrafted && task.hasChangesInNew) {
      setVisible(true);
    }
  }, [task.hasDrafted, task.hasChangesInNew]);

  return (
    <View style={styles.main}>
      <Header title={'ToDo'} />
      <FlatList
        data={task.tasks.filter(i => i.isSubmitted)}
        renderItem={({item}: {item: TaskType}) => (
          <TaskItem
            item={item}
            navigation={navigation}
            onDelete={() => dispatch(deleteById(item.id))}
          />
        )}
      />
      <TouchableOpacity onPress={() => dispatch(clearState())}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(refreshDraft());
          dispatch(createTask(task.counter));
          navigation.navigate('Create');
        }}
        style={styles.add}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      <Dialog
        setVisible={setVisible}
        visible={visible}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Todo;
