import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import TaskItem from './components/taskItem';
import {TaskType} from 'types/task';
import {
  clearState,
  createTask,
  deleteById,
  refreshDraft,
} from 'store/reduxes/task';
import Header from 'app/components/header';
import Dialog from './components/dialog';
import {useTodo} from 'app/screens/todo/hooks/useTodo';
import {styles} from './styles';

const Todo = () => {
  const {navigation, dispatch, setVisible, visible, task} = useTodo();

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
      <TouchableOpacity
        onPress={() => {
          dispatch(createTask(task.counter));
          dispatch(refreshDraft());
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

export default Todo;
