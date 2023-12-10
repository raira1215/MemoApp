import {
  Text, StyleSheet, TouchableOpacity,
  type ViewStyle
} from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
  const { children, style, onPress } = props
  return (
   <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FAA500',
    position: 'absolute',
    right: 46,
    bottom: 46,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 53,
    lineHeight: 56
  }
})

export default CircleButton
