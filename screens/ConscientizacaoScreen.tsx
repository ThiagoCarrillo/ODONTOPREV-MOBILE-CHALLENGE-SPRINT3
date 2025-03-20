import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';

const ConscientizacaoScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Conscientização sobre seu Plano Odontológico</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Como utilizar corretamente seu plano odontológico:</Text>
        <Text style={styles.text}>
          1. Agende suas consultas com antecedência: Planeje suas consultas com seu dentista para evitar imprevistos.
        </Text>
        <Text style={styles.text}>
          2. Mantenha a higiene bucal em dia: Realize escovação e uso do fio dental regularmente, como orientado pelo seu dentista.
        </Text>
        <Text style={styles.text}>
          3. Aproveite as coberturas oferecidas: Verifique quais tratamentos são cobertos pelo seu plano e aproveite as vantagens.
        </Text>
        <Text style={styles.text}>
          4. Informe seu dentista sobre qualquer alteração no seu estado de saúde: Isso ajuda a garantir que o tratamento seja o mais eficaz possível.
        </Text>
        
        <Text style={styles.sectionTitle}>O que evitar para não prejudicar seu plano:</Text>
        <Text style={styles.text}>
          1. Fraudes: A falsificação de documentos ou tentativa de uso indevido do plano odontológico é crime e prejudica todos os beneficiários.
        </Text>
        <Text style={styles.text}>
          2. Faltas nas consultas sem aviso prévio: Caso não possa comparecer, avise ao dentista com a maior antecedência possível. Faltas não justificadas podem gerar prejuízos para você e outros usuários.
        </Text>
        <Text style={styles.text}>
          3. Excesso de tratamentos não autorizados: Certifique-se de que o procedimento desejado está coberto pelo seu plano. O uso indevido de tratamentos não previstos pode gerar custos extras.
        </Text>
        <Text style={styles.text}>
          4. Desrespeitar os limites de cobertura: Cada plano possui um limite de uso para certos tratamentos. Consulte regularmente sua cobertura para evitar surpresas.
        </Text>

        <Text style={styles.sectionTitle}>Atenção!</Text>
        <Text style={styles.text}>
          O seu compromisso com o plano odontológico é fundamental para manter a qualidade e o acesso aos melhores tratamentos. Siga as orientações acima e garanta que você e sua família usufruam de todos os benefícios oferecidos pela Odontoprev.
        </Text>
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
    marginTop: 45,
    marginBottom: 10,
    color: '#003366',
    textAlign: 'center',

  },
  scrollContainer: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#003366',
    
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
    textAlign: 'justify',
  },
});

export default ConscientizacaoScreen;
