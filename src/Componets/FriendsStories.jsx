import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import {color} from '../Color';

import { StoriesData } from '../data/StoriesData';
const FriendsStories = () => {
  return (
    <>
    {StoriesData?.map((item)=>{
        return (<View key={item?.id}  style={style.container}>
    
      <Image source={item?.story} style={style.story} />
      <View style={style.profileContainer}>
        <Image source={item?.profile} style={style.profile} />
      </View>
      <View style={style.friendName}>
          <Text style={style.name}>{item?.name}</Text>
      </View>
    
    </View>)
    })}
       
    </>
 
  );
};

const style = StyleSheet.create({
  story: {
    height: 175,
    width: 105,
    borderRadius: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: color.lightgrey,
    borderRadius: 10,
    marginLeft: 8,
    position:"relative"
  },
  profile:{
    height:32,
    width:32,
    borderRadius:50
  },
  profileContainer:{
    position:'absolute',
    top:5,
    left:5,
    backgroundColor:color.primaryColor,
    padding:2,
    borderRadius:50
  },
  friendName:{
    position:'absolute',
   left:8,
   bottom:8
  },
  name:{
    color:color.white,

  }
});

export default FriendsStories;
