import {
  View, Text, TextInput, Alert,
  StyleSheet, TouchableOpacity
} from 'react-native'

import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'
import { useState } from 'react'
const handlePress = (email: string, password: string): void => {
  // 会員登録
  console.log(email, password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(message)
    })
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
        />
        <TextInput style={styles.input} value={Password}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize='none'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
        />
        <Button label='Submit' onPress={() => { handlePress(email, Password) }}/>
        <View style={styles.footer} >
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/log_in' asChild replace>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log In.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E2'
  },
  inner: {
    paddingHorizontal: 28,
    paddingVertical: 24
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: 'black',
    marginBottom: 20
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 12,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 12,
    lineHeight: 24,
    color: '#00C2FF'
  }

})

export default Signup
