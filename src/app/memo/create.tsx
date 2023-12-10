import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.back()
}

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} />
      </View>
      <CircleButton onPress={handlePress}>
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
