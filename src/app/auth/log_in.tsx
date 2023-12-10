import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet
} from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'

const handlePress = (): void => {
  // ログイン
  router.push('/memo/list')
}

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='Email address' />
        <TextInput style={styles.input} value='Password' />
        <Button label='Submit' onPress={handlePress} />
      <View style={styles.footer} >
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href='/auth/Sign_up' asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up here!</Text>
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
  button: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    alignSelf: 'flex-start',
    backgroundColor: '#FAA500',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonLabel: {
    color: '#ffffff',
    lineHeight: 24,
    fontSize: 16
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

export default LogIn
