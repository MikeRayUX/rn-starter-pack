import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';
import tw from 'tailwind-rn';

const ModalLoader = ({ is_loading, message, backdropOpacity }) => {
  return (
    <Modal
      isVisible={is_loading}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor={'#9B9B9B'}
      backdropOpacity={backdropOpacity || 0.4}
      animationOutTiming={1}
    >
      <View style={tw('flex justify-center items-center')}>
        <View style={tw('p-4 rounded-lg bg-white')}>
          <ActivityIndicator size="small" color="#d70cf5" />
          <View style={tw('mb-2')}></View>
          <Text style={tw('text-gray-900 text-xs')}>
            {message || 'Please Wait'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLoader;

const styles = {
  container: tw('flex justify-center items-center'),
  msgContainer: tw('p-3 rounded-lg bg-white'),
  message: tw('text-gray-900 text-xs mb-2'),
};
