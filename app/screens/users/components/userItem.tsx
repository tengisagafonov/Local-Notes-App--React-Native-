import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Spacing} from 'config/theme';
import FastImage from 'react-native-fast-image';
import {userType} from 'types/user';

const UserItem = ({item}: {item: userType}) => {
  return (
    <View style={styles.main}>
      <FastImage source={{uri: ''}} style={styles.img} />
      <View>
        <Text>{item?.name}</Text>
        <Text>{item?.username}</Text>
        <Text>{item?.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.normal,
    backgroundColor: Colors.white,
    marginTop: Spacing.normal,
  },
  img: {
    backgroundColor: Colors.darkGrey,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: Spacing.normal,
  },
});

export default UserItem;
