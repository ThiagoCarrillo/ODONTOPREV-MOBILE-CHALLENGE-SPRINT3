import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const AlertasScreen = () => {
  const notificacoes = [
    'Seu próximo agendamento de consulta odontológica está em 2 dias. Não se esqueça!',
    'Lembre-se de realizar a higiene bucal após as refeições para evitar problemas dentários.',
    'Atenção: Há uma nova cobertura disponível no seu plano de saúde odontológico!',
    'Seu dentista confirmou o agendamento. Vejo você em breve!',
    'Aproveite o desconto em tratamentos odontológicos até o final do mês!',
    'Fique atento: Seu plano será renovado automaticamente em 30 dias.',
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Alertas</Text>
      <ScrollView contentContainerStyle={styles.notificationsContainer}>
        {notificacoes.map((alerta, index) => (
          <View key={index} style={styles.notificationCard}>
            <Text style={styles.notificationText}>{alerta}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#003366',
    textAlign: 'center',
  },
  notificationsContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default AlertasScreen;
