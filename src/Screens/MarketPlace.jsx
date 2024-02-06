import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../Color'

const MarketPlace = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Market Place</Text>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:color.primaryColor,
    fontSize:22,
    fontWeight:"500"
  }
})
export default MarketPlace