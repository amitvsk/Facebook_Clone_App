import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { color } from '../Color'
import CreateStories from './CreateStories'
import FriendsStories from './FriendsStories'

const Stories = () => {
  return (
    <ScrollView horizontal style={style.container}  contentContainerStyle={style.contentContainer} showsHorizontalScrollIndicator={false}>
     <CreateStories/>
     <FriendsStories/>
    </ScrollView  >
  )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:color.white,
        marginTop:8,
        padding:15
    },
    contentContainer:{
        paddingRight:30,

    }
})
export default Stories