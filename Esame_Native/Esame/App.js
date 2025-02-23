import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from './screens/HomeScreen';
import  TableView  from './screens/TableView';
import ProfileScreen from'./screens/ProfileScreen.js';
import  SettingsScreen  from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/styles.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SERVER_URL="";

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProductDetails" 
          onPress={()=>fetchData("/Persona")}
          component={TableView(data)} 
          options={{ title: 'Dettagli Prodotto' }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
