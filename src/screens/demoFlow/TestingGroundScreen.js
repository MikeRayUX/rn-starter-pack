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
import FlashConfirm from '../../components/general/Modals/FlashConfirm';
const TestingGroundScreen = ({ navigation }) => {
  const [confirm, setConfirm] = useState(true);

  return (
    <ScreenContainerFull>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Spacer />
      <View style={tw('w-full p-2 rounded border-2')}>
        <Text style={tw('text-center font-bold text-xl')}>
          **Testing Grounds**
        </Text>
      </View>
      <FlashConfirm
        isVisible={confirm}
        message={'are you sure?'}
        onYes={() => setConfirm(false)}
        onNo={() => setConfirm(false)}
      />
    </ScreenContainerFull>
  );
};

export default TestingGroundScreen;
