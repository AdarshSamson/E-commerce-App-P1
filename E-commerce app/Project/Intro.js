import React from "react";
import {  ImageBackground, View,Image,Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";

import LottieView from "lottie-react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Intro = ({ navigation }) => {
// setTimeout(() => {
//     navigation.navigate('Signin')
// }, 16210);

    return (
        <View >
            
    <ImageBackground
    style={{width:'100%',height:'70%',top:203}}
    source={{uri:'https://png.pngtree.com/background/20211215/original/pngtree-indonesia-independence-day-festival-celebration-red-and-white-flag-doodle-picture-image_1453036.jpg'}}
   >

<View>
    <Image
    style={{width:'40%',height:'65%',bottom:234,right:-119}}
    source={require('../assets/shop.jpg')}
    />
    
</View>
<Image
    style={{width:'60%',height:'20%',bottom:317,left:80}}
    source={require('../assets/Trendsetter-Quotes.jpg')}
    />
<View style={{top:-483,alignItems:'center'}}>
        <LottieView
          source={require("../assets/144238-stacking-shapes-animation.json")}
          style={{width:70,height:70,}}
          autoPlay
          speed={1}
          loop
        />
</View>
<View style={{justifyContent:'center',alignItems:'center',bottom:290}}>
<Text style={{fontSize:33,fontWeight:'bold',fontFamily:'serif',color:'red',top:31,left:-86}}>T</Text>
  <Text style={{fontSize:20,fontWeight:'600',fontFamily:'serif',color:'black',left:6}}>REND-SHOPPING</Text>
</View>
<View style={{top:-85,alignItems:'center',}}>

        <LottieView
          source={require("../assets/116615-start-button-red.json")}
          style={{width:200,height:200,}}
          autoPlay
        />
       <TouchableOpacity
         activeOpacity={0.6}
         underlayColor="black"
       style={{borderWidth:1,borderRadius:50,backgroundColor:'red',width:72,height:52,bottom:75, 
       }}
       onPress={() =>navigation.navigate('Signin')     
      
       
       } >
       <Icon name="arrow-right-circle" size={49} color='black'> </Icon>
        </TouchableOpacity >
</View>
<View style={{top:-565,alignItems:'center',justifyContent:'center'}}>
        <LottieView
        
          source={require("../assets/92411-shopping-cart.json")}
          style={{width:360,height:360,}}
          autoPlay
          loop
          
        />
</View>
{/* <View style={{top:-620,alignItems:'center'}}>
        <LottieView
          source={require("../assets/99844-loading.json")}
          style={{width:110,height:110,}}
          autoPlay
          
        //   loop={false}
          
        />
</View> */}
</ImageBackground>

      </View>
    );
  };
  export default Intro;
  
