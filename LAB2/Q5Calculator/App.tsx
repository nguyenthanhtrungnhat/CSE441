import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
const App = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  // Function to handle number inputs 
  const handleNumberInput = (num: any) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    }
    else {
      setDisplayValue(displayValue + num);
    }
  };
  // Function to handle operator inputs 
  const handleOperatorInput = (operator: any) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  // Function to handle equal button press 
  const handleEqual = () => {
    const num1 = parseFloat(firstValue); const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };


  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={styles.container}>

      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttonGrid}>
        {[7, 8, 9, '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, styles.operatorButton]}
            onPress={() =>
              isNaN(item as any) ? handleOperatorInput(item) : handleNumberInput(item)
            }
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>{item}</Text>
          </TouchableOpacity>
        ))}
        {[4, 5, 6, '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, styles.operatorButton]}
            onPress={() =>
              isNaN(item as any) ? handleOperatorInput(item) : handleNumberInput(item)
            }
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>{item}</Text>
          </TouchableOpacity>
        ))}
        {[1, 2, 3, '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, styles.operatorButton]}
            onPress={() =>
              isNaN(item as any) ? handleOperatorInput(item) : handleNumberInput(item)
            }
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button0} onPress={() => handleNumberInput(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default App;