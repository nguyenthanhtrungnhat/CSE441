import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarLabel: 'Service',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
