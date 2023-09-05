import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const BottomSheet = ({ children, isVisible, setIsVisible }: Props) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
    >
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <View style={styles.bottomSheetContainer}>
          {/* Parte superior del BottomSheet */}
          <View style={styles.bottomSheetHeader}>
            <View style={{
              backgroundColor: '#ccc',
              width: 35,
              height: 4,
              borderRadius: 50
            }} /> 

          </View>

          {/* Contenido del BottomSheet */}
          <View style={styles.bottomSheetContent}>
            {children} 
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)', // Fondo semitransparente
  },
  bottomSheetHeader: {
    backgroundColor: '#101010',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  bottomSheetContent: {
    backgroundColor: '#101010',
    padding: 16,
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

export default BottomSheet;
