import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import UserItem from './components/userItem';
import api from 'config/api';
import {userType} from 'types/user';

const Users = () => {
  const [data, setData] = useState<userType[]>([]);

  useEffect(() => {
    api
      .get('users')
      .then(r => setData(r.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={UserItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default Users;
