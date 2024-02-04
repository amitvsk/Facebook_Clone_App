import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Like from '../assets/like.jpeg';
import heart from '../assets/heart.jpeg';
import shock from '../assets/shock.jpeg';
import {color} from '../Color';
import VectorIcon from '../VectorIcon';

const PostFooter = ({data}) => {
  return (
    <View style={style.container}>
      <View style={style.footerReaction}>
        <View style={style.row}>
          <Image source={Like} style={style.reactionIcon} />
          <Image source={shock} style={style.reactionIcon} />
          <Image source={heart} style={style.reactionIcon} />
          <Text style={style.reactionCount}>{data?.likeCount}</Text>
        </View>

        <Text style={style.reactionCount}>{data?.commentCount} comments</Text>
      </View>
      <View style={style.userAction}>
        <View style={style.row}>
          <VectorIcon
            name="like2"
            type="AntDesign"
            size={25}
            color={color.grey}
          />
          <Text style={style.reactionCount}>Like</Text>
        </View>
        <View style={style.row}>
          <VectorIcon
            name="chatbox-outline"
            type="Ionicons"
            size={25}
            color={color.grey}
          />
          <Text style={style.reactionCount}>Comment</Text>
        </View>
        <View style={style.row}>
          <VectorIcon
            name="arrow-redo-outline"
            type="Ionicons"
            size={25}
            color={color.grey}
          />
          <Text style={style.reactionCount}>Share</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
  reactionCount: {
    color: color.grey,
    fontSize: 14,
    paddingLeft: 5,
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerReaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.lightgrey,
    paddingBottom: 15,
  },
  userAction: {
    marginTop: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PostFooter;
