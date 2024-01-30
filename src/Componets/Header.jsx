import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import fblogo from '../assets/fblogo.png'
import VectorIcon from '../VectorIcon'
import { color } from '../Color'
const Header = () => {
  return (
    <View style={style.container}>
        <Image source={fblogo} style={style.fblogo} /> 
        <View style={style.headIcon}>
        <VectorIcon name="add" type="MaterialIcons" size={22} style={style.searcbg}/>
        <VectorIcon name="search" type="FontAwesome5" size={22} style={style.searcbg}/>
             <VectorIcon name="messenger" type="Fontisto" size={22} style={style.searcbg}/>
        </View>
     
    </View>
  )
}

const style=StyleSheet.create({
    fblogo:{
        height:25,
        width:130
    },
    headIcon:{
    flexDirection:"row"
    },
    container:{
        padding:16,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    searcbg:{
        backgroundColor:color.lightgrey,
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }
})

export default Header