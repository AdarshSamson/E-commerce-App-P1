import React from "react";
import {  View } from "react-native";

import LottieView from "lottie-react-native";

const Loader = ({ navigation }) => {
setTimeout(() => {
    navigation.navigate('Drawer')
}, 6000);

    return (
        <View>
        <LottieView
          source={require("../assets/30173-welcome-screen.json")}
          style={{width:100,height:100}}
          autoPlay
        />
      </View>
    );
  };
  export default Loader;
  
