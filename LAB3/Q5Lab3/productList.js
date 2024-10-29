import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, Button,StyleSheet} from 'react-native';

import { Card } from 'react-native-paper';

export default function ProductList() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';
  useEffect(() => {
    //Alert.alert(filePath);
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d.products);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[]);
  return (
   
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
      
          <View style={styles.container}>
            <Image source={{ uri: item.thumbnail }} style={styles.picture} />
            <View>
              <Text style={styles.title}>Title: {item.title}</Text>
              <Text style={styles.text}>Description: {item.description}</Text>
              <Text style={styles.text}>Price: {item.price}</Text>
              <Text style={styles.textGreen}>Discount: {item.discountPercentage}
              </Text>
              <Text style={styles.text}>Rating: {item.rating}</Text>
              <Text style={styles.text}>Stock: {item.stock}</Text>
              <Text style={styles.text}>Tags: {item.tags}</Text>
              <Text style={styles.text}>Category: {item.category}</Text>
              <View style={styles.containerButton}>
                <Button title='Detail'></Button>
                <Button title='Add'></Button>
                <Button title='Delete'></Button>
              </View>
            </View>
          </View>
       
      )}
    />
  );
}
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


