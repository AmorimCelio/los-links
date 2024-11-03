import {Text , View, StyleSheet} from "react-native"
import {styles} from "./styles"


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hello</Text>
      <Text style={styles.title} >React Native!</Text>
    </View>
  )
}

