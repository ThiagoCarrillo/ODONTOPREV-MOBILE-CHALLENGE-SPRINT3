import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import BackButton from '../components/BackButton';

const AgendamentosScreen = () => {
  <Text style={styles.title}>Alertas</Text>
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [cpfCliente, setCpfCliente] = useState('');
  const [especialidadeDentista, setEspecialidadeDentista] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleAgendar = async () => {
    try {
      const response = await axios.post('http://192.168.15.63:3000/api/agendamentos', {
        data,
        hora,
        cpf_cliente: cpfCliente,
        especialidade_dentista: especialidadeDentista,
        observacoes,
      });

      Alert.alert('Sucesso', 'Agendamento realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao realizar o agendamento.');
    }
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.text}>Tela de Agendamentos</Text>

      <TextInput
        style={styles.input}
        placeholder="Data (YYYY-MM-DD)"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        value={hora}
        onChangeText={setHora}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF do Cliente"
        value={cpfCliente}
        onChangeText={setCpfCliente}
      />
      <TextInput
        style={styles.input}
        placeholder="Especialidade do Dentista"
        value={especialidadeDentista}
        onChangeText={setEspecialidadeDentista}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
      />

      <Button title="Agendar Consulta" onPress={handleAgendar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#1976D2',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#003366',
    textAlign: 'center',}
});

export default AgendamentosScreen;
