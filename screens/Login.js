import React from "react";
import { View,Text,TextInput,TouchableOpacity, ImageBackground} from "react-native";
import {AntDesign} from "@expo/vector-icons"

export default function Login({navigation}){
    
    return (
        <ImageBackground
        style={{ flex:1 }}
source={{url:"https://images.unsplash.com/photo-1620554740172-7c02a78b239d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNsYXNzaWMlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}>
        <View style={{  justifyContent: "center", alignItems:"center" ,paddingTop:240}}>
           

            <Text style={{ color: "white" , fontSize:25 ,fontWeight:"900"}}>WELCOME TO SHOENIVERSE </Text>
            <Text style={{ color: "white" ,fontSize: 20 ,marginTop: 15}}>EMAIL OR USERNAME</Text>

   <TextInput style={{
    backgroundColor:"#e3e3e3",
    padding: 13,
    borderWidth: 1,
    margin:10,
    width:200,
    }} placeholder="***********" /> 


   <Text style={{ color: "white" , fontSize:20 }}>PASSWORD</Text>
   
   <TextInput secureTextEntry= {true} style={{
    backgroundColor:"#e3e3e3" ,
    padding: 13,
    borderWidth: 1,
    margin:10,
    width:200,
    }} placeholder=".......@gmail.com" /> 


    <TouchableOpacity onPress={() =>{
        navigation.navigate("Home")
    }} 
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 10,}}>
         {/* <AntDesign name="google" size={24} color="rgb(256,100,10)" /> */}
    <Text style={{fontSize: 20 , marginLeft: 10 }}>LOGIN</Text>
  
    

   </TouchableOpacity>

   <TouchableOpacity 
   
   style={{backgroundColor: "black", 
     padding: 10,
     borderRadius: 10,
     flexDirection: 'row',
     paddingHorizontal: 60 ,
     marginTop: 1  *0,}}>
         <AntDesign name="apple1" size={24} color="white"/>
    <Text style={{fontSize: 17, color: "white", marginLeft:10}}>Login With Apple</Text>
   </TouchableOpacity>

   <TouchableOpacity>
   <Text style={{marginTop:10, fontWeight: '500', color: 'yellow' ,}}> Not a member ?
    <Text style={{color:"white" , fontWeight: 'bold',}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
 
        </View>
        </ImageBackground>
    )
}