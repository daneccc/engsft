import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';
import Gerador from './pages/Gerador';
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
          options={{ title: 'PSecurer' }}
        />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Gerador" component={Gerador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack