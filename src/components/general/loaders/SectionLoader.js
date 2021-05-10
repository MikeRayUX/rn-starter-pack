import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw from 'tailwind-rn';

const SectionLoader = ({ color, size }) => {
  return (
    <View style={tw('w-full flex justify-center items-center')}>
      <View style={tw('w-full flex justify-center items-center')}>
        <ActivityIndicator size={size || 'small'} color={color || '#D70CF5'} />
      </View>
    </View>
  );
};

export default SectionLoader;
