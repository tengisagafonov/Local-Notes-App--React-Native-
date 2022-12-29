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
      <BottomNavigator.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          tabBarIconStyle: {display: 'none'},
        }}>
        <BottomNavigator.Screen name={'Users'} component={Users} />
        <BottomNavigator.Screen name={'ToDo'} component={Todo} />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
