import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TaskType} from 'types/task';
import {Colors, Spacing} from 'config/theme';
import {useNavigation} from '@react-navigation/native';

const TaskItem = ({item, onDelete}: {item: TaskType; onDelete: () => void}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text>Title: </Text>
        <Text>{item?.title}</Text>
      </View>
      <View style={styles.row}>
        <Text>Description: </Text>
        <Text>{item?.description}</Text>
      </View>
      <View style={styles.row}>
        <Text>Status: </Text>
        <Text>{item?.status}</Text>
      </View>
      <View style={styles.row}>
        <Text>Priority: </Text>
        <Text>{item?.priority}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => navigation.navigate('Edit', {task: item})}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.delete}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: Spacing.normal,
    backgroundColor: Colors.white,
    padding: Spacing.normal,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.small,
  },
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.normal,
    width: '48%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.normal,
    borderRadius: 5,
    width: '48%',
    borderWidth: 1,
    borderColor: Colors.red,
  },
});

export default memo(TaskItem);
