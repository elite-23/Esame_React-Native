import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, TablePage } from './Homepage2.js';  // Assicurati di usare il percorso giusto per il file

// Crea il Stack Navigator
const Stack = createStackNavigator();

// Setup della navigazione
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Seleziona una Tabella' }} // Titolo per la schermata Home
        />
        <Stack.Screen
          name="Table"
          component={TablePage}
          options={({ route }) => ({ title: route.params.tableName })} // Titolo dinamico basato sulla tabella selezionata
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
