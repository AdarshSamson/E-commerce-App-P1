
import React, { useReducer, useState} from "react";
import auth from '@react-native-firebase/auth'
import { firebase } from "../Fireabse/firebase";
import LottieView from "lottie-react-native";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Splash from "./Splash";
import Loader from "../Lottiepages/loader";



const Signin = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
console.log(firebase);
  


  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) return alert("Please fill Name");
    if (!userEmail) return alert("Please fill Email");
    if (!userPassword) return alert("Please fill Address");

    auth()
      .createUserWithEmailAndPassword(
        userEmail,
        userPassword
      )
      .then((user) => {
       alert('User registered successfully')
        console.log(user);
        if (user) {
          auth()
            .currentUser.updateProfile({
              displayName: userName,
              photoURL:
                "https://aboutreact.com/profile.png",
            })
            .then(() =>{<Loader/>},
            navigation.replace("Login"))
            .catch((error) => {
              alert(error);
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrortext(
          alert(  "That email address is already in use!")
          );
        } else {
          setErrortext(error.message);
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
             value={userName}
             onChangeText={(userName) =>
               setUserName(userName)
             }
             underlineColorAndroid="#f000"
             placeholder="Enter Name"
             placeholderTextColor="#8b9cb5"
             autoCapitalize="sentences"
             maxLength={10}
           />
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
            onPress={handleSubmitButton}
            >
            <ImageBackground
            
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4bpomzE8yS_ny7VxKZ1WKRWoPpTfRXzeyOSUBxMhUJl48dGL1WEl7CZuQIh8FSDNAEA&usqp=CAU'}}
            style={{flex:1,resizeMode:"contain",width:'100%',borderRadius:30,elevation:22}}
            >
          
            <Text style={styles.buttonTextStyle}>
             REGISTER
            </Text>
            </ImageBackground>
          </TouchableOpacity>
    
          <Text
              style={{color:'black',alignSelf:'center'}}
              onPress={() =>navigation.navigate('Login')
            
              }
            >
              Already Registered ? go to Login Page
            </Text>
            
           
      </ScrollView>
     
    
    </SafeAreaView>
    </ImageBackground>
  );
};
export default Signin;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 38,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    bottom:62
    
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderWidth: 2,
    color: 'white',
    borderColor: 'black',
    height: 40,
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    bottom:-12,
    elevation:10,
    shadowColor:'red',shadowOffset:{width:16,height:20},shadowOpacity:0.55,shadowRadius:7.5
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 21,
    fontWeight:'bold',
    fontFamily:'serif',
    right:-6
  },
  inputStyle: {
    flex: 1,
    color: "yellow",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
