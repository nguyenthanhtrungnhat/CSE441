import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    try {
     
      const response = await axios.get(
        'https://kami-backend-5rs0.onrender.com/services'
      );
      console.log('Fetched data:', response.data);
      setData(response.data);
    } catch (error) {
      setError('Failed to load data. Please try again later.');
      console.error('Error making GET request:', error);
      if (error.response) {
        console.error('Error response:', error.response);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <View style={styles.firstRow}>
          <Text style={styles.title}>Danh sách dịch vụ</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Service')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      
        <FlatList
          data={data}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.navigate('ServiceDetail', { item })}>
                <Text style={styles.rowText}>{item.name}</Text>
                <Text>{item.price}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#ecf0f1', padding: 8 },
  logo: { width: '100%' },
  button: {
    backgroundColor: 'pink',
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  title: { fontWeight: 'bold', marginLeft: 10, marginTop: 10, fontSize: 18 },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
  },
  row: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowText: { fontWeight: 'bold', fontSize: 16 },
  loading: { marginTop: 20 },
  errorText: { color: 'red', textAlign: 'center', margin: 20, fontSize: 16 },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});
