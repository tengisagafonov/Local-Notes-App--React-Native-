import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from './todo';
import Users from './users';
import EditTask from 'app/screens/editTask';
import CreateTask from 'app/screens/createTask';
import {TaskType} from 'types/task';

export type StackParamList = {
  Home: undefined;
  Create: undefined;
  Edit: {task: TaskType};
};

export type BottomParamList = {
  Users: undefined;
  ToDo: StackParamList;
};

const BottomNavigator = createBottomTabNavigator<BottomParamList>();
const StackNavigator = createStackNavigator<StackParamList>();

const Stack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name={'Home'} component={Todo} />
      <StackNavigator.Screen name={'Edit'} component={EditTask} />
      <StackNavigator.Screen name={'Create'} component={CreateTask} />
    </StackNavigator.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          tabBarIconStyle: {display: 'none'},
        }}>
        <BottomNavigator.Screen name={'Users'} component={Users} />
        <BottomNavigator.Screen name={'ToDo'} component={Stack} />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
