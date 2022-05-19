import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import { RootStackParamList } from './src/types';
import FirstAnimation from './src/components/FirstAnimation';
import SecondAnimation from './src/components/SecondAnimation';
import { ROUTES } from './src/constants';
import ThirdAnimation from './src/components/ThirdAnimation';
import FourthAnimation from './src/components/FourthAnimation';
import FifthAnimation from './src/components/FifthAnimation';



const RootStack = createNativeStackNavigator<RootStackParamList>();

 const App = () =>  {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={ROUTES.Home} >
        <RootStack.Screen name={ROUTES.Home} component={Home} options={{ title: 'Animations'}} />
        <RootStack.Screen name={ROUTES.FirstAnimation} component={FirstAnimation} options={{title: 'First Animation'}} />
        <RootStack.Screen name={ROUTES.SecondAnimation} component={SecondAnimation} options={{title: 'Second Animation'}} />
        <RootStack.Screen name={ROUTES.ThirdAnimation} component={ThirdAnimation} options={{title: 'Third Animation'}} />
        <RootStack.Screen name={ROUTES.FourthAnimation} component={FourthAnimation} options={{title: 'Fourth Animation'}} />
        <RootStack.Screen name={ROUTES.FifthAnimation} component={FifthAnimation} options={{title: 'Fifth Animation'}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App