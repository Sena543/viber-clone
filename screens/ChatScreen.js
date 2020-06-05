import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import ContactList from '../components/contact/contactList';

export default function ChatScreen() {
  
  return (
   <View style= {styles.container}>
      <ContactList/>   
   </View>
  );
}

ChatScreen.navigationOptions = {
  title: 'Chats',
  headerStyle:{
    backgroundColor:'#ffffff',
    color: 'white'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
  },
  textStyle:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
