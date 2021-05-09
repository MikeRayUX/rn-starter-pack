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
import Flash from '../../components/general/Flash';

const SampleScreen1 = ({ navigation }) => {
  const [flash, setFlash] = useState('sample falsh');

  return (
    <View style={tw('w-full h-full')}>
      {/* <Flash isVisible={!!flash} flash={flash} onPress={() => setFlash('')} /> */}
      <Text>SampleScreen1</Text>
    </View>
  );
};

export default SampleScreen1;
