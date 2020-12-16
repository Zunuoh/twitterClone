import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const MessageScreen =()=>{
    return(
        <View style={{flex:1, backgroundColor:"#110c11"}}>
            <View style={{height:155, borderBottomWidth:1, borderBottomColor:"#BEBEBE"}}>
           <View style={{paddingTop:50, flexDirection:"row", justifyContent:"space-between", padding:20}}>
             <View>
                 <Feather
                 name="align-justify"
                 size={30}
                 color="#24A1F2"/>
             </View>
             <View>
                 <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginTop:10}}>Messages</Text>
             </View>
             <View>
                 <Feather
                 name="settings"
                 size={30}
                 color="#24A1F2"/>
             </View>
            </View>

            <View>
                <TextInput style={{backgroundColor:"#BEBEBE", marginLeft:20, marginRight:20, height:30, borderRadius:20, padding:18}}
                placeholder="Search for people and groups"/>
            </View>
            </View>
        </View>
    )
}

export default MessageScreen;