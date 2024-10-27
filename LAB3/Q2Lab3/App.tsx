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
import Add from './add';

const App = () => {
  return (
    <SafeAreaView>
      
      <ScrollView>
       <Add/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;


