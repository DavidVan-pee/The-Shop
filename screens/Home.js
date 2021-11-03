import React from "react";
import { ImageBackground, View,Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";

export default function Home(Navigation){
    
    
    return  (


    <View style= {{padding:40,flexDirection:'row',justifyContent:'space-between'}}>
<EvilIcons name="search" size={30} color="black" />
<TextInput style={{
  backgroundColor:"#e3e3e3" ,
  padding: 5,
  borderWidth: 2,
  width:150,
  borderRadius:10
  }}/>
<Entypo name="menu" size={30} color="black" />




    </View>


    )
}