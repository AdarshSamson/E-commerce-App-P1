import {
    View,
    Text,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  
  const Seachh = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const [oldData, setOldData] = useState([]);//
    const [selectedFilter, setSelectedFilter] = useState(0);
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(response => {
          console.log(response);
          setData(response);
          setOldData(response);
        });
    }, []);
    const searchFilterFunction = text => {
      // Check if searched text is not blank
      if (text !== '') {
        let tempData = data.filter(item => {
          return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(oldData);
      }
    };
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 70,
            marginTop: 20,
  
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 10,
              borderWidth: 0.2,
  
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              source={require('./assets/bag.png')}
              style={{width: 24, height: 24, marginLeft: 15, opacity: 0.5}}
            />
            <TextInput
              ref={searchRef}
              placeholder="search item here..."
              style={{width: '76%', height: 50}}
              value={search}
              onChangeText={txt => {
                searchFilterFunction(txt);
                setSearch(txt);
              }}
            />
            {search == '' ? null : (
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => {
                  searchRef.current.clear();
                  searchFilterFunction('');
                  setSearch('');
                }}>
                <Image
                  source={require('./assets/bag.png')}
                  style={{width: 16, height: 16, opacity: 0.5}}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              marginRight: 15,
            }}
            onPress={() => {
              setVisible(true);
            }}>
            <Image
              source={require('./assets/bag.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
  
                  borderRadius: 10,
                  borderWidth: 0.5,
                  alignSelf: 'center',
                  marginTop: 20,
                  marginBottom: index == data.length - 1 ? 20 : 0,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 60,
                    height: '90%',
                    marginLeft: 10,
                    borderRadius: 10,
                  }}
                />
                <View style={{width: '80%'}}>
                  <Text
                    style={{fontWeight: '600', marginLeft: 10, marginTop: 10}}>
                    {item.title.substring(0, 30)}
                  </Text>
                  <Text style={{fontSize: 12, margin: 10}}>
                    {item.description.substring(0, 50)}
                  </Text>
  
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 10,
                        fontWeight: '800',
                        color: 'green',
                      }}>
                      {'$ ' + item.price}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginLeft: 50,
                        fontWeight: '800',
                        color: 'orange',
                      }}>
                      {item.rating.rate}
                    </Text>
                    <Image
                      source={require('./assets/bag.png')}
                      style={{width: 12, height: 12, marginLeft: 5}}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,.5)',
            }}>
            <View
              style={{
                width: '80%',
                height: 200,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(1);
                  const strAscending = data.sort((a, b) =>
                    a.title > b.title ? 1 : -1,
                  );
                  setData(strAscending);
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}> Sort By Name</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(2);
                  setData(data.sort((a, b) => a.price - b.price));
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Low to High Price
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(3);
                  setData(data.sort((a, b) => b.price - a.price));
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Hight to Low Price
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(4);
                  setData(data.sort((a, b) => a.rating.rate - b.rating.rate));
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}> Sort By Rating</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default Seachh;


//   import {
//     View,
//     Text,
//     SafeAreaView,
//     TouchableOpacity,
//     Image,
//     FlatList,
//     ImageBackground,
//     TextInput
//   } from 'react-native';
//   import React ,{useState,useEffect,useRef} from 'react';
//   import {useNavigation} from '@react-navigation/native';
//   import {useDispatch, useSelector} from 'react-redux';
//   import {addItemToCart} from './action/Actions';
//   import Icon from 'react-native-vector-icons/MaterialIcons';
  
  
//   const data = [
//     {
//       name: 'Nike Dunk High Retro',
//       price: 'INR 10,295',
//       image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e21308e2-6662-46ba-83c2-33a8e53503b7/dunk-high-retro-shoes-3wKvCt.png',
//     },
//     {
//       name: 'Nike Dunk High Premium',
//       price: 'INR 11,995',
//       image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/19ec6cd8-84ff-4439-9e2f-1d633d7c1743/dunk-high-shoes-4TXtvT.png',
//     },
//     {
//       name: 'Nike Air More Uptempo 96',
//       price: 'INR 14,995',
//       image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a7fad3a2-f51d-4004-8349-f95f3538d756/air-more-uptempo-96-shoes-f5stNg.png',
//     },
//     {
//       name: 'Nike Blazer Mid 77 Premium',
//       price: 'INR 9,695',
//       image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f75474b9-1b5a-4e90-bbf4-468706655042/blazer-mid-77-shoes-3Jpkm6.png',
//     },
//     {
//       name: 'fila',
//       price: 'INR 1400',
//       image:  'https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.2x.rsquare.w600.jpg',
//     },
//     {
//       name: 'shoes 6',
//       price: 'INR 700',
//       image: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
//     },
//     {
//       name: 'shoes 7',
//       price: 'INR 800',
//       image: 'https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4=',
//     },
//     {
//       name: 'shoes 8',
//       price: 'INR 2000',
//       image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B192_004_SR_RT_GLBnw.jpg',
//     },
//   ];
//   const Products = () => {
//     const [myData, setMyData] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState('');
//     const searchRef = useRef();
//     // const [oldData, setOldData] = useState([]);
//     const [selectedFilter, setSelectedFilter] = useState(0);
  
//     const getUserData =  () => {
      
//       fetch('https://fakestoreapi.com/products')
//         .then(res=>res.json())
//         .then(json=>{
//             // console.log(json)
//             setMyData(json)
//             setData(json)
//         })
        
//     };
    
//     useEffect(() => getUserData(), []);
//     const searchFilterFunction = text => {
//       // Check if searched text is not blank
//       if (text !== '') {
//         let tempData = data.filter(item => {
//           return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
//         });
//         setData(tempData);
//       } else {
//         setData(myData);
//       }
//     };
    
//     const navigation = useNavigation();
  
//     const dispatch = useDispatch();
  
//     const addItem = (item) => {
//       dispatch(addItemToCart(item));
//     };
  
//     const items = useSelector(state => state);
//     let addedItems = [];
//     addedItems = items;
  
  
  
    
  
//     return (
//       <SafeAreaView style={{flex: 1}}>
//           <ImageBackground  
//             style={{flex:1}}
//             source={{uri:'https://img.freepik.com/premium-photo/red-black-background-with-black-background-white-dot-that-says-red_670382-1192.jpg'}}>
//         <View style={{flex: 1}}>
//           <View
//             style={{
//               width: '100%',
//               height: 70,
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//             }}>
//             <Text style={{fontSize: 13, marginLeft: 24, fontWeight: '800',fontFamily:'serif',color:'orange',bottom:19,left:-12}}>
//               TREND-SHOPPING
//             </Text> 
//             <View style={{ alignItems:'center',
//       justifyContent:'center',
//       marginVertical: 10,
//       bottom:5}}>
//           <View style={{ width:'80%',
//       flexDirection:'row',
//       elevation:3,
//       borderRadius:5,
//       bottom:-20,
//       left:-90}}>
//         <TouchableOpacity 
//         >
//             <Icon name='search' style={{ color : 'gray',
//       marginLeft : 18,
//       marginTop:11,}} size={25} /></TouchableOpacity>
//             <TextInput
            
             
  
  
//             name="search" placeholder="Search for a service" style={{ width:'80%',
//       height:38,
//       backgroundColor:'#fff',
//       paddingLeft:12,
//       borderRadius:5,
//       marginTop:5,
//       marginBottom:5,
//      }} />
//           </View>
          
//         </View>
//             <TouchableOpacity
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderRadius: 25,
//                 backgroundColor: 'orange',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'row',
//                 marginRight: 20,
//                 right:103,
//                 bottom:8
                
//               }}
//               onPress={() => {
//                 navigation.navigate('Cart');
//               }}>
//               <Image
//                 source={require('../assets/bag.png')}
//                 style={{width: 31, height: 33}}
//               />
//               <Text style={{marginLeft: -4, fontSize: 20, fontWeight: '800',color:'red',bottom:12}}>
//                 {addedItems.length}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <FlatList
//             data={myData}
//             renderItem={({item}) => {
//               return (
//                 <TouchableOpacity
//                 activeOpacity={1}
//                 onPress={() => {
//                   navigation.navigate('ProductDetails', {data: item});
//                 }}>
//                 <View
                
//                   style={{
//                     width: '90%',
//                     height: 160,
//                     borderRadius: 15,
//                     alignSelf: 'center',
//                     marginTop: 10,
//                     borderWidth: 0.2,
//                     borderColor: '#8e8e8e',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between', 
//                     alignItems: 'center',
//                     backgroundColor: '#fff',
//                     elevation:9,
//                     shadowOpacity:97,
//                     shadowOffset:17,
//                     shadowRadius:17,
//                     shadowColor:'#FF5F1F'
//                   }}>
//                   <View style={{width: '60%', padding: 20,left:141}}>
//                     <Text style={{fontWeight:'bold',fontSize:16,fontFamily:'serif',color:'#2B1B17'}}>{item.title.length>20?
//                     item.title.substring(0,20)+'...':item.title}</Text>
//                     <Text style={{fontSize: 18, fontWeight: 'bold',color:'#f0f'}}>
//                      Rs. {item.price}
//                     </Text>
//                     <TouchableOpacity
//                       style={{
//                         height: 30,
//                         borderRadius: 10,
//                         width: 100,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         backgroundColor: 'green',
//                         marginTop: 5,
//                       }}
//                       onPress={() => {
//                         addItem(item);
//                       }}>
//                       <Text style={{color: '#fff'}}>Add to Cart</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <Image
//                     source={{uri: item.image}}
//                     style={{
//                       width: 120,
//                       height: 160,
//                       borderRadius: 10,
//                       marginRight: 15,
//                       right:210
//                     }}
//                   />
                  
//                 </View>
//                 </TouchableOpacity>
//               );
//             }}
//           />
  
//         </View>
//         </ImageBackground>
//       </SafeAreaView>
//     );
//   };
  
//   export default Products;
  
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// //   import Header from '../common/Header';
// import { addItemToCart } from '../../Redux/action/Actions';
// import { removeItemFromCart } from '../../Redux/action/Actions';

// import RazorpayCheckout from 'react-native-razorpay';

// import {useDispatch, useSelector} from 'react-redux';
// import { TextInput } from 'react-native-gesture-handler';


// const Check = ({navigation}) => {
//   const [selectedMethod, setSelectedMethod] = useState(0);
//   const [qty, setQty] = useState(1);

 
// const items = useSelector(state => state);
// const dispatch = useDispatch();
// const removeitem = (index) => {
//   dispatch(removeItemFromCart(index));
// };
// const getTotal=()=>{
// let total=0;
// items.map(item=>{
// total=total+item.price
// })
// return total.toFixed(0)
// }
 

//   const orderPlace = paymentId => {
//     // const day = new Date().getDate();
//     // const month = new Date().getMonth() + 1;
//     // const year = new Date().getFullYear();
//     // const hours = new Date().getHours();
//     // const minutes = new Date().getMinutes();
//     // let ampm = '';
//     // if (hours > 12) {
//     //   ampm = 'pm';
//     // } else {
//     //   ampm = 'am';
//     // } 
    
    
//     const data = {
//       items: items,
//       amount: '$' + getTotal(),
//       // address: selectedAddress,
//       paymentId: paymentId,
//       paymentStatus: selectedMethod == 3 ? 'Pending' : 'Success',
//       createdAt:
//         day +
//         '/' +
//         month +
//         '/' +
//         year +
//         ' ' +
//         hours +
//         ':' +
//         minutes +
//         ' ' +
//         ampm,
//     };
//     // removeitem();
//     // dispatch(data)
//     // dispatch(removeItemFromCart(index(data)));
//     navigation.navigate('Drawer');
   
    
    
//   };
//   const payNow = () => {if ( selectedMethod == 3) {
//     return alert('pending') , navigation.navigate('Drawer'), removeitem(items)
    
//   }
//   else
//     var options = {
//       description: 'Credits towards consultation',
//       image: 'https://i.imgur.com/3g7nmJC.png',
//       currency: 'INR',
//       key: 'rzp_test_CXo5HbmQ83IYL0', // Your api key
//       amount: getTotal() * 100,
//       name: 'foo',
//       prefill: {
//         email: 'void@razorpay.com',
//         contact: '9191919191',
//         name: 'Razorpay Software',
//       },
//       theme: {color: '#3E8BFF'},
//     };
//     RazorpayCheckout.open(options)
//       .then(data => {
       
        
//         alert(`Success: ${data.razorpay_payment_id}`);
//         navigation.navigate('Drawer')
//         // removeitem(index)


//         // orderPlace(data.razorpay_payment_id);
        
       
//       })
//       // .catch((error) => {
//       //   alert(`Error: ${error.code} | ${error.description}`);
//       // });
//   };
//   return (
  
//       <ScrollView>
//         <Text style={styles.title}>Added Items</Text>
//         <View>
//           <FlatList
//             data={items}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item, index}) => {
//               return (
//                 <TouchableOpacity
//                   activeOpacity={1}
                  
//                   style={styles.productItem}
//                   onPress={() => {
//                     navigation.navigate('ProductDetails', {data: item});
//                   }}>
//                   <Image source={{uri: item.image}} style={styles.itemImage} />
//                   <View>
//                     <Text style={styles.name}>
//                       {item.title.length > 25
//                         ? item.title.substring(0, 25) + '...'
//                         : item.title}
//                     </Text>
//                     <Text style={styles.desc}>
//                       {item.description.length > 30
//                         ? item.description.substring(0, 30) + '...'
//                         : item.description}
//                     </Text>
//                     <View style={styles.qtyview}>
//                       <Text style={styles.price}>{'Rs.' + item.price}</Text>
//                       <TouchableOpacity
//                         style={styles.btn}
//                         onPress={() => {
//                           if (item.qty > 1) {
//                             setQty(qty-1)
//                             dispatch(reduceItemFromCart(item));
//                           } else {
//                             dispatch(removeItemFromCart(index));
//                           }
//                         }}>
//                         <Text style={{fontSize: 11, fontWeight: '600',color:'red'}}>remove</Text>
//                       </TouchableOpacity>
//                       <Text style={styles.qty}>{item.qty}</Text>
//                       {/* <TouchableOpacity
//                         style={styles.btn}
//                         onPress={() => {
//                           setQty(qty+1)
//                           dispatch(addItemToCart(item));
//                         }}>
//                         <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
//                       </TouchableOpacity> */}
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               );
//             }}
//           />
//         </View>
        
//         <View style={styles.totalView}>
//           <Text style={styles.title}>Total-</Text>
//           <Text style={[styles.title, {marginRight: 20,color:'red'}]}>
//             {'Rs.' + getTotal()}
//           </Text>
          
//         </View>
//         <View style={styles.addressView}>
//           <Text style={styles.title}>Address</Text>
//           <TextInput style={{ borderRadius:12,borderColor:'black',borderWidth:1,top:52,right:102,height:42,width:255,marginTop:11}}
//           placeholder='enter here'
//           >
            
//           </TextInput>
        
//         </View>
//         <Text style={styles.title}>Select Payment Mode</Text>
//         <TouchableOpacity
//           style={styles.paymentMethods}
//           onPress={() => {
//             setSelectedMethod(0);
//           }}>
//           <Image
//             source={
//               selectedMethod == 0
//               ? require('../../assets/radio-button-icon-11.jpg')
//               : require('../../assets/radio-button-icon-11.jpg')
//             }
//             style={[
//               styles.img,
//               {tintColor: selectedMethod == 0 ? 'orange' : 'black'},
//             ]}
//           />
//           <Text style={styles.paymentMethdodsTxt}>Credit Card</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.paymentMethods}
//           onPress={() => {
//             setSelectedMethod(1);
//           }}>
//           <Image
//             source={
//               selectedMethod == 1
//               ? require('../../assets/radio-button-icon-11.jpg')
//                 : require('../../assets/radio-button-icon-11.jpg')
//             }
//             style={[
//               styles.img,
//               {tintColor: selectedMethod == 1 ? 'orange' : 'black'},
//             ]}
//           />
//           <Text style={styles.paymentMethdodsTxt}>Debit Card</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.paymentMethods}
//           onPress={() => {
//             setSelectedMethod(2);
//           }}>
//           <Image
//             source={
//               selectedMethod == 2
//               ? require('../../assets/radio-button-icon-11.jpg')
//                 : require('../../assets/radio-button-icon-11.jpg')
//             }
//             style={[
//               styles.img,
//               {tintColor: selectedMethod == 2 ? 'orange' : 'black'},
//             ]}
//           />
//           <Text style={styles.paymentMethdodsTxt}>UPI</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.paymentMethods}
//           onPress={() => {
//             setSelectedMethod(3);
//           }}>
//           <Image
//             source={
//               selectedMethod == 3
//               ? require('../../assets/radio-button-icon-11.jpg')
//               : require('../../assets/radio-button-icon-11.jpg')
//             }
//             style={[
//               styles.img,
//               {tintColor: selectedMethod == 3 ? 'orange' : 'black'},
//             ]}
//           />
//           <Text style={styles.paymentMethdodsTxt}>Cash on Delivery</Text>
//         </TouchableOpacity>


//     <TouchableOpacity
//     onPress={()=>{
//        payNow();
//     }}
//     > 
//     <Text style={{fontSize:22,color:'green',fontWeight:'bold',right:-142,marginTop:52,marginBottom:1,justifyContent:'center',alignItems:'center'}}>Checkout </Text>
//     </TouchableOpacity>
//       </ScrollView>
   
//   );
// };

// export default Check;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     marginLeft: 20,
//     marginTop: 34,
//     color: '#000',
//   },
//   productItem: {
//     width: Dimensions.get('window').width,
//     height: 100,
//     marginTop: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     flexDirection: 'row',
    
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginLeft: 20,
//   },
//   desc: {
//     marginLeft: 20,
//   },
//   price: {
//     color: 'green',
//     fontSize: 18,
//     fontWeight: '600',
//     marginLeft: 20,
//     marginTop: 5,
//   },
//   qtyview: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   btn: {
//     padding: 5,
//   width: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginLeft: 10,
//   },
//   qty: {
//     marginLeft: 10,
//     fontSize: 18,
//   },
//   noItems: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   totalView: {
//     width: '100%',
//     justifyContent: 'space-between',

//     flexDirection: 'row',
//     height: 70,
//     alignItems: 'center',
//     borderBottomWidth: 0.3,
//     borderBottomColor: '#B7B7B7',
//   },
//   paymentMethods: {
//     flexDirection: 'row',
//     width: '90%',
//     marginTop: 20,
//     paddingLeft: 20,
//   },
//   img: {
//     width: 24,
//     height: 24,
//   },
//   paymentMethdodsTxt: {
//     marginLeft: 15,
//     fontSize: 16,
//     color: '#000',
//   },
//   addressView: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingLeft: 0,
//     paddingRight: 20,
//     marginBottom:25,
//     marginTop:-21
//   },
// });