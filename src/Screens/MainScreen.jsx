import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Componets/Header'
import TopBar from '../Navigation/TopBar'

const MainScreen = ({navigation}) => {
  return (
    <>
     <Header navigation={navigation}/>
     <TopBar/>
    </>
  )
}

export default MainScreen