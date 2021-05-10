import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-rn';
import ScreenContainerFull from '../../components/ScreenContainers/ScreenContainerFull';
import Spacer from '../../components/general/Spacer';

const TestingGroundScreen = ({ navigation }) => {
  return (
    <ScreenContainerFull>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Spacer />
      <View style={tw('w-full p-2 rounded border-2')}>
        <Text style={tw('text-center font-bold text-xl')}>
          **Testing Grounds**
        </Text>
      </View>
      <Spacer />
      <Spacer />
      {/* put stuff to test below here */}
    </ScreenContainerFull>
  );
};

export default TestingGroundScreen;
