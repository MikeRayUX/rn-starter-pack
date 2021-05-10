import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { SampleProvider } from './src/context/SampleContext';
import SessionsScreen from './src/screens/authFlow/SessionsScreen';
import TestingGroundScreen from './src/screens/demoFlow/TestingGroundScreen';

const Stack = createStackNavigator();

const DemoFlow = {
  TestingGround: TestingGroundScreen,
};

const LandingFlow = {
  Home: HomeScreen,
};

const SessionsFlow = {
  Sessions: SessionsScreen,
};

const App = () => {
  return (
    <SampleProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TestingGround">
          {Object.entries({ ...DemoFlow }).map(([route, screen]) => {
            return (
              <Stack.Screen
                key={route}
                name={route}
                component={screen}
                options={{ headerShown: false }}
              />
            );
          })}

          {Object.entries({ ...LandingFlow }).map(([route, screen]) => {
            return (
              <Stack.Screen
                key={route}
                name={route}
                component={screen}
                options={{ headerShown: false }}
              />
            );
          })}

          {Object.entries({ ...SessionsFlow }).map(([route, screen]) => {
            return (
              <Stack.Screen
                key={route}
                name={route}
                component={screen}
                options={{ headerShown: false }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SampleProvider>
  );
};

export default App;
