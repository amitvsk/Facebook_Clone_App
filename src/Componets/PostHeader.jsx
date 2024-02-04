import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {color} from '../Color';
import VectorIcon from '../VectorIcon';
const PostHeader = ({data}) => {
  return (
    <View style={style.container}>
      <View style={style.SubHead}>
        <View style={style.row}>
          <Image source={data?.profile} style={style.profile} />
          <View style={style.userSection}>
            <Text style={style.userName}>{data?.name}</Text>
            <View style={style.row}>
              <Text style={style.userDay}>{data?.date}</Text>
              <Text style={style.dot}>•</Text>
              <VectorIcon name="people" type="MaterialIcons" size={13} style={style.vector} color={color.headerIconGrey}/>
            </View>
          </View>
        </View>

        <View style={style.row}>
          <VectorIcon name="dots-three-horizontal" style={style.headIcons} color={color.headerIconGrey} type="Entypo" size={18} />
          <VectorIcon name="cross" type="Entypo" size={22} color={color.headerIconGrey}/>
        </View>
      </View>

      <Text style={style.caption}>{data?.caption}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  profile: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 50,
  },
  userName: {
    color:color.textColor,
    fontSize:16,
  },
  SubHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  userSection:{
    marginLeft:10,
    marginBottom:2
  },
  userDay:{
    fontSize:14,
    color:color.textGrey
  },
  dot:{
    paddingHorizontal:8,
    fontSize:14,
    color:color.textGrey

  },
  vector:{
    marginTop:4
  },
  headIcons:{
    marginRight:20
  },
  caption:{
    color:color.grey,
    fontSize:15,
    marginTop:10
  }
});
export default PostHeader;
