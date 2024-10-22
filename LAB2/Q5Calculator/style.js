import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  display: {
    height: 80,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 48,
    textAlign: 'right',
    textAlignVertical: 'center', // Android-specific for vertical centering
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: 90,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
  },
  button0: {
    width: 180,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#f8f8f8',
  },
  operatorButtonText: {
    color: '#ff9500',
  },
  equalButton: {
    backgroundColor: '#ff9500',
     width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
  },
  equalButtonText: {
    fontSize: 24,
    color: '#000',
  },
});
