import React, { useState } from 'react';
import { Alert, View, TextInput, Button, Text } from 'react-native';

function HailstoneSequence() {
    const [number, setNumber] = useState('');
    const [sequence, setSequence] = useState([]);

    const calculateHailstoneSequence = () => {
        let n = parseInt(number, 10);
        if (isNaN(n) || n <= 0) {
            Alert.alert("Please enter a positive number greater than 0.");
            return;
        }
        const tempSequence = [n];
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = n * 3 + 1;
            }
            tempSequence.push(n);
        }
        setSequence(tempSequence);
        Alert.alert(`Hailstone Sequence: ${tempSequence.join(', ')}`);
    };

    return (
        <View>
            <TextInput
                value={number}
                onChangeText={setNumber}
                keyboardType="numeric"
                placeholder="Enter a positive number"
            />
            <Button title="Calculate Sequence" onPress={calculateHailstoneSequence} />
            {sequence.length > 0 && (
                <Text>Hailstone Sequence: {sequence.join(', ')}</Text>
            )}
        </View>
    );
}

export default HailstoneSequence;
