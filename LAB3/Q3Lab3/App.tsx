import { Card } from 'react-native-paper';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Search from './Product_Search';

const App = () => {
  return (
    <SafeAreaView>

      <ScrollView>
      
        <Search />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;


