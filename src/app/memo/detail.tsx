import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} >買い物リスト</Text>
        <Text style={styles.memoDate}>2023年12月5日 10:00</Text>
      </View>
      <View>
        <ScrollView style={styles.memoBody}>
          <Text style={styles.memoBodyText} >買い物リスト
          今日はカレーを作ろうと思っています！！
          買うものは、牛肉と玉ねぎと人参とカレー粉とじゃがいもです。
          </Text>
        </ScrollView>
      </View>

      <CircleButton style={{ top: 145, bottom: 'auto' }}>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    height: 83,
    backgroundColor: '#00C2FF',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 21
  },
  memoTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  memoDate: {
    fontSize: 14,
    color: '#ffffff'
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 20
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black'
  }
})
export default Detail
