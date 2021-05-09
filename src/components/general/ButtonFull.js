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

// EXAMPLE USAGE:
// <ButtonFull
//   title={'Complete'}
//   disabled={is_loading}
//   is_loading={is_loading}
//   bgColor={'bg-indigo-600'}
//   onPress={() => setIsLoading(true)}
// />
// To skip using the loader animation, set is_loading and disabled to false, you can also skip using loading_text prop

const ButtonFull = ({
  title,
  bgColor,
  disabled,
  onPress,
  is_loading,
  loading_text,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        disabled
          ? tw(
              `w-full py-4 px-2 rounded opacity-50 ${bgColor || 'bg-green-600'}`
            )
          : tw(`w-full py-4 px-2 rounded ${bgColor || 'bg-green-600'}`)
      }
      onPress={onPress}
    >
      <View style={tw('w-full flex flex-row justify-center items-center')}>
        <Text style={tw('text-lg font-bold text-white text-center pr-2')}>
          {is_loading ? loading_text || 'Please Wait...' : title}
        </Text>
        {is_loading ? <ActivityIndicator size="small" color="white" /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFull;
