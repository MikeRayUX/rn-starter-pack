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

const HomeScreen = ({ navigation }) => {
  const {
    state: { is_loading },
    setState,
  } = useContext(SampleContext);

  return (
    <View style={tw('w-full h-full')}>
      <Text style={tw('font-bold')}>HomeScreen</Text>
      {is_loading ? <Text>it's loading</Text> : null}
    </View>
  );
};

export default HomeScreen;
