import React from "react";
import {  ImageBackground, View,Image } from "react-native";

import LottieView from "lottie-react-native";

const Splash = ({ navigation }) => {
setTimeout(() => {
    navigation.navigate('Intro')
}, 14210);

    return (
        <View >
            
    <ImageBackground
    style={{width:'100%',height:'90%',top:203}}
    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBy1Wv0NEI6AWJ0q_XwKb1gWC9WfsAQZ3JRfj5YzlF6d-QLWdkDdiAcWK44dH_IbNALo&usqp=CAU'}}
   >

<View>
    <Image
    style={{width:'100%',height:'75%',bottom:260}}
    source={require('../assets/shop.jpg')}
    />
    
</View>
<Image
    style={{width:'100%',height:'14%',bottom:375}}
    source={require('../assets/Trendsetter-Quotes.jpg')}
    />
<View style={{top:-643,alignItems:'center'}}>
        <LottieView
          source={require("../assets/144238-stacking-shapes-animation.json")}
          style={{width:160,height:160,}}
          autoPlay
          speed={1}
          loop
        />
</View>
<View style={{top:-533,alignItems:'center'}}>
        <LottieView
          source={require("../assets/140559-order-now.json")}
          style={{width:120,height:120,}}
          autoPlay
          loop={false}
        />
</View>
<View style={{top:-328,alignItems:'center'}}>
        <LottieView
        
          source={require("../assets/142053-loading-text.json")}
          style={{width:100,height:100,}}
          autoPlay
        loop
          
        />
</View>
<View style={{top:-483,alignItems:'center'}}>
        <LottieView
          source={require("../assets/99844-loading.json")}
          style={{width:110,height:110,}}
          autoPlay
          
        //   loop={false}
          
        />
</View>
</ImageBackground>

      </View>
    );
  };
  export default Splash;
  
