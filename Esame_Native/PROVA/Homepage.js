import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import mockData from './assets/mock_data.json'

export function HomePage({ navigation }) {
  const tables = [
    { name: 'Persona', data: mockData.Persona },
    { name: 'Progetto', data: mockData.Progetto },
    { name: 'WP', data: mockData.WP },
    { name: 'AttivitaProgetto', data: mockData.AttivitaProgetto },
    { name: 'Assenza', data: mockData.Assenza }
  ];

  return (
    <View style={styles.containerH}>
      <View >
        <Text style={styles.title}>Seleziona una tabella</Text>
      </View>
      {tables.map((table, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() =>
            navigation.navigate('Table', {
              tableName: table.name,
              tableData: table.data
            })
          }
        >
          <Text style={styles.buttonText}>{table.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export function TablePage({ route }) {
  const { tableData, tableName } = route.params;

  // Ottieni i nomi dei campi della tabella (keys degli oggetti)
  const headers = Object.keys(tableData[0]);

  // Funzione per rendere una riga della tabella
  const renderRow = (item) => {
    return (
      <View style={styles.row}>
        {headers.map((header) => (
          <Text key={header} style={styles.cell}>{item[header]}</Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        {headers.map((header) => (
          <Text key={header} style={styles.headerCell}>{header}</Text>
        ))}
      </View>

      <FlatList
        data={tableData}
        renderItem={({ item }) => renderRow(item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 3,
    paddingBottom: 20,
    alignItems: 'center',  
    justifyContent: 'center', 
  },
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 20,
    },
    containerH: {
        margin:'auto',
        maxWidth:'40%',
        minWidth:'fit-content',
        flex: 2,
        padding: 20,
        display:'flex',
        justifyContent: 'center',
      },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      padding: 15,
      backgroundColor: 'rgb(98, 0, 238)',
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    header: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      padding: 10,
      backgroundColor: '#6200ee',
      alignItems: 'center',
    },
    headerCell: {
      backgroundColor: '#6200ee',
      fontSize: 24,
      color: 'white',
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
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

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerB: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    width: 120,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
  },
  cell: {
    width: 120,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
});*/
