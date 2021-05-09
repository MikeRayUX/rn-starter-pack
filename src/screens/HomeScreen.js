import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-rn';
import SampleContext from '../context/SampleContext';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const {
    state: { is_loading },
    setState,
  } = useContext(SampleContext);

  return (
    <ScrollView style={tw('w-full h-full px-4 mt-12 bg-white')}>
      <View style={tw('w-full p-2 rounded mb-2 bg-indigo-600')}>
        <Text style={tw('text-white text-xl font-bold text-center')}>
          React Native Jumpstarter
        </Text>
        <Text style={tw('text-white text-lg font-bold text-center')}>
          By Mike Arriaga
        </Text>
      </View>

      <Text style={tw('text-lg font-normal text-center mb-4')}>
        This app contains several pre-built screens and components. Tap each
        link to view each screen.
      </Text>

      <View style={tw('w-full flex justify-center items-center')}>
        <SectionHeader title="AuthFlow">
          <Link destination="SessionsScreen" route="Sessions" />
          <Link destination="RegistrationsScreen" route="Home" />
        </SectionHeader>
      </View>
    </ScrollView>
  );
};

const SectionHeader = ({ title, children }) => {
  return (
    <View
      key={title}
      style={tw('w-full flex justify-center items-center mb-2')}
    >
      <Text style={tw('font-bold text-xl text-center mb-2')}>{title}</Text>
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
          'underline font-bold text-indigo-600 text-xl text-center mb-2'
        )}
      >
        {destination}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
