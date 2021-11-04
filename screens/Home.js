import React from "react";
import { ImageBackground, View,Text,Image,TouchableOpacity,ScrollView } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import Card from '../routes/card'

export default function Home(Navigation){
    
    
    return  (
        <ImageBackground blurRadius = {10}
        source={{uri:"https://thumbs.dreamstime.com/b/pair-classic-brown-leather-grooms-shoes-carpet-photogr-pair-classic-brown-leather-grooms-shoes-carpet-126101293.jpg"}}  
        style={{ flex:1 
        
        }}> 
        
  

<View>  
    <View style= {{padding:40,flexDirection:'row',justifyContent:'space-between'}}>
<EvilIcons name="search" size={30} color="black" />
<TextInput placeholder= "search" style={{
  backgroundColor:"#e3e3e3" ,
  padding: 5,
  borderWidth: 2,
  width:150,
  borderRadius:10
  }}/>
<Entypo name="menu" size={30} color="black" />




    </View>
<ScrollView> 
<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdna.lystit.com/200/250/n/photos/atterley/9ad42e5b/loake-Brown-Leather-Wadham-Oxford-Shoes.jpeg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>LOAKE</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 300.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>

<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdn-images.farfetch-contents.com/17/06/95/46/17069546_34818354_300.jpg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>TRICKER'S</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 150.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>

<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdn11.bigcommerce.com/s-izwghoi0cx/images/stencil/1280x1280/products/313/2549/cleverley-brand-new-george-cleverley-george-loafers-brown-leather__10445.1600274184.jpg?c=2"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>GEORGE CLEVERLEY'S</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 200.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>

<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdna.lystit.com/200/250/tr/photos/cettire/2b3a8202/john-lobb-Black-City-Ii-Oxford-Lace-up-Shoes.jpeg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>JOHN LOBB</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 220.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>


<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdn-images.farfetch-contents.com/16/86/76/97/16867697_35286285_300.jpg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>MAGNANNI</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 400.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>


<View style={{padding:30}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdn-images.farfetch-contents.com/15/84/93/45/15849345_29738763_600.jpg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>SANTONI</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 250.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>

<View style={{padding:30,paddingBottom:150}}>
<Card>
<Image 
style={{width:190, height:200}}
source={{url:"https://cdn-images.farfetch-contents.com/16/68/13/24/16681324_33485395_300.jpg"
}}/>
<Text style={{fontWeight:'600',fontSize:20}}>SALVATORE FERRAGAMO</Text>
<Text style={{fontWeight:'600',fontSize:20}}>GH 350.00</Text>
<TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     paddingHorizontal: 60 ,
     marginTop: 20,
     marginBottom:20
     }}>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>ADD TO CART</Text>
   </TouchableOpacity>
</Card>
</View>


</ScrollView>





</View>
</ImageBackground>
    )
}