import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import { RootStackParamList } from './src/types';
import FirstAnimation from './src/components/FirstAnimation';
import SecondAnimation from './src/components/SecondAnimation';
import { ROUTES } from './src/constants';



const RootStack = createNativeStackNavigator<RootStackParamList>();

 const App = () =>  {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={ROUTES.Home} >
        <RootStack.Screen name={ROUTES.Home} component={Home} options={{ title: 'Animations'}}></RootStack.Screen>
        <RootStack.Screen name={ROUTES.FirstAnimation} component={FirstAnimation} options={{title: 'First Animation'}} ></RootStack.Screen>
        <RootStack.Screen name={ROUTES.SecondAnimation} component={SecondAnimation} options={{title: 'Second Animation'}} ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App