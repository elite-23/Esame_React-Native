import {StyleSheet} from 'react-native';
// styles.js
const styles = StyleSheet.create({


  containerB: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
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






    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    productList: {
      padding: 10,
    },
    productCard: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    productName: {
      fontSize: 18,
      fontWeight: '500',
    },
    productPrice: {
      fontSize: 16,
      color: '#666',
      marginTop: 5,
    },
    userInfo: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
    },
    userName: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 5,
    },
    userEmail: {
      fontSize: 16,
      color: '#666',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
    },
});
export default styles;