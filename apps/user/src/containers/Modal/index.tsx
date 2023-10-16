import React from 'react';
import { Modal as DefaultModal, Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  isVisible?: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const Modal = ({ children, isVisible, setIsVisible }: Props) => {
  return (
    <DefaultModal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      style={{
        zIndex: 999
      }}
    >
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <View style={styles.bottomSheetContainer}>
          {/* Contenido del BottomSheet */}
          <View style={styles.bottomSheetContent}>
            {children} 
          </View>
        </View>
      </TouchableWithoutFeedback>
    </DefaultModal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  bottomSheetContent: {
    backgroundColor: '#101010',
    padding: 16,
    paddingBottom: 0,
    borderRadius: 15,
  },
  closeButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red', // Puedes cambiar el color del texto aquí
  },
});

export default Modal;