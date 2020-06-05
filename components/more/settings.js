import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


export default function Features() {

    const icons = [
        {name:'ios-settings', backgroundColor:'#66c7ff', item_name:'Settings',},
        {name:'ios-menu', backgroundColor:'#7e68de', item_name:'My Notes', },
        {name:'ios-person-add', backgroundColor:'#5bbda9', item_name:'Add Contact', },
        {name:'ios-share-alt', backgroundColor:'#7e68de', item_name:'Invite Friends', },
        {name:'ios-information-circle', backgroundColor:'orange', item_name:'About and FAQ', },

    ];

    const RenderList = ({name, bgcolor, item_name,})=>{
        return(
            <TouchableOpacity>
                <View style={{flex:1, flexDirection:'row' , padding:20}}>
                    <View style={{flex:.15, justifyContent:'center', backgroundColor:bgcolor, borderRadius:50, alignItems:'center', 
                    height:50, width:20}}>
                        <Ionicons name={name} color='#ffffff'  size={25}/>
                    </View>
                <View style={{flex:1, paddingLeft:20, justifyContent:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'400'}}>{item_name}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    }


  return(
    <View style={{flex:1}}>
    <FlatList
    data={icons}
    renderItem={ ({item})=> <RenderList name={item.name} bgcolor={item.backgroundColor} item_name={item.item_name}
    />}
    keyExtractor={ (item)=>item.name}
    />
    </View>
  )
}


//{name:'logo-octocat', backgroundColor:'orange', item_name:'Start a group chat',},
