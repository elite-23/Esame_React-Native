// screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles.js';

function PersonaTable(jsonData,headers){
  // Dati da visualizzare
  const data = jsonData.tables.Persona;

  // Funzione per renderizzare le righe della tabella
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.cognome}</Text>
      <Text style={styles.cell}>{item.posizione}</Text>
      <Text style={styles.cell}>{item.stipendio}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.containerB}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tabella Persona</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

function TableView({table}) {

  return (
    <View style={styles.containerB}>
      <Text style={styles.title}>Tabella {table}</Text>
      <Text style={styles.description}>
        <PersonaTable jsonData={data}/>
      </Text>
    </View>
  );
}

export default TableView;