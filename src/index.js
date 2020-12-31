import React from 'react'
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation'


export default function Main() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(253, 253, 253)"/>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? null : "height"} enabled={true}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </>
  )
}
