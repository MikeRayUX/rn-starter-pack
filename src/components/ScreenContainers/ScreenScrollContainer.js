import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'tailwind-rn';

const ScreenScrollContainer = ({
  children,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
}) => {
  return (
    <ScrollView
      style={tw('w-full h-full p-4 bg-white')}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator || true}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || true}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenScrollContainer;
