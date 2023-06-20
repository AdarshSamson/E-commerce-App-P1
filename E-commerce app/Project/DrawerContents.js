import React,{useState,useEffect} from "react"
import {View,Text,StyleSheet,Image,TouchableHighlight, ImageBackground,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth'


const DrawerContents=({navigation})=>{

    const [user, setUser] = useState();

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged((user) => {
        console.log("user", JSON.stringify(user));
        setUser(user);
      });
  
      return subscriber;
    }, []);
  
    const logout = () => {
      Alert.alert(
        "Logout",
        "Are you sure? You want to logout?",
        [
          {
            text: "Cancel",
            onPress: () => {
              return null;
            },
          },
          {
            text: "Confirm",
            onPress: () => {
              auth()
                .signOut()
                .then(() => navigation.replace("Auth"))
                .catch((error) => {
                  console.log(error);
                  if (error.code === "auth/no-current-user")
                    navigation.replace("Auth");
                  else alert(error);
                });
            },
          },
        ],
        { cancelable: false }
      );
    };
  



    return(
      <ImageBackground  
          
      source={{uri:'https://t4.ftcdn.net/jpg/01/23/05/07/360_F_123050732_yDDeAvpaBQcVDkRHsWtWiFULJJkVNzZB.jpg'}}
          style={styles.profilecontainer}>
            
        <View style={styles.conatiner}>
      
           <View style={styles.profileicon}>
               <View style={{marginTop:-61,marginBottom:31}}>
               <TouchableHighlight style={styles.b2}   underlayColor='#123456'
               
      onPress={() =>navigation.navigate('Product')}> 
               <Icon name="close" color={'white'} size={24}/>
               </TouchableHighlight>
               </View>
                <View >
                <Image style={styles.profileimage}
               source={require('../assets/shop.jpg')}
                ></Image>    
               
           </View>
           
           </View>
           <Text style={{top:-52,left:133,fontWeight:'bold',fontFamily:'serif',color:'red'}}>T</Text>
           <View style={{marginTop:90,marginRight:10}}>
               
                
               
           {user ? (
            <Text style={styles.s6}>
              Username-{" "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}
               <Text style={styles.s7}>ID: 1234</Text>
               
           
           
           </View >
           <View style={{marginTop:15,}}>
           <Icon name="keyboard-arrow-right" size={30} color={'white'}/>
           
           </View>
     
      
       {/* <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#00FF00'}  size={34 } />
       
      
       </View> */}
       {/* <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#00FF00'}  size={34 } />
       </View> */}
       {/* <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#00FF00'}  size={34 } />
       </View> */}
      
       <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#8B0000'}  size={34 } />
       </View>
       <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#8B0000'}  size={34 } />
       </View>
       <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#8B0000'}  size={34 } />
       </View>
       <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#8B0000'}  size={34 } />
       </View>
       <View style={{marginBottom:20,marginLeft:32}}>
       <Icon name='check-box-outline-blank' color={'#8B0000'}  size={34 } />
       </View>
      
       {/* <Text style={styles.menu}
       onPress={()=> this.props.navigation.navigate('Home' )} >        Exam Corner</Text>
       <Text style={{ fontSize:18,
marginTop:27,
marginLeft:35,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'grey',
fontWeight:'bold'}} 
       onPress={()=> this.props.navigation.navigate('Profile')} >        Subscriptions</Text> */}
       {/* <Text style={{ fontSize:18,
marginTop:27,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'grey',
fontWeight:'bold'}} 
        onPress={()=> this.props.navigation.navigate('WalletBallance')} >        Analytics </Text> */}
       <Text style={{ fontSize:18,
marginTop:-267,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}} 
        onPress={()=> this.props.navigation.navigate('Records')} >        Location</Text>
         <Text style={{ fontSize:18,
marginTop:23,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}} 
        onPress={()=> this.props.navigation.navigate('RefundsAndPolicies')} >        Notifications</Text>
         <Text style={{ fontSize:18,
marginTop:25,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}} 
        onPress={()=> this.props.navigation.navigate('Settings')} >        Referrals</Text>
         <Text style={{ fontSize:18,
marginTop:24,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}} 
        onPress={()=> this.props.navigation.navigate('AboutUs')} >        Send Feedback</Text>
         <Text style={{ fontSize:18,
marginTop:24,
marginLeft:55,
color:'white',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}} 
        onPress={()=> this.props.navigation.navigate('Help')} >        Contact</Text>
        <View style={{ fontSize:18,
marginTop:20,
marginLeft:25,
color:'red',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'red',
fontWeight:'bold',
fontFamily:'serif'}}>
  
           <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
           <TouchableOpacity
            style={{ borderWidth: 2,
              color: 'white',
              borderColor: 'black',
              height: 40,
              alignItems: "center",
              borderRadius: 3,
              // marginLeft: 35,
              // marginRight: 35,
              // marginTop: 20,
              // marginBottom: 20,
              bottom:70,
              right:45,
              elevation:10,
              shadowColor:'red',shadowOffset:{width:16,height:20},shadowOpacity:0.55,shadowRadius:7.5}}
            activeOpacity={0.5}
             onPress={logout}
            // onPress={() =>navigation.navigate('Drawer')
            >
            <ImageBackground
            
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4bpomzE8yS_ny7VxKZ1WKRWoPpTfRXzeyOSUBxMhUJl48dGL1WEl7CZuQIh8FSDNAEA&usqp=CAU'}}
            style={{flex:1,resizeMode:"contain",width:'100%',borderRadius:30,elevation:22}}
            >
          
            <Text style={{ color: 'white',
    paddingVertical: 3,
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'serif',
    
    right:-9
    }}>
            LOGOUT
            </Text>
            </ImageBackground>
          </TouchableOpacity>
        
        </View>
        
   </View>
   </View>
   </ImageBackground>
    )
}

export default DrawerContents 

const styles=StyleSheet.create({
    conatiner: {
       
       
        
    },
   
    profilecontainer:{
        height:'30%',
        width:'100%',
        flexDirection:'row',       
        backgroundColor:'black',
        flex:1
    },
    profileicon:{
        height:100,
        width:100,
        backgroundColor:'red',
        borderRadius:50,
        borderWidth:2,
        borderColor:'black',
        marginRight:36,
        marginTop:65,
        marginLeft:35,
        left:52,
        justifyContent:'center',
       

    },
  
    profileimage:{
        height:'100%',
        width:'100%',
        borderRadius:50,
        borderWidth:4,
        top:5,
        resizeMode:'repeat'
        
    },
    nametext:{
        color:'white',
        fontWeight:'bold',
        marginBottom:5,
        marginBottom:50,
        
    },
    s1:{
        fontSize:24,
        color:'white',
        marginTop:14
        
    },
    s2:{
        color:'white',
        height:25,
        width:'110%',
        backgroundColor:'#333333',
        marginTop:5,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:120
    },
    s3:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'
       
    },
    s4:{
            color:'white',
            height:30,
            width:'120%',
            backgroundColor:'white',
            marginTop:100,
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center',
            borderWidth:2,
            borderColor:'gold'
            
    },
    s5:{
        fontSize:20,
        color:'black',
        alignContent:'center',
        alignItems:'center'

    },
    s6:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        right:-18,
        fontFamily:'serif'
        
       
    },
    s7:{
        fontSize:14,
        color:'grey',
        right:-18
       
    },
    s8:{
        fontSize:15,
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
       
       
    },
    button:{
        height:40,
        width:'70%',
        backgroundColor:'#123456',
        marginBottom:870,
        marginTop:5,
        borderWidth:1,
        borderColor:'#00FF00',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center'
    },
    buttontext:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        fontFamily:'serif'
    
    },
    b2:{
        height:30,
            width:'35%',
           borderWidth:1,
            borderColor:'black',
            borderRadius:4,
            alignItems:'center',
            justifyContent:'center',
            right:62
    }
    })