

import React, { useState } from "react";
import auth from '@react-native-firebase/auth'
import LottieView from "lottie-react-native";
import firebase from '../Fireabse/firebase'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
  
} from "react-native";



const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  console.log(firebase);



  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        alert('user logged in successfully')
        console.log(user);
        if (user) navigation.replace("Drawer");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email")
          setErrortext(error.message);
        else if (error.code === "auth/user-not-found")
          setErrortext("No User Found");
        else {
          setErrortext(
            "Please check your email id or password"
          );
        }
      });
  };

  

  return (
    <ImageBackground 
    style={{width:'100%',height:'100%',flex:1}}
    source={{uri:'https://t4.ftcdn.net/jpg/01/23/05/07/360_F_123050732_yDDeAvpaBQcVDkRHsWtWiFULJJkVNzZB.jpg'}}>
    <SafeAreaView
      style={{ flex: 1, }}
    >
      <ScrollView
       
        Style={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
       
        <View style={{ alignItems: "center" ,marginTop:248}}>
          
        </View>
        <View style={{justifyContent:'center',alignItems:'center',bottom:275}}>
<Text style={{fontSize:33,fontWeight:'bold',fontFamily:'serif',color:'red',top:31,left:-86}}>T</Text>
  <Text style={{fontSize:20,fontWeight:'600',fontFamily:'serif',color:'black',left:6}}>REND-SHOPPING</Text>
</View>
          
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) =>
                setUserEmail(UserEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
             
            />
          </View>
          
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            // onPress={handleSubmitPress}
            // onPress={() =>navigation.navigate('Drawer')
            >
            <ImageBackground
            
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4bpomzE8yS_ny7VxKZ1WKRWoPpTfRXzeyOSUBxMhUJl48dGL1WEl7CZuQIh8FSDNAEA&usqp=CAU'}}
            style={{flex:1,resizeMode:"contain",width:'100%',borderRadius:30,elevation:22}}
            >
          
            <Text style={styles.buttonTextStyle}>
             LOGIN
            </Text>
            </ImageBackground>
          </TouchableOpacity>
    
          <Text
              style={{color:'black',alignSelf:'center',fontSize:18}}
          
              onPress={() =>navigation.navigate('Drawer')
            
              }
            >
              www.trendshopping.com
            </Text>
            <Text  style={{color:'black',alignSelf:'center',bottom:-2,fontSize:12}}>
              for more details contact us on</Text>
            
           
      </ScrollView>
     
    
    </SafeAreaView>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 38,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    bottom:45,
    width:322,
    height:47
    
  },
  buttonStyle: {
    
    
    color: 'white',
    borderColor: 'black',
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: -15,
    marginBottom: 80,
    bottom:-82,
    elevation:5,
    shadowColor:'black',shadowOffset:{width:16,height:20},shadowOpacity:0.55,shadowRadius:7.5
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 22,
    fontWeight:'bold',
    fontFamily:'serif',
    
    right:-13
    
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    elevation:7,
    shadowColor:'black',shadowOffset:{width:16,height:20},shadowOpacity:0.55,shadowRadius:7.5,
    borderRadius: 6,
    borderColor: 'black',
    backgroundColor:'white'
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
