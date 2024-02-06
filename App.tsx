import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ClothesItem from "./src/cocomponents/ClothesItem"
import React from 'react'
import {clothes} from './src/res/data';



const App = () => {
  return (
    <View >
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
};

   

export default App
