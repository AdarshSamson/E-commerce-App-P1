import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "./Login"
import Signin from "./Signin";
import Products from '../Redux/Products';
import Profile from './Profile'
import Setting from './Tabpages/Setting';
import Cart from '../Redux/Cart';
import DrawerContents from './DrawerContents';
import Splash from './Splash';
import Loader from '../Lottiepages/loader';
import Intro from './Intro';
import ProductDetails from './ProductDetails';
import Check from './Tabpages/Check';
import CheckoutLayout from './CheckoutLayout';



const Stack = createStackNavigator();
const BottomTab =createBottomTabNavigator();
const Drawer=createDrawerNavigator()

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'red', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold',
        justifyContent:'center', 
        alignItems:'center',
         left:80   ,
         fontFamily:'serif'              //Set Header text style
      },
    }}
      // initialRouteName="Splash"
      >
          {/* <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown:false }}
      />  
         <Stack.Screen 
        name="Intro" 
        component={Intro} 
        options={{ headerShown:false }}
      />  
      <Stack.Screen 
        name="Signin" 
        component={Signin} 
        options={{title: 'REGISTER'}}
      /> 
       <Stack.Screen 
        name="Loader" 
        component={Loader} 
        options={{ headerShown:false }}
      />      */}
      <Stack.Screen 
        name="Login" 
        component={Login} 
       
        options={{title: 'LOGIN'}}
      /> 
       <Stack.Screen 
        name="Products" 
        component={Products} 
        options=
         { {headerShown:false}}
      />
      <Stack.Screen 
        name="Cart" 
        component={Cart} 
        options=
         { {headerShown:false}}
      />
      <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetails} 
        options=
         { {headerShown:false}}
      />
       <Stack.Screen 
        name="Check" 
        component={Check} 
        options=
         { {headerShown:false}}
      />
      <Stack.Screen 
        name="CheckoutLayout" 
        component={CheckoutLayout} 
        options=
         { {headerShown:false}}
      />
            <Stack.Screen 
       name="Drawer" 
       component={MyDrawer} 
       options= { {headerShown:false}}
      />
      <Stack.Screen 
       name="bottomtab" 
       component={MyTab} 
       options= { {headerShown:false}}
      />
    </Stack.Navigator>
  )};
  function MyDrawer(){
    return(
      <Drawer.Navigator 
      drawerContent={(props)=><DrawerContents {...props}/>  } 
       screenOptions={{
        headerShown:false}}
    //     drawerType:Dimensions.width>=768?'permanent':'front',
         
    //    }} 
    >
      <Drawer.Screen 
      name='home'
      component={MyTab}
      options={{headerShown:false}}
      >
      </Drawer.Screen>
     
    </Drawer.Navigator>
    )
  }



  function MyTab() {
    return (
      <BottomTab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarLabelStyle:{fontSize:14},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'black',bottom:15,left:20,right:20,elevation:10,borderRadius:15,height:70,width:350,shadowColor:'green',shadowOffset:{width:6,height:10},shadowOpacity:0.25,shadowRadius:3.5,elevation:5,position:'absolute'}
       }}    
        >
        <BottomTab.Screen 
          name="Product" 
          component={Products} 
          options={{
                
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'grey',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="home" size={34} color='#8B0000' />:<Icon name="home" size={34} color='grey'/>
  
          
          }}       
        />   
         <BottomTab.Screen 
          name="Cart" 
          component={Cart} 
          options={{
                
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'grey',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="bag-suitcase" size={34} color='#8B0000' />:<Icon name="bag-suitcase" size={34} color='grey'/>
  
          
          }}       
        />   
              
        <BottomTab.Screen 
          name="setting" 
          component={Setting} 
           options={{headerShown:false,
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'grey',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="eye-check" size={34} color='#00FF00' />:<Icon name="eye-check" size={34} color='grey'/>
           }}
        />
                <BottomTab.Screen 
          name="Profile" 
          component={Profile} 
          options={{headerShown:false,
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'grey',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="professional-hexagon" size={34} color='#8B0000' />:<Icon name="professional-hexagon" size={34} color='grey'/>
           }}
          
        />

      </BottomTab.Navigator>
    );



}
export default function Apps() {
  return (
    <NavigationContainer>
      <MyStack />
  
    </NavigationContainer>
  )}
