

import React, { useState,useEffect } from "react"
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
  
} from "react-native";



const PHome = ({ navigation }) => {
  
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground  
          
          source={{uri:'https://img.freepik.com/premium-photo/red-black-background-with-black-background-white-dot-that-says-red_670382-1192.jpg'}}
              style={{height:'100%',
              width:'100%',   
              flex:1}}>
    <View style={{backgroundColor:'black',height:'30%',width:'100%',marginTop:-7,elevation:15}}>
      
    </View>
    
    <View style={{backgroundColor:'#8B0000',height:'80%',width:'80%',marginLeft:40,marginTop:-170,elevation:20,borderRadius:7,marginBottom:28}}>
    <Text style={{color:'white',fontSize:19,marginLeft:130,marginTop:-44,marginBottom:6,fontWeight:'bold'}}>
       Profile
       
    </Text>
    
    <View style={{marginLeft:280,marginTop:-38,marginBottom:17,flexDirection:'row'}}>
    <Icon name='notifications-none' color={'white'}  size={24} />
       <Icon name='check-box-outline-blank' color={'white'}  size={28} /></View>
       <View style={{marginTop:-42,marginLeft:308,width:20,marginBottom:10}}>
       <Icon name='menu' color={'#00FF00'}  size={20} /></View>
       <ImageBackground  
          
          source={{uri:'https://t4.ftcdn.net/jpg/01/23/05/07/360_F_123050732_yDDeAvpaBQcVDkRHsWtWiFULJJkVNzZB.jpg'}}
              style={{height:'100%',
              width:'100%',   
              flex:1}}>
                
       <View style={styles.profileicon}>
    <Image style={styles.profileimage}
    resizeMode="contain"
           source={require('../assets/shop.jpg')}
            ></Image>
             {user ? (
    <Text style={{fontSize:16,color:'black',fontWeight:'700',marginLeft:27,marginTop:12,width:'100%',height:'100%',marginRight:-5,top:8,left:12}}>
     {" "}
      {user.displayName
        ? user.displayName
        : user.email}
    </Text>
  ) : null}
            <View style={{flexDirection:'column',top:12}}>
            <Text style={{fontSize:11,color:'grey',fontWeight:'700',left:-22,marginLeft:-39,marginTop:35,width:'8900%',height:'11000%',left:-12}}>
           ID:1234
            </Text>
            </View>
            </View>
            
<Text style={{color:'black',fontSize:20,marginTop:12,fontWeight:'900',marginLeft:31,marginBottom:15,fontFamily:'serif',left:58,bottom:-33}}>
Personal info
</Text>
</ImageBackground> 
<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:4,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row'}}>
Account settings:
</Text>
<Text style={{color:'black',fontSize:16,marginTop:20,fontWeight:'bold',marginLeft:31,marginBottom:15,flexDirection:'row'}}>
Online
</Text>
</View>
<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:4,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row',}}>
Email:  
</Text>
<Text style={{color:'black',fontSize:14,marginTop:20,fontWeight:'bold',marginLeft:107,marginBottom:15,flexDirection:'row'}}>
email123@gmail.com
</Text>
</View>
<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:5,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row'}}>
Number
</Text>
<Text style={{color:'black',fontSize:14,marginTop:20,fontWeight:'bold',marginLeft:91,marginBottom:15,flexDirection:'row'}}>
+91 987654321
</Text>

</View>

<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:4,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row'}}>
Address
</Text>
<Text style={{color:'black',fontSize:14,marginTop:20,fontWeight:'bold',marginLeft:103,marginBottom:15,flexDirection:'row'}}>
--
</Text>
</View>
<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:4,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row'}}>
Payment Status
</Text>
<Text style={{color:'black',fontSize:15,marginTop:20,fontWeight:'bold',marginLeft:43,marginBottom:15,flexDirection:'row'}}>
free
</Text>
</View>
<View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'white',elevation:9,marginBottom:3}}>
<Text style={{color:'grey',fontSize:15,marginTop:20,fontWeight:'500',marginLeft:25,marginBottom:15,flexDirection:'row'}}>
Return policy
</Text>
<Text style={{color:'black',fontSize:14,marginTop:20,fontWeight:'bold',marginLeft:73,marginBottom:17,flexDirection:'row'}}>
--
</Text>
</View>

<View style={{height:'10%',width:'100%',backgroundColor:'#8B0000',borderRadius:7,flexDirection:'row',top:8}}>

<View style={{marginLeft:16,marginTop:15,marginBottom:2,flexDirection:'row'}}>
    <Icon name='arrow-right' color={'white'}  size={26} />
    <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginLeft:-8,marginRight:115,fontFamily:'serif'}}> Referrals</Text>
       <Icon name='keyboard-arrow-right' color={'white'}  size={30} /></View>
      
</View>

            
    </View>
    </ImageBackground>
</View>
  );
};
export default PHome;
const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
  hometext:{
      fontSize:24,
      fontWeight:'bold',
      color:'red'
  }  ,
  profileimage:{
    height:'100%',
        width:'100%',
        borderRadius:50,
        borderWidth:4,
        
  },
  profileicon:{
    height:75,
    width:75,
    backgroundColor:'black',
    borderRadius:50,
    borderWidth:3,
    borderColor:'black',
    marginRight:16,
    marginTop:20,
    marginLeft:30,
    marginLeft:21,
    flexDirection:'row',
    top:25
},
})

// <View>
         
// {user ? (
//     <Text>
//       Welcome{" "}
//       {user.displayName
//         ? user.displayName
//         : user.email}
//     </Text>
//   ) : null}
  

// </View>