//import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Login from './Login';
import Home from './Home';

import Service from './Service';
import ServiceDetail from './ServiceDetail';
import Edit from './Edit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MenuProvider } from 'react-native-popup-menu';
import { SimpleLineIcons } from '@expo/vector-icons';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
// Delete Service function
const API_URL = 'https://kami-backend-5rs0.onrender.com/services';
const deleteData = async (item, navigation) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      Alert.alert('Error', 'No authentication token found.');
      return;
    }

    // Ask for confirmation before deleting
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete the service: ${item.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const response = await axios.delete(`${API_URL}/${item._id}`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              console.log('Delete Response:', response.data);
              Alert.alert('Success', 'Service deleted successfully');
              navigation.goBack(); // Go back after delete
            } catch (error) {
              console.error('Delete error:', error);
              Alert.alert('Error', 'Failed to delete service');
            }
          },
        },
      ]
    );
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'An unexpected error occurred');
  }
};
// Home Stack
// Home Stack
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <View>
              <Ionicons
                name="person-circle"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          title: 'HUYỀN TRINH',
        }}
      />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="Edit" component={Edit} />

      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <Menu>
              <MenuTrigger>
                <SimpleLineIcons
                  name="options-vertical"
                  size={24}
                  color="black"
                />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption
                  onSelect={() => deleteData(route.params.item, navigation)}>
                  <Text style={styles.menuOptionText}>Delete Service</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          ),
          title: 'ServiceDetail',
        })}
      />
    </Stack.Navigator>
  );
}

// Transaction Stack (Placeholder component used here)
function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transaction" component={Home} />
    </Stack.Navigator>
  );
}

// Customer Stack (Placeholder component used here)
function CustomerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Customer" component={Home} />
    </Stack.Navigator>
  );
}

// Setting Stack (Placeholder component used here)
function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Home} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function MyTab() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionStack}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={CustomerStack}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTab"
              component={MyTab}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
