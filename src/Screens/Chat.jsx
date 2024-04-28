import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatHeader from '../Componets/ChatHeader'
import ActiveFrindes from '../Componets/ActiveFrindes'
import ChatSearch from '../Componets/ChatSearch'
import { StoriesData } from '../data/StoriesData'
import { color } from '../Color'
import ChatList from '../Componets/ChatList'

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ChatHeader navigation={navigation}/>
      <ChatSearch  navigation={navigation} data={StoriesData}/>
      <ActiveFrindes navigation={navigation} data={StoriesData}/>
      <ChatList navigation={navigation} data={StoriesData}/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    padding:5,
    paddingTop:10,
    backgroundColor:color.white
  }
})

export default Chat