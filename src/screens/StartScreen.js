import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
<<<<<<< HEAD
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
=======
      <Paragraph>
      Leading you from here to beyond.
>>>>>>> 09c2c231454fc68e6ae49b30f5ed2ff9ebb77a76
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
