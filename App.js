import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/pages/auth/LoginScreen';
import HomeScreen from './src/pages/main/HomeScreen';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [token, setToken] = useState('');

  const handleLogin = () => {
    setToken('faeffsfsfw');
  };

  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          options={{ headerShown: false }}
        >
          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
}
