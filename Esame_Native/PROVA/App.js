import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, TablePage } from './Homepage.js';  // Assicurati di usare il percorso giusto per il file

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
          options={{ title: 'HomePage' }} // Titolo per la schermata Home
        />
        
        <Stack.Screen
          style={styles.tableContainer}
          name="Table"
          component={TablePage}
          options={({ route }) => ({ title: route.params.tableName })} // Titolo dinamico basato sulla tabella selezionata
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    tableContainer: {
      diplay:'inline',
      justifyContent:'center',
    },
});