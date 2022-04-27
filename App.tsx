import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import { RootStackParamList, ROUTES } from './src/types';
import FirstAnimation from './src/components/FirstAnimation';



const RootStack = createNativeStackNavigator<RootStackParamList>();

 const App = () =>  {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={ROUTES.Home} >
        <RootStack.Screen name={ROUTES.Home} component={Home} options={{ title: 'Animations'}}></RootStack.Screen>
        <RootStack.Screen name={ROUTES.FirstAnimation} component={FirstAnimation} ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App