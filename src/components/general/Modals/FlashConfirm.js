import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const FlashConfirm = ({ isVisible, message, onYes, onNo }) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideInDown"
      backdropColor="black"
      backdropOpacity={0.4}
      animationOutTiming={1}
      onBackdropPress={onNo}
    >
      <View
        style={{
          width: '100%',
          borderRadius: 11,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text
          style={{
            padding: 20,
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 10,
            color: 'black',
          }}
        >
          {message}
        </Text>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E3E3E3',
            padding: 16,
            width: '100%',
          }}
          onPress={onYes}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'blue',
              textAlign: 'center',
            }}
          >
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E3E3E3',
            padding: 16,
            width: '100%',
          }}
          onPress={onNo}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'blue',
              textAlign: 'center',
            }}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FlashConfirm;
