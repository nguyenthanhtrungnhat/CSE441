import React, { useState } from 'react';
import { Alert, View, TextInput, Button } from 'react-native';

export function SumFirstLastDigit() {
    const [number, setNumber] = useState(''); // Correct state initialization

    const result = () => {
        if (number.length === 0) {
            Alert.alert("Please enter a number.");
            return;
        }
        const num1 = parseInt(number[0], 10);
        const num2 = parseInt(number[number.length - 1], 10);
        Alert.alert(`Sum of first and last digit: ${num1 + num2}`);
    };

    return (
        <View>
            <TextInput
                value={number}
                onChangeText={(text) => setNumber(text)}
                keyboardType="numeric"
                placeholder="Enter a number"
            />
            <Button title="Calculate" onPress={result} />
        </View>
    );
}
