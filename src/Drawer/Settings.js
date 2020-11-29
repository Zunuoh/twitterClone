import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const settingsList = [{"id":"0", "item":"Account"}, {"id":"1", "item":"Privacy and safety"}, {"id":"2", "item":"Notifications"}, {"id":"3", "item":"Content Preferences"}]
const generalList = [{"id":"0","item":"Display and Sound"}, {"id":"1","item":"Data usage"}, {"id":"2","item":"Accessibility"}, {"id":"3","item":"About Twitter"}]

const SettingsScreen =()=>{
    const[settings, useSettings] = useState(settingsList);
    const[generals, useGenerals]= useState(generalList);
    return(
        <View style={{flex:1, backgroundColor:"#110c11"}}>
            <View>
           <View style={{paddingTop:50, flexDirection:"row"}}>
             <View>
                 <Feather
                 name="chevron-left"
                 size={30}
                 color="#24A1F2"/>
             </View>
             <View style={{marginLeft:50}}>
                 <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginTop:5, marginLeft:30}}>Settings and privacy</Text>
             </View>
            </View>
            </View>
            <View style={{backgroundColor:"#686868", height:40, justifyContent:"center", padding:10, marginTop:10}}>
                <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>@theaudreyzunuoh</Text>
            </View>
            
            {settings && settings.map(setting=>{
                return(
                    <View style={{backgroundColor:"#110c11", borderWidth:0.2, height:40, paddingLeft:10,paddingTop:10, flexDirection:"row", borderBottomColor:"#808080"}}>
                    <View style={{flex:14}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>{setting.item}</Text>
                    </View>
                    <View style={{flex:2}}>
                    <Feather
                     name="chevron-right"
                     size={26}
                     color="#24A1F2"/>
                    </View>
                   
                </View>
                )
            })}

            <View style={{backgroundColor:"#686868", height:60, justifyContent:"center", paddingLeft:10}}>
                <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>General</Text>
            </View>

            {generals && generals.map(general=>{
                return(
                    <View style={{backgroundColor:"#110c11", borderWidth:0.2, height:40, paddingLeft:10,paddingTop:10, flexDirection:"row", borderBottomColor:"#505050"}}>
                    <View style={{flex:14}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>{general.item}</Text>
                    </View>
                    <View style={{flex:2}}>
                    <Feather
                     name="chevron-right"
                     size={26}
                     color="#24A1F2"/>
                    </View>
                   
                </View>
                )
            })}

            <View style={{paddingTop:15, paddingLeft:10}}>
                <Text style={{color:"white"}}>General settings affect all of your twitter accounts on this device.</Text>
            </View>

            
        </View>
    )
}

export default SettingsScreen;