import { View, Text } from 'react-native'
import React from 'react'
import Headers from '../Componets/Header'
import SubHeader from '../Componets/SubHeader'
import Stories from '../Componets/Stories'
import Post from '../Componets/Post'
import { ScrollView } from 'react-native-gesture-handler'
const HomeScreen = () => {
  return (
    <ScrollView >
       <SubHeader/>
     <Stories/>
     <Post/>
    </ScrollView>
  )
}

export default HomeScreen