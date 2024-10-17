import { View, Button, Text, TextInput, Alert } from "react-native";


export default function Employee(props) {
    const success = () => {
        Alert.alert('Success', 'Employee information updated successfully!');
    };
   
    return (
        <View>
            <Text>Full name: </Text>
            <TextInput>{props.name}</TextInput>
            <Text>Age: </Text>
            <TextInput>{props.age}</TextInput>
            <Text>Ocupation: </Text>
            <TextInput>{props.occupation}</TextInput>
            <Button title="Update" onPress={success}></Button>
        </View>

    );
}