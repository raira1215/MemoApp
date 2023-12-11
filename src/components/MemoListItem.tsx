import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './icon'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'

interface Props {
  memo: Memo
}

const memoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = updatedAt.toDate().toLocaleDateString('ja-JP')
  return (
    <Link href={'/memo/detail'} asChild>
    <TouchableOpacity style={styles.memoListItem}>
      <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
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
