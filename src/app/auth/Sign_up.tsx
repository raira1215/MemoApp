import {
  View, Text, TextInput,
  StyleSheet, TouchableOpacity, Alert
} from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link } from 'expo-router'
const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value='Email address' />
        <TextInput style={styles.input} value='Password' />
        <Button label='Submit' onPress={() => { Alert.alert('送信しました！！') }}/>
        <View style={styles.footer} >
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/log_in' asChild >
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
    color: '#D9D9D9',
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
