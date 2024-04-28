import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {color} from '../Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ChatList = ({navigation, data}) => {
  const [checkIn, setcheckIn] = useState(true);
  const [community, setCommunity] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.inputBoxes}>
        {checkIn ? (
          <TouchableOpacity
            onPress={() => {
              setcheckIn(true);
              setCommunity(false);
            }}>
            <Text style={styles.slectText}>Inbox</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setcheckIn(true);
              setCommunity(false);
            }}>
            <Text style={styles.narmalText}>Inbox</Text>
          </TouchableOpacity>
        )}
        {community ? (
          <TouchableOpacity
            onPress={() => {
              setCommunity(true);
              setcheckIn(false);
            }}>
            <Text style={styles.slectText}>Community</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setCommunity(true);
              setcheckIn(false);
            }}>
            <Text style={styles.narmalText}>Community</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
{checkIn ? (   <ScrollView>
          {data.map((ele, i) => {
            return (
              <View style={styles.chatL} key={i}>
                <TouchableOpacity onPress={()=>navigation.navigate("ChatFriend",{item:ele})}>
                <View style={styles.MsgHead}>
                  <Image source={ele.profile} style={styles.profile} />
                  <View>
                    <Text style={styles.username}>{ele?.name}</Text>
                    <Text>you: hi dost</Text>
                  </View>
                </View> 
                </TouchableOpacity>
               
                <View>
                  <Image source={ele.profile} style={styles.profile2} />
                  </View>
              </View>
            );
          })}
        </ScrollView>):(<ScrollView>
            <View style={styles.Cumminites}>
                <Text>No Cummunites</Text>
            </View>
        </ScrollView>)}
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputBoxes: {
    flexDirection: 'row',
    gap: 5,
  },
  slectText: {
    backgroundColor: color.borderGrey,
    color: color.primaryColor,
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  Cumminites:{
    justifyContent:"center",
    alignItems:"center",
    height:500

  },
  narmalText: {
    // backgroundColor:color.borderGrey,
    color: color.black,
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
  },

  chatL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profile2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginTop:10
  },
  username: {
    top: 7,
    color: color.black,
    fontSize: 18,
  },
  MsgHead:{
    flexDirection:"row",
    gap:10
  }
});
export default ChatList;
