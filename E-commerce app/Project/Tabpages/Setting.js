import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
//   import Header from '../common/Header';
  import { addItemToCart } from '../../Redux/action/Actions';
  import { removeItemFromCart } from '../../Redux/action/Actions';
  import RazorpayCheckout from 'react-native-razorpay';
  
  import {useDispatch, useSelector} from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';


  const Settings = ({navigation}) => {
    const [selectedMethod, setSelectedMethod] = useState(0);
    const [qty, setQty] = useState(1);

   
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
    
        <ScrollView>
          <Text style={styles.title}>Added Items</Text>
          <View>
            <FlatList
              data={items}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    
                    style={styles.productItem}
                    onPress={() => {
                      navigation.navigate('ProductDetails', {data: item});
                    }}>
                    <Image source={{uri: item.image}} style={styles.itemImage} />
                    <View>
                      <Text style={styles.name}>
                        {item.title.length > 25
                          ? item.title.substring(0, 25) + '...'
                          : item.title}
                      </Text>
                      <Text style={styles.desc}>
                        {item.description.length > 30
                          ? item.description.substring(0, 30) + '...'
                          : item.description}
                      </Text>
                      <View style={styles.qtyview}>
                        <Text style={styles.price}>{'Rs.' + item.price}</Text>
                        <TouchableOpacity
                          style={styles.btn}
                          onPress={() => {
                            if (item.qty > 1) {
                              setQty(qty-1)
                              dispatch(reduceItemFromCart(item));
                            } else {
                              dispatch(removeItemFromCart(index));
                            }
                          }}>
                          <Text style={{fontSize: 11, fontWeight: '600',color:'red'}}>remove</Text>
                        </TouchableOpacity>
                        <Text style={styles.qty}>{item.qty}</Text>

                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          
          <View style={styles.totalView}>
            <Text style={styles.title}>Total-</Text>
            <Text style={[styles.title, {marginRight: 20,color:'red'}]}>
              {'Rs.' + getTotal()}
            </Text>
            
          </View>
        </ScrollView>
     
    );
  };
  
  export default Settings;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 28,
      marginLeft: 20,
      marginTop: 34,
      color: '#000',
    },
    productItem: {
      width: Dimensions.get('window').width,
      height: 100,
      marginTop: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    itemImage: {
      width: 100,
      height: 100,
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 20,
    },
    desc: {
      marginLeft: 20,
    },
    price: {
      color: 'green',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 20,
      marginTop: 5,
    },
    qtyview: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    btn: {
      padding: 5,
    width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 10,
    },
    qty: {
      marginLeft: 10,
      fontSize: 18,
    },
    noItems: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    totalView: {
      width: '100%',
      justifyContent: 'space-between',
  
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
      borderBottomWidth: 0.3,
      borderBottomColor: '#B7B7B7',
    },
    paymentMethods: {
      flexDirection: 'row',
      width: '90%',
      marginTop: 20,
      paddingLeft: 20,
    },
    img: {
      width: 24,
      height: 24,
    },
    paymentMethdodsTxt: {
      marginLeft: 15,
      fontSize: 16,
      color: '#000',
    },
    addressView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 0,
      paddingRight: 20,
      marginBottom:25,
      marginTop:-21
    },
  });