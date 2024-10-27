import React, { useState, useEffect } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    Alert.alert('Add successfull');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add Product</Text>
      <ScrollView>
        <TextInput
          placeholder="Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Price"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Discount Percentage"
          style={styles.input}
          value={discountPercentage}
          onChangeText={setDiscountPercentage}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Rating"
          style={styles.input}
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Stock"
          style={styles.input}
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Brand"
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
        />
        <TextInput
          placeholder="Category"
          style={styles.input}
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          placeholder="Images"
          style={styles.input}
          value={images}
          onChangeText={setImages}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
  },
});
