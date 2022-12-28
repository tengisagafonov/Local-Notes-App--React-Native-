import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from './todo';
import Users from './users';

export type BottomParamList = {
  Users: undefined;
  ToDo: undefined;
};

const BottomNavigator = createBottomTabNavigator<BottomParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator>
        <BottomNavigator.Screen name={'Users'} component={Users} />
        <BottomNavigator.Screen name={'ToDo'} component={Todo} />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
