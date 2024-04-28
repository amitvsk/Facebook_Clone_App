import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {color} from '../Color';
import VectorIcon from '../VectorIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatFriend = ({route,navigation}) => {
  const {item} = route.params;
//   console.log(item);
  return (
    <View>
      <View style={styles.headers}>
        <View style={styles.headProfile}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <VectorIcon
            name="arrowleft"
            type="AntDesign"
            color={color.primaryColor}
            size={30}
            // style={{fontWeight:"900"}}
          />
            </TouchableOpacity>
         
          <Image source={item?.profile} style={styles.profile} />
          <Text style={styles.text1}>{item?.name}</Text>
        </View>
        <View style={styles.VideoAudio}>
        <VectorIcon
            name="video-camera"
            type="FontAwesome"
            color={color.primaryColor}
            size={25}
          />
          <VectorIcon
            name="call"
            type="Ionicons"
            color={color.primaryColor}
            size={25}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  headers: {
    padding: 5,
    backgroundColor: color.white,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headProfile: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text1: {
    fontWeight: '600',
  },
  VideoAudio:{
    flexDirection:"row",
    // justifyContent:"center",
    alignItems:"center",
    gap:10
  }
});

export default ChatFriend;
