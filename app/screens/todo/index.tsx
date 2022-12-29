import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from 'config/theme';
import TaskItem from './components/taskItem';
import Form from 'app/screens/todo/components/form';
import {useSelector, useDispatch} from 'react-redux';
import {Tasks} from 'store/selectors/task';
import {TaskType} from 'types/task';
import {createTask, clearState, deleteById} from 'store/reduxes/task';

const Todo = () => {
  const [isFormOpen, setOpenForm] = useState<boolean>(false);
  const tasks = useSelector(Tasks.items);
  const hasDrafted = useSelector(Tasks.hasDrafted);
  const dispatch = useDispatch();

  console.log(tasks, hasDrafted);

  return (
    <View style={styles.main}>
      <FlatList
        data={tasks.filter(i => i.isSubmitted)}
        renderItem={({item}: {item: TaskType}) => (
          <TaskItem
            item={item}
            onDelete={() => dispatch(deleteById(item.id))}
          />
        )}
      />
      <TouchableOpacity onPress={() => dispatch(clearState())}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setOpenForm(true);
          dispatch(createTask(tasks.length));
        }}
        style={styles.add}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      <Form visible={isFormOpen} setVisible={setOpenForm} id={tasks.length} />
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
