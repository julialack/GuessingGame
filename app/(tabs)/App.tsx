import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

export default function App() {
  const [number, setNumber] = useState('')
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  )
  const [feedback, setFeedback] = useState('')

  const handleGuess = () => {
    const guessedNumber = parseInt(number)
    if (isNaN(guessedNumber)) {
      Alert.alert('Invalid input', 'Please enter a valid number')
      return
    }
    if (guessedNumber > targetNumber) {
      setFeedback('Too high!')
    } else if (guessedNumber < targetNumber) {
      setFeedback('Too low!')
    } else {
      setFeedback('Correct!')
      setTargetNumber(Math.floor(Math.random() * 100) + 1) // Reset the game
    }
    setNumber('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessing Game</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={number}
        onChangeText={setNumber}
        placeholder='Enter your guess'
      />
      <Button title='Submit Guess' onPress={handleGuess} />
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
  },
})