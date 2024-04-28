import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../Color';
import VectorIcon from '../VectorIcon';

const ChatSearch = ({data}) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = text => {
    setQuery(text);
    if (!text.trim()) {
      setFilteredData([]);
    } else {
      const formattedQuery = text.toLowerCase();
      const filteredItems = data.filter(item =>
        item?.name?.toLowerCase().includes(formattedQuery),
      );
      setFilteredData(filteredItems);
    }
  };
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <VectorIcon name="search" type="FontAwesome" size={15} color={color.headerIconGrey} style={styles.Serch} />
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
        </View>

      <FlatList
        data={filteredData?.map(ele => ele?.name)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setQuery(item);
              setFilteredData([]);
            }}
            style={styles.item}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  
    height: 35,
    margin: 12,
    borderRadius: 50,
    backgroundColor: color.background,
  },
  input: {
   top:3,
    paddingLeft:8,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 12,
  },
  Serch:{
    marginLeft:15,
  
  }
});
export default ChatSearch;
