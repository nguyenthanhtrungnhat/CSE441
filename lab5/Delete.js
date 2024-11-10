import React from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import { SimpleLineIcons } from '@expo/vector-icons';

const API_URL = 'https://kami-backend-5rs0.onrender.com/services';

export default function Delete({ route, navigation }) {
  const { item } = route.params; // Get the item data passed from the previous screen

  const deleteData = async () => {
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

  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={deleteData}>
            <Text style={styles.menuOptionText}>Delete Service</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptionText: {
    padding: 10,
    fontSize: 16,
    color: 'red',  // Color to highlight the delete action
  },
});
