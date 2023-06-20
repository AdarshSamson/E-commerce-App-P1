import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import {useNavigation, useRoute} from '@react-navigation/native';

  import {useDispatch} from 'react-redux';
  
 

  
  const ProductDetails = () => {
    
    const route = useRoute();
    const dispatch = useDispatch();
    
  
  
    return (
      <View style={styles.container}>
      
          {/* leftIcon={require('../images/back.png')}
          rightIcon={require('../images/cart.png')} */}
          {/* title={'Product Detail'}
          onClickLeftIcon={() => {
            navigation.goBack();
          }}
          isCart={true}
        */}
        <ScrollView>
          <Image source={{uri: route.params.data.image}} style={styles.banner} />
          <Text style={styles.title}>{route.params.data.title}</Text>
          <Text style={{fontFamily:'serif',fontSize:16,color:'red',fontWeight:'bold',top:33,left:18}}>DESCRIPTION
          </Text>
          <Text style={styles.desc}>
          {route.params.data.description}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.price, {color: '#000'}]}>{'Price:'}</Text>
            <Text style={styles.price}>{' $' + route.params.data.price}</Text>
            <View style={styles.qtyView}>
              {/* <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
              </TouchableOpacity> */}
              {/* <Text style={styles.qty}>{qty}</Text> */}
              {/* <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setQty(qty + 1);
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <TouchableOpacity
            style={styles.wishlistBtn}
            // onPress={() => {
            //   if (checkUserStatus()) {
            //     dispatch(addItemToWishList(route.params.data));
            //   } else {
            //     setModalVisible(true);
            //   }
            // }
            // }
            >
            {/* <Image
              source={require('../images/wishlist.png')}
              style={styles.icon}
            /> */}
          </TouchableOpacity>
{/*   
          <CustomButton
            bg={'#FF9A0C'}
            title={'Add To Cart'}
            color={'#fff'}
            onClick={() => {
              if (checkUserStatus()) {
                dispatch(
                  addItemToCart({
                    category: route.params.data.category,
                    description: route.params.data.description,
                    id: route.params.data.id,
                    image: route.params.data.image,
                    price: route.params.data.price,
                    qty: qty,
                    rating: route.params.data.rating,
                    title: route.params.data.title,
                  }),
                );
              } else {
                setModalVisible(true);
              }
            }}
          /> */}
        </ScrollView>
        {/* <AskForLoginModal
          modalVisible={modalVisible}
          onClickLogin={() => {
            setModalVisible(false);
            navigation.navigate('Login');
          }}
          onClose={() => {
            setModalVisible(false);
          }}
          onClickSignup={() => {
            setModalVisible(false);
            navigation.navigate('Signup');
          }}
        /> */}
      </View>
    );
  };
  
  export default ProductDetails;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    banner: {
      width: '100%',
      height: 400,
      resizeMode: 'center',
    },
    title: {
      fontSize: 23,
      color: '#000',
      fontFamily:'serif',
      fontWeight: '600',
      marginLeft: 20,
      marginTop: 20,
      bottom:-23
    },
    desc: {
      fontSize: 16,
       fontWeight:'500',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      top:25
    },
    price: {
      color: 'green',
      marginLeft: 20,
      marginTop: 70,
      fontSize: 20,
      fontWeight: '800',
     
    },
  
    icon: {
      width: 24,
      height: 24,
    },
    qtyView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 20,
    },
    btn: {
      padding: 5,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderRadius: 10,
      marginLeft: 10,
    },
    qty: {
      marginLeft: 10,
      fontSize: 18,
    },})