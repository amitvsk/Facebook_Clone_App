import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import profile from '../assets/profile.jpg';
import VectorIcon from '../VectorIcon';
import {color} from '../Color';
const CreateStories = () => {
  return (
    <View>
      <View style={style.creteStory}>
        <VectorIcon
          name="book-open"
          type="FontAwesome5"
          size={25}
          style={style.Incons}
          color={color.white}
        />
        <Text style={style.TextStyle}>Create story</Text>
      </View>
      <View style={style.createReal}>
        <VectorIcon
          name="movie-open-play"
          type="MaterialCommunityIcons"
          size={25}
          color={color.white}
          style={style.Incons}
        />
        <Text style={style.TextStyle}>Create reel</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({

  creteStory: {
    backgroundColor: color.primaryColor,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  TextStyle: {
    color: color.white,
    marginVertical: 5,
  },
  Incons: {
    color: color.white,
    marginVertical: 5,
  },
  createReal: {
    backgroundColor: '#E4405F',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default CreateStories;
