import React from 'react';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ModalTest = ({
  children,
  visible,
  setVisible,
  title,
}: {
  children?: React.ReactNode;
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  title?: string;
}) => (
  <Modal isVisible={visible} onBackdropPress={() => setVisible(false)}>
    <View style={styles.centered}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.close} onPress={() => setVisible(false)}>
        <Text>X</Text>
      </TouchableOpacity>
      {children}
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  close: {position: 'absolute', top: 15, right: 15},
  title: {
    fontWeight: '600',
    fontSize: 16,
    position: 'absolute',
    top: 15,
  },
  centered: {
    margin: 25,
    backgroundColor: 'white',
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalTest;
