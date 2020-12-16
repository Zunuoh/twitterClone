import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MomentScreen =({navigation})=>{
    return(
        <View style={{flex:1, padding:50}}>
          <Text>dhjndm</Text>
          <TouchableOpacity style={{width:60, height:70, backgroundColor:"red"}} onPress={()=>{navigation.navigate('Home')}}>
              <Text>Button</Text>
          </TouchableOpacity>
        </View>

    );
}

export default MomentScreen;