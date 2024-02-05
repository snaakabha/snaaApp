import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ClothesItem from "./src/cocomponents/ClothesItem"
import React from 'react'
import {clothes} from './src/res/data';


// const styles = StyleSheet.create({
//   app:{
//       flex: 1,
//       backgroundColor: "rgb(255,255,255)",
//   },
//   container: {
//     // borderWidth: 1,
//     // borderColor: "black",
//     // alignSelf: 'center', padding: 12,
//     // // marginTop: 300,
//   },
//   RedBox: {
//     backgroundColor: "red",
//     width: 30
//   },
//   flexBox: {
//     flexDirection: "row",
//     gap: 15
    
  
//   },
//   footer: {
//     alignSelf: 'center'
//   }, 
//   Colortext:{
//     color: "black"

//   }
// })
const App = () => {
  return (
    <View >
{/* 
    <View >
      <View >
        <View >
          <Text style={styles.Colortext} >name: Snaa Medlij</Text>
          <Text style={styles.Colortext} >Bd: 24-01-2001</Text>
        </View>
        <View style={styles.RedBox}></View>
      </View>
      <View style={styles.footer}> 
        <Text style={styles.Colortext}  >My First UI</Text>
      </View>
    </View> */}
    <ScrollView>

    {
      clothes.map((item,index)=>{
        return(
          <ClothesItem key={index} size={item.size} Type={item.Type} color={item.color} ShopName={item.ShopName}/>
        )
      })
    }
    </ScrollView>

    </View>
  )
}

export default App
