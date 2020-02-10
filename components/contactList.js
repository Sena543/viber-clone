import React from 'react'
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ContactList(){
    const contacts =[
        {
         id:1,
        name:'Maya'}, 
        {
          id:2,
          name:'Julia'
        },
      {
        id:3,
        name:'Mike'}]
    
    
        return(
            <View style={styles.container}>
                <FlatList
                    data={contacts}
                    keyExtractor ={(item)=> item.id.toString()}
                    renderItem={({item})=>(
                        <TouchableOpacity>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )

}

const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor: '#fff', 
        justifyContent: 'center'
    },
    testStyle:{
        fontSize:20,
        
    }

}) 