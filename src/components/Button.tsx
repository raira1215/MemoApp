import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  label: string
  onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Button
