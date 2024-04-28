import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import VectorIcon from '../VectorIcon';
import {color} from '../Color';

const ChatHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          color={color.black}
          size={25}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.Text}>Chats</Text>
      </View>
      <View style={styles.Seting}>
        <TouchableOpacity>
          <VectorIcon
            name="settings-sharp"
            type="Ionicons"
            color={color.black}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <VectorIcon
            name="edit"
            type="FontAwesome5"
            color={color.black}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: color.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Seting: {
    flexDirection: 'row',
    gap: 8,
  },
  Text: {
    fontSize: 20,
    fontWeight: '600',
    color: color.black,
    marginLeft: 20,
  },
});
export default ChatHeader;
