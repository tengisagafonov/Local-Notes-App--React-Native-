import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from 'config/theme';
import TaskItem from './components/taskItem';
import Form from 'app/screens/todo/components/form';

const data: any = [];

const Todo = () => {
  const [isFormOpen, setOpenForm] = useState<boolean>(false);

  return (
    <View style={styles.main}>
      <FlatList data={data} renderItem={TaskItem} />
      <TouchableOpacity onPress={() => setOpenForm(true)} style={styles.add}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      <Form visible={isFormOpen} setVisible={setOpenForm} />
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
