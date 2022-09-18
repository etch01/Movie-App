import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Splash, Home, Auth as Login} from '../screens/index';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={navOptionHandler}>
      <AuthStack.Screen name="login" component={Login} />
    </AuthStack.Navigator>
  );
};


const RootHome = () => {
  return (
    <HomeStack.Navigator screenOptions={navOptionHandler}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navOptionHandler}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="RootHome" component={RootHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}