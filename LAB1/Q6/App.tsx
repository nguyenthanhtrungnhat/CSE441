/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Employee from './employee';
import { SumFirstLastDigit } from './sum2degit';
import { FindMinimum } from './minimum';
import HailstoneSequence from './Hailstone';
export default App = () => {
  return (
    <ScrollView>
      <Employee name="John Doe" age="30" occupation="Software Engineer" />
      <SumFirstLastDigit />
      <FindMinimum />
      <HailstoneSequence />
    </ScrollView>
  )
}