import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import tw from 'tailwind-rn';
import { MaterialIcons } from '@expo/vector-icons';

const Flash = ({ isVisible, message, onPress }) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeInUp"
      animationOut="fadeInDown"
      backdropColor="black"
      backdropOpacity={0.3}
      animationOutTiming={0.3}
      onBackdropPress={onPress}
    >
      <View
        style={tw('w-full rounded flex justify-center items-center bg-white')}
      >
        <View style={tw('flex flex-row justify-center items-center mt-8')}>
          <MaterialIcons name="error" size={32} color="orange" />
        </View>

        <Text style={tw('p-5 mb-4 w-full text-gray-900 text-center text-lg ')}>
          {message}
        </Text>
        <TouchableOpacity
          style={tw(
            'w-full p-4 border-t border-gray-400 bg-green-700 rounded-b'
          )}
          onPress={async () => {
            onPress();
          }}
        >
          <Text
            style={tw('text-base text-white font-bold text-center text-lg ')}
          >
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default Flash;
