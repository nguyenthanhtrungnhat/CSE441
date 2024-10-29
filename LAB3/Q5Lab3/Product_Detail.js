import React, { useState, useEffect } from "react";
import { FlatList, Image, View, StyleSheet, SafeAreaView, Button } from "react-native";
import { Card, Text, TextInput, Title } from "react-native-paper"; // Ensure these are installed
export default function Detail() {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';
    useEffect(() => {
        //Alert.alert(filePath);
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();

            })
            .then((d) => {
                setData([d]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, []);
    return (
        <SafeAreaView>
            <Card>
                <Card.Content>
                    <Title>Product Detail</Title>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.container}>
                                <Image source={{ uri: item.thumbnail }} style={styles.picture} />
                                <View style={styles.details}>
                                    <Text style={styles.title}>Title: {item.title}</Text>
                                    <Text style={styles.text}>Description: {item.description}</Text>
                                    <Text style={styles.text}>Price: ${item.price}</Text>
                                    <Text style={styles.textGreen}>
                                        Discount: {item.discountPercentage}%
                                    </Text>
                                    <Text style={styles.text}>Rating: {item.rating}</Text>
                                    <Text style={styles.text}>Stock: {item.stock}</Text>
                                    <Text style={styles.text}>Tags: {item.tags.join(", ")}</Text>
                                    <Text style={styles.text}>Category: {item.category}</Text>
                                </View>
                            </View>
                        )}
                    />
                </Card.Content>
                <Card.Actions style={styles.button}>
                    <Button title='Delete'></Button>
                    <Button title='Cancel'></Button>
                </Card.Actions>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        marginVertical: 10,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    picture: {
        width: 100,
        height: 100,

        borderRadius: 8,
    },
    details: {
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 14,
    },
    textGreen: {
        fontSize: 14,
        color: "green",
    },
    button: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'flex-end', // Align all buttons to the left
        alignItems: 'center', // Align buttons vertically in the center
        padding: 10, // Add some padding
    },
});
