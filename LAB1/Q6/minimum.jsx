import React, { useState } from 'react';
import { Alert, View, TextInput, Button, Text } from 'react-native';

export function FindMinimum() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [min, setMin] = useState(null);

    const calculateMin = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);
        const min = Math.min(n1, n2, n3);
        setMin(min);
        Alert.alert(`Minimum: ${min}`);
    };

    return (
        <View>
            <TextInput
                value={num1}
                onChangeText={setNum1}
                keyboardType="numeric"
                placeholder="Enter first number"
            />
            <TextInput
                value={num2}
                onChangeText={setNum2}
                keyboardType="numeric"
                placeholder="Enter second number"
            />
            <TextInput
                value={num3}
                onChangeText={setNum3}
                keyboardType="numeric"
                placeholder="Enter third number"
            />
            <Button title="Find Minimum" onPress={calculateMin} />
            {min !== null && <Text>Minimum: {min}</Text>}
        </View>
    );
}
