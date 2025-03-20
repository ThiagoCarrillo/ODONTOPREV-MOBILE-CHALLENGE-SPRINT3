import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface BackButtonProps {
  style?: any; 
}

const BackButton: React.FC<BackButtonProps> = ({ style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#64B5F6',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BackButton;