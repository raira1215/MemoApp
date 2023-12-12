import {
  View, TextInput, StyleSheet, Alert
} from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('更新に失敗しました')
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log('edit', id)
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
          autoFocus/>
      </View>
      <CircleButton onPress={() => { handlePress(id, bodyText) }}>
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
    flex: 1
  },
  input: {
    paddingHorizontal: 32,
    paddingVertical: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    flex: 1
  }
})
export default Edit
