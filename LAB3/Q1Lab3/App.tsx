/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Product from './product'

const App = () => {
  return (
    <SafeAreaView>
      <Text>PRODUCT LIST</Text>
      <Product/>
    </SafeAreaView>
  );
};
export default App;




