import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import tw from 'tailwind-rn';

const SessionsScreen = ({ navigation }) => {
  return (
    <View style={tw('w-full h-full')}>
      <StatusBar></StatusBar>
      <Text>SessionsScreen</Text>
    </View>
  );
};

export default SessionsScreen;
