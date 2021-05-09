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
import SampleContext from '../../context/SampleContext';

const HomeScreen = ({ navigation }) => {
  const {
    state: { is_loading },
    setState,
  } = useContext(SampleContext);

  return (
    <View style={tw('w-full h-full px-4 mt-8')}>
      <View style={tw('w-full p-4 rounded border')}>
        <Text style={tw('text-lg font-bold text-center')}>
          This is a sample screen
        </Text>
      </View>
      {is_loading ? <Text>it's loading</Text> : null}
    </View>
  );
};

export default HomeScreen;
