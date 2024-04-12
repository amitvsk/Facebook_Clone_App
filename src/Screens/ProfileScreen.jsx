import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { color } from '../Color'
import { useUser } from './UserProvider'

const ProfileScreen = ({navigation}) => {
  const {logout}=useUser()
  const logout2=()=>{
    Alert.alert("Successfully logout");
    logout()
    return navigation.navigate("Login")
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Profile Screen</Text>
      <TouchableOpacity style={style.btn} onPress={logout2}>
         <Text style={style.logout}>Logout</Text>
      </TouchableOpacity>
     
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    alignItems:"center"
  },
  title:{
    color:color.primaryColor,
    fontSize:22,
    fontWeight:"500"
  },
  logout:{
    color:color.white,
    fontSize:15,
    fontWeight:"500"
  },
  btn:{
    // borderWidth:1,
    backgroundColor:color.primaryColor,
    width:"90%",
    padding:10,
    bottom:40,
    alignItems:"center",
    borderRadius:12
  }
})

export default ProfileScreen