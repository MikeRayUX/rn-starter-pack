import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//auth flow
import HomeScreen from './src/screens/authFlow/HomeScreen';
import { SampleProvider } from './src/context/SampleContext';
import SampleScreen1 from './src/screens/authFlow/SampleScreen1';

const AuthFlow = createStackNavigator();

const App = () => {
  return (
    <SampleProvider>
      <NavigationContainer>
        <AuthFlow.Navigator initialRouteName="Sample1">
          <AuthFlow.Screen name="Home" component={HomeScreen} />
          <AuthFlow.Screen name="Sample1" component={SampleScreen1} />
        </AuthFlow.Navigator>
      </NavigationContainer>
    </SampleProvider>
  );
};

export default App;
