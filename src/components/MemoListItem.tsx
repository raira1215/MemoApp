import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './icon'
import { Link } from 'expo-router'

const memoListItem = (): JSX.Element => {
  return (
    <Link href={'/memo/detail'} asChild>
    <TouchableOpacity style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2023年12月5日 10:00</Text>
      </View>
      <TouchableOpacity>
        <Icon name='delete' size={40} color='#BEBEBE' />
      </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 20,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 14,
    lineHeight: 16,
    color: '#9A9A9A'
  },
  delete: {
    fontSize: 28,
    color: '#BEBEBE'
  }
})

export default memoListItem
