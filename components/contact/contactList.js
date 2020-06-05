import React from 'react'
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ContactList(){
    const contacts =[
        {
            id:1,
            name:'Martin Kuerbs',
            message: 'Send me the docs please',
            time: '09:28',
            messagenumber: 8,
            avatarPath: require('../../assets/images/lantern.jpg'),
        }, 
        {
            id:2,
            name:'FC Barcelona',
            message: 'Valerdy: ',
            time: '09:28',
            messagenumber: 2,
            avatarPath: require('../../assets/images/match.jpg'),
           },
        {
            id:3,
            name:'Shakira',
            message: "A tour is on it's, are you ready? Bacelona tickets",
            time: '12:30',
            messagenumber: 3,
            avatarPath: require('../../assets/images/fire.jpg'),
            },
        {
            id:4,
            name:'Giovanni Moretti',
            message: "Not Sure I can come today.Very busy this week",
            time: '22:20',
            messagenumber: 1,
            avatarPath: require('../../assets/images/bulb.jpg'),
            },
        {
            id:5,
            name:'Alex Kulnig',
            message: "Sticker",
            time: '1:30',
            messagenumber: 5,
            avatarPath: require('../../assets/images/batman.jpg'),
            }];

            const RenderChatList = ({name, avatarPath, message, messagenumber, time})=>{
                return(
                    <TouchableOpacity>
                        <View style={{flex:1, flexDirection:'row', margin:20, borderBottomWidth:.5}}>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingBottom:5}}>
                            <Image source={avatarPath} size={20} style={{height:100, width:100, borderRadius:50,}}/>
                        </View>
                        <View style={{flex:1.5, }}>
                            <Text style={{fontSize:25}}>{name}</Text>
                            <Text style={{fontSize:15}}>{message}</Text>
                            </View>
                        <View style={{flex:.5, flexDirection:'row'}}>
                            <Ionicons  size={20} color='#80818a' name='md-checkmark'/>
                            <View style={{marginLeft:10}}>
                                <Text style={{fontSize:15, color:'#4a03a6'}}>{time}</Text>
                                <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#4a03a6', borderRadius:20, width:20}}>
                                    <Text style={{color:'#ffffff'}}>{messagenumber}</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>
                )
            }
    
    
        return(
            <View style={styles.container}>
               <FlatList
               data={contacts}
               keyExtractor ={(item)=> item.id.toString()}
               renderItem={({item})=>  <RenderChatList name={item.name} avatarPath={item.avatarPath} 
               messagenumber={item.messagenumber}
               message={item.message} time={item.time} />}
                />
            </View>
        )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:'#152238'
      },
    main:{
        flex:1,
        //backgroundColor:'#152238', 
        height:80,
        borderRadius:20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    imageStyle:{
        height:90, 
        width:90, 
        borderRadius:100
    },
    messages:{
        backgroundColor:'#4a03a6',
        borderRadius:100,
        fontSize:15,
        color:'#ffffff'
    }
}) 

/**
 <FlatList
                    data={contacts}
                    keyExtractor ={(item)=> item.id.toString()}
                    renderItem={({item})=>  <RenderChatList name={item.name} avatarPath={item.avatarPath} messagenumber={item.messagenumber}
                    message={item.message} time={item.time} />}
                />
            </View>

 */