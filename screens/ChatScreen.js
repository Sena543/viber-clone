import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import ContactList from '../components/contactList';

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
    backgroundColor:'#152238'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
