import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
  app:{
      flex: 1,
      backgroundColor: "rgb(255,255,255)",
  },
  container: {
    borderWidth: 1,
    borderColor: "black",
    alignSelf: 'center', padding: 12,
    marginTop: 300,
  },
  RedBox: {
    backgroundColor: "red",
    width: 30
  },
  flexBox: {
    flexDirection: "row",
    gap: 15
    
  
  },
  footer: {
    alignSelf: 'center'
  }, 

 
})
const App = () => {
  return (
    <View style={styles.app}>

    <View style={styles.container}>
      <View style={styles.flexBox}>
        <View >
          <Text style={[{ color: "black" }]}>name: Snaa Medlij</Text>
          <Text style={[{ color: "black" }]} >Bd: 24-01-2001</Text>
        </View>
        <View style={styles.RedBox}></View>
      </View>
      <View style={styles.footer}> 
        <Text style={[{ color: "black" }]} >My First UI</Text>
      </View>
    </View>

    </View>
  )
}

export default App
