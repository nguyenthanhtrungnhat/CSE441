import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
  container: {
    width:100,
    paddingTop: 50,
    flexDirection: 'row',
    
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  picture: {
    width: 200,
    height: 200,

  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  textGreen: {
    color: 'green',
    fontSize: 18,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default styles;