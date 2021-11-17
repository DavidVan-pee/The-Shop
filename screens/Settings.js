import React,{useState} from 'react';
import { Text, View ,ImageBackground, TouchableOpacity,ActivityIndicator} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-gesture-handler';


export default function Settings({navigation}) {

const [isSwitchEnable, setSwitch ] = React.useState(false)

return(
  

<ImageBackground blurRadius = {5}
source ={{uri:"https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/02/shoes-4-900x600-c-center.jpg"}} style={{
      backgroundColor: 'white',
      flex: 1,
      width: 400,
      height:700,
      justifyContent: "center",

    }}>

      <View style={{flex:2,
        padding:2,
        
        }}>


      <View style={{alignItems: "center",
      alignItems:'baseline'
}}> 
      <TouchableOpacity  
     style={{backgroundColor: "black", 
     padding: 6,
     paddingHorizontal: 40 ,
     flexDirection: 'row',
     borderRadius: 40 ,
     marginTop: 20,
     marginLeft: 60,
    }}>
    <Text style={{fontSize: 20 ,fontWeight: '800',marginLeft: 10, color:"white" }}>Languages</Text>


   </TouchableOpacity>

<View style={{flexDirection:'row',alignContent:'space-between',alignItems:'flex-end'}}>
   <View 
     style={{backgroundColor: "black", 
     padding: 5,
     paddingHorizontal: 10 ,
     flexDirection: 'row',
     alignContent:'space-between',
     borderRadius: 40 ,
     marginTop: 60,
     marginLeft: 60,
     }}>
    <Text style={{fontSize: 20 ,fontWeight: '800',marginLeft: 10, color:"white"}}>Dark Mode   </Text>

    <Switch 
    value={isSwitchEnable}
    onValueChange={(value) => setSwitch(value)} 
    /> 
    </View>
    

    


</View>

{/* <ActivityIndicator size="large" color="#ff0000" /> */}

<TouchableOpacity 
     style={{backgroundColor: "black", 
     padding: 5,
     paddingHorizontal: 30 ,
     flexDirection: 'row',
     borderRadius: 40 ,
     marginTop: 60,
     marginLeft:60,
     }}>
    <Text style={{fontSize: 20 ,fontWeight: '900',marginLeft: 10, color:"white" }}>Notifications</Text>


   </TouchableOpacity>


<TouchableOpacity  
onPress={() => navigation.navigate('Login')}
     style={{backgroundColor: "black", 
     padding: 5,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     borderRadius: 40 ,
     marginTop: 60,
     marginLeft:60
     }}>
    <Text style={{fontSize: 20 ,fontWeight: '900',marginLeft: 10,color:"white" }}>SIGN OUT</Text>


   </TouchableOpacity>












   
     </View>
        
      </View>








     
      </ImageBackground>

      

)}