import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function CallList() {

  const contacts = [
    {id:1, name:'Alex Kulnig', avatarPath: require('../../assets/images/avatar.jpg'),},
    {id:2, name:'Martin Tyler', avatarPath: require('../../assets/images/avatar.jpg'),},
    {id:3, name:'Wang', avatarPath: require('../../assets/images/avatar.jpg'),},
    {id:4, name:'Maximorf', avatarPath: require('../../assets/images/avatar.jpg'),}, 
    {id:5, name:'Fury', avatarPath: require('../../assets/images/avatar.jpg'),}, 
    {id:6, name:'Spike', avatarPath: require('../../assets/images/avatar.jpg'),}, 
    {id:7, name:'Hiccup', avatarPath: require('../../assets/images/avatar.jpg'),}, 
  ]

  const RenderContactList = ({name, avatarPath})=>{
    return(
      <View style={{flex:1, flexDirection:'row', margin:20,}}>
        <View style={{flex:1}}>
          <Image source={avatarPath} size={20} style={{height:65, width:65, borderRadius:50, paddingBottom:20}}/>
        </View>
        <View style={{flex:1,  justifyContent:'flex-start', marginRight:80 }}>
          <Text style={{fontSize:20}}>{name}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:.9, backgroundColor:'#d5d8de', width:70, height:40, alignItems:'center', 
          justifyContent:'center', borderRadius:20, marginRight:20}}>
            <Text style={{color:'#7d52a1'}}>Invite</Text>
          </View>
          <View style={{flex:.7, backgroundColor:'#d5d8de', width:40, height:40, alignItems:'center', 
          justifyContent:'center', borderRadius:50, }}>
            <Ionicons name='ios-call' color='#7d52a1' size={30}/>
          </View>
        </View>
      </View>
    )
  }


  return (
   <View style={styles.container}>
     <View style={{flex:.1, flexDirection:'row', borderBottomWidth:.5, paddingBottom:20}}>
        <View style={{flex:.25, backgroundColor:'#37a0ad', width:20, height:50, alignItems:'center', 
          justifyContent:'center', borderRadius:50, marginLeft:25}}>
          <Ionicons name='ios-call' color='#ffffff' size={30}/>
        </View>
        <View style={{flex:1, marginLeft:20,}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>Viber Out</Text>
          <Text>Low rate calls to any landline or mobile in the world</Text>
        </View>
        <View style={{flex:.3, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
          <Entypo name='chevron-right'/>
        </View>
     </View>
     <View style={{flex:1,}}>
        <FlatList
        data={contacts}
        renderItem={({item})=> <RenderContactList name={item.name} avatarPath={item.avatarPath}/>}
        keyExtractor={ (item)=> item.id.toString()}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });
  

