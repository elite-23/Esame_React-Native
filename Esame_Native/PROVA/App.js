import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage ,TablePage} from './Homepage.js';

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
          options={{ title: 'HomePage' }}
        />
        <Stack.Screen
          name="Table"
          component={TablePage}
          options={({ route }) => ({ title: route.params.tableName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});