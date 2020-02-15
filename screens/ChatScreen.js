import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';
//import { Divider } from 'react-native-elements'

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
    backgroundColor:'#152238',
    color: 'white'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#152238',
  },
  textStyle:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
