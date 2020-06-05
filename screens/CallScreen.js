import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import CallList from '../components/call/callList';

export default function CallScreen() {

  return (
   <View style={styles.container}>
     <CallList/>
    </View>
  );
}

CallScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
