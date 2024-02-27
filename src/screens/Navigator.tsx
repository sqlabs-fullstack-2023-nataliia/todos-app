import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main/Index';
import Secondary from './Main/Secondary';

const MainStackNative = createNativeStackNavigator();

export const MyStack = () => {
  
  return (
    <MainStackNative.Navigator>
      <MainStackNative.Screen name="main" component={Main} options={{ headerShown: false }}/>
      <MainStackNative.Screen name="secondary" component={Secondary} />
    </MainStackNative.Navigator>
  );
}