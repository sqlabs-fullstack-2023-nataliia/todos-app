import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/screens/Navigator';
import { TouchableOpacity } from 'react-native';


export default function App() {



  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}

