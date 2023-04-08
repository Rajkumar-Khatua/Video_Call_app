import { Text, StyleSheet, View, FlatList, TextInput,Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import contacts from '../../../assets/data/contacts.json';
import { useNavigation } from '@react-navigation/core';

const ContactScreen = () => {
  // Search Functionality
  const [searchItem, setSearchItem] = useState('');
  const [filterContact, setFilterContact] = useState(contacts);
  
  const navigation = useNavigation();

  useEffect(() => {
    const results = contacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchItem.toLowerCase()),
    );
    setFilterContact(results);
  }, [searchItem]);

  // call to user
  const UserCall =user =>{
    navigation.navigate('CallingScreen',{user})
  }
  return (
    <View style={ styles.pages }>
      <View style={ styles.header }>
        <TextInput
          value={ searchItem }
          onChangeText={ setSearchItem }
          style={ styles.search }
          placeholder="Search..."
        />
      </View>
      <FlatList
        data={ filterContact }
        renderItem={ ({ item }) => (
          <Pressable onPress={()=> UserCall(item)}>
          <Text style={ styles.contactName }>{ item.user_display_name }</Text>
          </Pressable>
        ) }
        ItemSeparatorComponent={ () => <View style={ styles.separator } /> }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    padding: 10,
    backgroundColor:'#fff',
    flex:1
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 15,
    color:'#242B2E'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#525050',
  },

  search: {
    backgroundColor: '#CAD5E2',
    padding: 10,
    borderRadius: 15,
    // borderWidth:1,
    // borderColor:'#fff'
  },
});
export default ContactScreen;
