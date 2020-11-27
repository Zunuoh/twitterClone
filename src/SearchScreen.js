import React from 'react';
import {View, Text, Image, Flatlist} from 'react-native';
import {Feather} from '@expo/vector-icons';

const trendList = [{name:"Patrick"}, {name:"Patrick"}, {name:"Patrick"}, {name:"Patrick"}];

const SearchScreen =()=>{
    return(
        <View style={{flex:1,  backgroundColor:"#110c11"}}>
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

            <View style={{width:"100%", backgroundColor:"red", height:"30%"}}>
            <Image source={require('../assets/images.jpeg')} style={{height:"99%", width:"100%"}}/>

            </View>

          <Flatlist
          data={trendList}
          renderItem={({item})=>(
              <View style={{justifyContent:"center", marginBottom:10}}>
              <Text style={{backgroundColor:"blue", color:"white", padding:10}}>
                  {item.name}
              </Text>
              </View>
          )}
          
          />
        </View>
    )
}

export default SearchScreen;