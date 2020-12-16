import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const fleetList = [{"id":"0", "name":"Add", "image":require('../../assets/paint1.jpeg')}, {"id":"1", "name":"richie_yemoh", "image":require('../../assets/paint2.jpeg')}, {"id":"2", "name":"PulseGhana", "image":require('../../assets/images.jpeg')}, {"id":"3", "name":"ameyawdebrah", "image":require('../../assets/paint3.jpeg')}, {"id":"4", "name":"kafuikomla", "image":require('../../assets/paint1.jpeg')}, {"id":"5", "name":"zubardah_x", "image":require('../../assets/paint3.jpeg')}]

const HomeScreen =({navigation})=>{
    const [fleets, useFleets] = useState(fleetList);
    return(
        <View style={{flex:1, backgroundColor:"#110c11"}}>
            <View style={{paddingTop:50, flexDirection:"row", justifyContent:"space-between", padding:20}}>
             <View>
                 <Feather
                 name="align-justify"
                 size={30}
                 color="#24A1F2"/>
             </View>
             <View>
                 <Feather
                 name="twitter"
                 size={30}
                 color="#24A1F2"/>
             </View>
             <View>
                 <Feather
                 name="align-justify"
                 size={30}
                 color="#24A1F2"/>
             </View>
            </View>
            
            <View style={{marginTop:10, flexDirection:"row", height:80, borderBottomWidth:1, borderBottomColor:"#707070", paddingLeft:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {fleets.map(fleet=>{
                    return(
                        <View style={{marginRight:20}}>
                        <TouchableOpacity style={{width:50, height:50, borderRadius:30, borderWidth:1, borderColor:"#24A1F2", justifyContent:"center", alignItems:"center"}} 
                        // onPress={()=>{navigation.navigate('Moment')}}
                        >
                            <Image source={fleet.image} style={{height:40, width:40, borderRadius:30}}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:"center", alignItems:"center", marginTop:5}}>
                        <Text style={{color:"#24A1F2"}}>{fleet.name.split("").length>5 ? `${fleet.name.slice(0,5)}...`:fleet.name}</Text>
                        </View>

                        </View>
                    );
                })}
                </ScrollView>
               
                
            </View>












        </View>
    )
}

export default HomeScreen;