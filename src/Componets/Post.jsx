import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import Story from '../assets/stories1.jpg';
import {color} from '../Color';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import {PostData} from '../data/PostData';
const Post = () => {
  return (
    <>
      {PostData?.map(item => {
        return (
          <View style={style.container} key={item?.id}>
            <PostHeader data={item} />
            <Image source={item?.postImage} style={style.posted} />
            <PostFooter data={item} />
          </View>
        );
      })}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    marginTop: 8,
  },
  profile: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 50,
  },

  posted: {
    width: '100%',
    height: 250,
  },
});
export default Post;
