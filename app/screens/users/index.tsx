import React from 'react';
import {FlatList, View} from 'react-native';

const data: Object[] = [];

const Users = () => {
  return (
    <View>
      <FlatList data={data} renderItem={() => <View />} />
    </View>
  );
};

export default Users;
