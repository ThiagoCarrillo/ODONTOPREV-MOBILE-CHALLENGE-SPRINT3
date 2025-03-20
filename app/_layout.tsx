import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AgendamentosScreen from '../screens/AgendamentosScreen';
import AlertasScreen from '../screens/AlertasScreen';
import PlanosScreen from '../screens/ConhecaPlanosScreen';
import ConscientizacaoScreen from '../screens/ConscientizacaoScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Agendamentos" component={AgendamentosScreen} />
      <Stack.Screen name="ConhecaPlanos" component={PlanosScreen} />
      <Stack.Screen name="Alertas" component={AlertasScreen} />
      <Stack.Screen name="Conscientizacao" component={ConscientizacaoScreen} />
    </Stack.Navigator>

  );
}
