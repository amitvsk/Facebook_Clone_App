import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {color} from '../Color';
import VectorIcon from '../VectorIcon';

const ActiveFrindes = ({navigation,data}) => {
  return (
    <ScrollView
      horizontal
      style={style.container}
      showsHorizontalScrollIndicator={false}>
        {data?.map((ele,i)=>{
            return (
                <TouchableOpacity>
                <View style={style.SubContainer}>
                <Image source={ele.profile} style={style.Users} />
                {ele.isActive && <View style={style.ActiveDot}>
                  <VectorIcon
                    name="dot-single"
                    type="Entypo"
                    size={35}
                    color={color.green}
                    style={style.ActiveIcon}
                  />
                </View>}             
                <View style={style.textContainer}>
                  <Text style={style.Text}>{ele?.name?.slice(0,15)}</Text>
                </View>
              </View>
                </TouchableOpacity>
            )
        })}
      
     
     
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    paddingLeft: 5,
   flexDirection:"row"
  },
  SubContainer:{
    marginRight:15
  },
  Users: {
    width: 60,
    height: 60,
    backgroundColor: color.white,
    borderRadius: 50,
  },
  ActiveDot: {
    backgroundColor: color.white,

    position: 'absolute',
    borderRadius: 50,
    width: 22,
    height: 22,
    padding: 0,
    top: 35,
    left: 45,
  },
  ActiveIcon: {
    textAlign: 'center',
    // position:"absolute",
    right: 10,
    bottom: 8,
    margin: 0,
    padding: -10,
  },
  textContainer: {
    width: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 11,
    textAlign: 'center',
    color: color.textColor,
  },
});
export default ActiveFrindes;
