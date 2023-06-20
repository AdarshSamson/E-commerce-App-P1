import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Dimensions
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from './action/Actions';



const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeitem = (index) => {
    dispatch(removeItemFromCart(index));
  };
const getTotal=()=>{
  let total=0;
items.map(item=>{
  total=total+item.price
})
return total.toFixed(0)
}


  return (
    <SafeAreaView style={{flex: 1}}>
       <ImageBackground  
          style={{flex:1}}
          source={{uri:'https://img.freepik.com/premium-photo/red-black-background-with-black-background-white-dot-that-says-red_670382-1192.jpg'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              height: 29,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20,fontFamily:'serif',color:'orange'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item,index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 160,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: index == index.length - 1 ? 20 : 0,
                  marginTop: 10,
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  elevation:9,
                  shadowOpacity:97,
                  shadowOffset:17,
                  shadowRadius:17,
                  shadowColor:'#FF5F1F',
                  
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text style={{fontWeight:'bold',fontSize:16,fontFamily:'serif',color:'#2B1B17'}}>{item.title.length>20?
                  item.title.substring(0,20)+'...':item.title}</Text>
                  <Text style={{fontSize: 20, fontWeight: '600',color:'#f0f'}}>
                    RS {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'red',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      removeitem(index);
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 100,
                    height: 130,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                />
                
              </View>
            );
          }}
          
        />
          {items.length < 1 && (
        <View style={{ width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
        bottom:203,
        }}>
          <Text style={{fontSize:22,color:'white'}}>No Items in Cart</Text>
        </View>
      )}
        
        <View style={{
    position:'absolute',
    bottom:82,
    height:70,
    width:Dimensions.get('window').width,
    backgroundColor:'black',
    flexDirection:'row',}}>
         <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'grey',fontWeight:'bold'}}>{`Items: ${items.length}`}</Text>
          <Text style={{color:'green',fontWeight:'bold',fontSize:20}}>{'total: Rs '+getTotal()}</Text>
 </View>
<View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}> 
<TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'green',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      navigation.navigate('Check');
                    }}>
                    <Text style={{color: '#fff'}}>Checkout</Text>
                  </TouchableOpacity>
</View> 
         </View>
       
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Cart;
