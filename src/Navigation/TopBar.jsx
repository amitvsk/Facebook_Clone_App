import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Friends from '../Screens/Friends';
import WatchScreen from '../Screens/WatchScreen';
import Notification from '../Screens/Notification';
import ProfileScreen from '../Screens/ProfileScreen';
import MarketPlace from '../Screens/MarketPlace';
import VectorIcon from '../VectorIcon';
import { color } from '../Color';
import { TabData } from '../data/TabData';


const Tab = createMaterialTopTabNavigator();
const TopBar = () => {
  return (
    <Tab.Navigator screenOptions={()=>({
        tabBarShowLabel:false,
        tabBarActiveTintColor:color.primaryColor,
        tabBarInactiveTintColor:color.grey
    })}>
        {TabData?.map((item)=>{
            return (
                   <Tab.Screen name={item?.name} key={item?.id} component={item?.route} options={{tabBarIcon:({color,focused})=>(<VectorIcon name={focused ?  item?.activeIconName:item?.unActiveIconName} type={focused? item?.activeIconType:item?.unActiveIconType} size={focused? item?.size: item?.unFocusSize} color={color}/>)}}/>
            )
        })}
 
    {/* <Tab.Screen name="Friends" component={Friends} />
    <Tab.Screen name="WatchScreen" component={WatchScreen} />
    <Tab.Screen name="MarketPlace" component={MarketPlace} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    */}
  
   
  </Tab.Navigator>
  )
}

export default TopBar