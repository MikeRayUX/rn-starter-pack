import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import SampleContext from '../context/SampleContext';
import { useNavigation } from '@react-navigation/native';
import ScreenScrollContainer from '../components/ScreenContainers/ScreenScrollContainer';

const HomeScreen = ({ navigation }) => {
  const {
    state: { is_loading },
    setState,
  } = useContext(SampleContext);

  return (
    <ScreenScrollContainer>
      <View style={tw('w-full bg-white border rounded border-gray-400 mb-4')}>
        <View style={tw('mb-4')}>
          <View style={tw('w-full p-2 rounded mb-2 bg-indigo-600')}>
            <Text style={tw('text-white text-lg font-bold text-center')}>
              REACT NATIVE JUMPSTARTER{' '}
            </Text>
            <Text style={tw('text-white text-base font-bold text-center')}>
              BY @MICHAELARRIAGA
            </Text>
          </View>

          <View style={tw('px-2')}>
            <Text style={tw('text-base font-normal text-center mb-1')}>
              This app contains several pre-built screens and components.
            </Text>
            <Text style={tw('text-base font-normal text-center mb-1')}>
              Tap each link to view each screen.
            </Text>
          </View>
        </View>
      </View>
      <View style={tw('w-full flex justify-center items-center')}>
        <SectionHeader title="AuthFlow">
          <Link destination="SessionsScreen" route="Sessions" />
          <Link destination="RegistrationsScreen" route="Home" />
        </SectionHeader>
      </View>
    </ScreenScrollContainer>
  );
};

const SectionHeader = ({ title, children }) => {
  return (
    <View
      key={title}
      style={tw('w-full flex justify-center items-center mb-2')}
    >
      <Text style={tw('font-bold text-base text-center')}>{title}</Text>
      {children}
    </View>
  );
};

const Link = ({ destination, route }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw('')}
      disabled={false}
      onPress={() => {
        navigation.navigate(route);
      }}
    >
      <Text
        style={tw(
          'underline font-bold text-indigo-600 text-base text-center mb-1'
        )}
      >
        {destination}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
