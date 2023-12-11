import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { db, auth } from '../../config'
import { router } from 'expo-router'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log('succese', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) } }
        />
      </View>
      <CircleButton onPress={() => { handlePress(bodyText) }}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 32,
    paddingVertical: 20,
    flex: 1
  },
  input: {
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    flex: 1
  }
})
export default Create
