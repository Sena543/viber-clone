import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


export default function AppExtra() {

    const icons = [
        {name:'logo-octocat', backgroundColor:'orange', item_name:'Sticker Market', details:'Add fun to your chat with stickers'},
        {name:'ios-call', backgroundColor:'#37a0ad', item_name:'Viber Out', details:'Low rates to any landline or mobile in the world'},
        {name:'ios-globe', backgroundColor:'#3993ed', item_name:'Viber Local Number', details:'Get a local number in anoter country'},

    ];

    const RenderList = ({name, bgcolor, item_name, details})=>{
        return(
            <TouchableOpacity>
                <View style={{flex:1, flexDirection:'row' , padding:20}}>
                    <View style={{flex:.15, justifyContent:'center', backgroundColor:bgcolor, borderRadius:50, alignItems:'center', 
                    height:50, width:20}}>
                        <Ionicons name={name} color='#ffffff'  size={25}/>
                    </View>
                    <View style={{flex:1, paddingLeft:20}}>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>{item_name}</Text>
                        <Text style={{color:'#7c7a7d'}}>{details}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


  return(
    <FlatList
    data={icons}
    renderItem={ ({item})=> <RenderList name={item.name} bgcolor={item.backgroundColor} item_name={item.item_name}
    details={item.details}
    />}
    keyExtractor={ (item)=>item.name}
    />
  )
}
