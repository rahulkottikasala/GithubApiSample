import { View, Text, StatusBar, TouchableHighlight, TextInput } from 'react-native'
import React from 'react'
import Auth from './src/screen/Auth'
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './src/navigation/StackNav'


const App = () => {

    const backgroundColor = "lightgrey"
  return (
    <NavigationContainer>
   <StackNav/>
    </NavigationContainer>
  )
}

export default App