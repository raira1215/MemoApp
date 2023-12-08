import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerLogout}>ログアウト</Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年12月5日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年12月5日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年12月5日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#00C2FF',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerLogout: {
    position: 'absolute',
    right: 16,
    bottom: 10,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 10,
    fontSize: 32,
    lineHeight: 32,
    color: '#ffffff'
  }
})

export default Index
