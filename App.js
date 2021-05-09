import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { SampleProvider } from './src/context/SampleContext';
import SessionsScreen from './src/screens/authFlow/SessionsScreen';

const Stack = createStackNavigator();

const LandingFlow = {
  Home: HomeScreen,
};

const SessionsFlow = {
  Sessions: SessionsScreen,
};

const App = () => {
  return (
    <SampleProvider>
      <NavigationContainer initialRouteName="AuthFlow">
        <Stack.Navigator initialRouteName="Sessions">
          {Object.entries({ ...LandingFlow }).map(([route, screen]) => {
            return (
              <Stack.Screen
                key={route}
                name={route}
                component={screen}
                options={{}}
              />
            );
          })}

          {Object.entries({ ...SessionsFlow }).map(([route, screen]) => {
            return (
              <Stack.Screen
                key={route}
                name={route}
                component={screen}
                options={{}}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SampleProvider>
  );
};

export default App;
