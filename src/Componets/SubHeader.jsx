import {View, TextInput, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import profile from '../assets/profile.jpg';
// import { TextInput } from 'react-native-gesture-handler';
import cameraRoll from '../assets/cameraroll.png';
import {color} from '../Color';
const SubHeader = () => {
  return (
    <View style={style.container}>
      <Image source={profile} style={style.Profile} />
      <TextInput placeholder="Write something here..." style={style.inputBox} />
      <Image source={cameraRoll} style={style.cameraRoll} />
    </View>
  );
};
const style = StyleSheet.create({
  Profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  cameraRoll: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    alignItems: 'center',
    backgroundColor: color.white,
    height: 60,
  },
  inputBox: {
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 30,
    width: '70%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  inputStyle: {
    fontSize: 16,
    color: color.grey,
  },
});

export default SubHeader;
