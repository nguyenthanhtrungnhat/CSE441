import React, { useState } from "react";
import { FlatList, Image, View, StyleSheet, SafeAreaView } from "react-native";
import { Card, Text, TextInput, Title, Button } from "react-native-paper"; // Ensure these are installed

export default function Search() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    let filePath = 'https://dummyjson.com/products/';
    const searchProduct = () => {
        if (value !== "") {
            filePath = 'https://dummyjson.com/products/search?q=' + value;
            fetch(filePath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((d) => setData(d.products))
                .catch((error) => console.error("Error fetching data:", error));
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Card>
                <Card.Content>
                    <Title>Search Product</Title>
                    <TextInput
                        placeholder="Type product name"
                        value={value}
                        onChangeText={setValue}
                        style={styles.input}
                    />
                </Card.Content>

                <Card.Actions>
                    <Button onPress={searchProduct}>Search</Button>
                </Card.Actions>

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
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    picture: {
        width: 100,
        height: 100,
        marginRight: 10,
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
    input: {
        marginVertical: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
    containerButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});
