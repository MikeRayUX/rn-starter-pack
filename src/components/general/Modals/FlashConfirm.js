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
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onYes}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onNo}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    // height: '40%',
    width: '100%',
    borderRadius: 11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalText: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  button: {
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
    padding: 16,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
  },
});

export default FlashConfirm;
