import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OdontoPrev</Text>
      <Text style={styles.subtitle}>Seu seguro odontológico inteligente</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamentos')}>
        <Text style={styles.buttonText}>Agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConhecaPlanos')}>
        <Text style={styles.buttonText}>Conheça os planos Odontoprev</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alertas')}>
        <Text style={styles.buttonText}>Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Conscientizacao')}>
        <Text style={styles.buttonText}>Conscientização</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#1976D2',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#64B5F6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
