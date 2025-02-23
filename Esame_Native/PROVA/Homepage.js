import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import mockData from './assets/mock_data.json'

// Dati JSON forniti
const jsonData = mockData;

const HomePage = ({ navigation }) => {
  const tables = Object.keys(jsonData); // Ottieni tutte le chiavi delle tabelle (Persona, Progetto, ecc.)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scegli una Tabella</Text>
      <FlatList
        data={tables}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Table', { tableName: item })}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const TablePage = ({ route }) => {
  const { tableName } = route.params; // Ottieni il nome della tabella dalla navigazione
  const data = jsonData[tableName];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {Object.keys(item).map((key) => (
        <Text key={key} style={styles.cell}>{item[key]}</Text>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{tableName}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#6200ee',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    padding: 10,
    backgroundColor: '#6200ee',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
});

export { HomePage, TablePage };
