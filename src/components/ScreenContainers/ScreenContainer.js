import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-rn';

const ScreenContainer = ({ children }) => {
  return <View style={tw('w-full h-full p-4 bg-white')}>{children}</View>;
};

export default ScreenContainer;
