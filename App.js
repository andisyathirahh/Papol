import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login_screen'
import RegisterScreen from './screens/register_screen'
import HelpScreen from './screens/help_screen'
import ProfileScreen from './screens/profile_screen'
import HomeInstansi from './screens/home_instansi';
import ProfileInstansi from './screens/profile_instansi';
import Riwayat from './screens/riwayat_panggilan';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" 
        component={LoginScreen} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Register" 
        component={RegisterScreen} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Help" 
        component={HelpScreen} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Profile" 
        component={ProfileScreen} 
        options={{headerShown: false}}/>
        <Stack.Screen name="HomeInstansi" 
        component={HomeInstansi} 
        options={{headerShown: false}}/>
        <Stack.Screen name="ProfileInstansi" 
        component={ProfileInstansi} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Riwayat" 
        component={Riwayat} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
