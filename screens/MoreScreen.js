import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import AppExtra from '../components/more/appExtras'
import AccountDetails from '../components/more/account_details'
import Features from '../components/more/settings'
import { ScrollView } from 'react-native-gesture-handler';


export default function MoreScreen() {
  return(
    <View style={{flex:1}}>
      <View style={{flex:.7, alignItems:'center', padding:50, borderBottomWidth:.3}}>
        <AccountDetails/>
      </View>
      <ScrollView style={{flex:2}}>
      <View style={{flex:1}}>
        <AppExtra/>
      </View>
      <View style={{backgroundColor:'#e0e0e0', height:10}} ></View>
      <View style={{flex:1}}>
        <Features/>
      </View>
      </ScrollView>
    </View>
  )
}

MoreScreen.navigationOptions = {
  title: 'Settings',
};
