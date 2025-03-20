import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import BackButton from '../components/BackButton';

const PlanosScreen = () => {
  const handlePress = () => {
    Linking.openURL('https://www.odontoprev.com.br/planos');
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Planos</Text>
      <Text style={styles.description}>
        Escolha o plano odontológico sob medida para você e a sua família. A Odontoprev oferece 
        a maior e melhor rede de dentistas onde e quando você quiser. Confira as principais coberturas:
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver Planos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlanosScreen;
