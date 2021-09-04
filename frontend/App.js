import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome/Welcome';
import Register from './pages/Register/RegisterForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* export default function App() {
  return (
    <>
    <Welcome/>
      <StatusBar style="dark" />
    </>
  );
} */

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Olá' }}
        />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack