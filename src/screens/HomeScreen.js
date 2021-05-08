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
import { default as tw } from 'tailwind-rn';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw('w-full h-full')}>
      <Text style={tw('font-bold')}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
