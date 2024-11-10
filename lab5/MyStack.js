import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Service from './Service';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Service" component={Service} />
    </Stack.Navigator>
  );
}
export default function Stackpart() {
  return (
    <SafeAreaView >
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}