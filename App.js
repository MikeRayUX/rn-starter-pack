import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/authFlow/HomeScreen';
import { SampleProvider } from './src/context/SampleContext';

const AuthFlow = createStackNavigator();

const App = () => {
  return (
    <SampleProvider>
      <NavigationContainer>
        <AuthFlow.Navigator initialRouteName="Home">
          <AuthFlow.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </AuthFlow.Navigator>
      </NavigationContainer>
    </SampleProvider>
  );
};

export default App;
