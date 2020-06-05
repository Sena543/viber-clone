import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


export default function AccountDetails() {
  return(
    <View style={{flex:1}}>
      <View style={{flex:1, alignItems:'center', padding:25,}}>
        <View style={{height:120, width:120, backgroundColor:'#e0e0e0', alignItems:'center', justifyContent:'center', borderRadius:40 }}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Ionicons name='ios-camera' color='#7e68de'  size={60}/>
          </View>
        </View>
        <View style={{padding:20, alignItems:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Branch</Text>
          <Text style={{color:'#7c7a7d'}}>+2331234567890</Text>
        </View>
      </View>
    </View>
  )
}
