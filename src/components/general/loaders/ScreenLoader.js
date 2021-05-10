import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';

const ScreenLoader = ({
  isVisible,
  message,
  backdropColor,
  backdropOpacity,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor={backdropColor || '#D70CF5'}
      backdropOpacity={backdropOpacity || 0.9}
      animationOutTiming={1}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{message}</Text>
        <ActivityIndicator size="small" color="white" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    // height: '20%',
    width: '100%',
    borderRadius: 11,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
});

export default ScreenLoader;
