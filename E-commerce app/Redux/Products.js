import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  Modal,
  RefreshControl
} from 'react-native';
import React ,{useState,useEffect,useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './action/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "../Fireabse/firebase";




const data1 = [
  {
    id: 1,
    name: 'Nike Dunk High Retro',
    price: 'INR 10,295',
    description:'jj',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e21308e2-6662-46ba-83c2-33a8e53503b7/dunk-high-retro-shoes-3wKvCt.png',
  },
  {
    id: 2,
    name: 'Nike Dunk High Premium',
    price: 'INR 11,995',
    description:'jj',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/19ec6cd8-84ff-4439-9e2f-1d633d7c1743/dunk-high-shoes-4TXtvT.png',
  },
  {
    id: 3,
    name: 'Nike Air More Uptempo 96',
    price: 'INR 14,995',
    description:'jj',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a7fad3a2-f51d-4004-8349-f95f3538d756/air-more-uptempo-96-shoes-f5stNg.png',
  },
  {
    id: 4,
    name: 'Nike Blazer Mid 77 Premium',
    price: 'INR 9,695',
    description:'jj',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f75474b9-1b5a-4e90-bbf4-468706655042/blazer-mid-77-shoes-3Jpkm6.png',
  },
  {
    id: 5,
    name: 'fila',
    price: 'INR 1400',
    description:'jj',
    image:  'https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.2x.rsquare.w600.jpg',
  },
  {
    id: 6,
    name: 'shoes 6',
    price: 'INR 700',
    description:'jj',
    image: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
  },
  {
    id: 7,
    name: 'shoes 7',
    price: 'INR 800',
    description:'jj',
    image: 'https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4=',
  },
  {
    id: 8,
    name: 'shoes 8',
    price: 'INR 2000',
    description:'jj',
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B192_004_SR_RT_GLBnw.jpg',
  },
];

const Products = () => {
  console.log(firebase);
  const [item, setItems] = useState([]);
  const [myData, setMyData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  // const [oldData, setOldData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);
 console.log(firebase);

 const [isLoading, setIsLoading] = useState(false);
 const [isMoreLoading, setIsMoreLoading] = useState(false);
 const [lastDoc, setLastDoc] = useState(null);
 const [restaurants, setRestaurants] = useState([]);
 const restaurantsRef = firestore().collection('shop');
 const [restaurantss, setRestaurantss] = useState([]);


  useEffect(() => {
    getRestaurants();
  }, []);

const getRestaurants = async () => {
    setIsLoading(true);

    const snapshot = await restaurantsRef.orderBy('id').get();

    if (!snapshot.empty) {
      let newRestaurants = [];

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for (let i = 0; i < snapshot.docs.length; i++) {
        newRestaurants.push(snapshot.docs[i].data());
      }

      setRestaurants(newRestaurants);
      setRestaurantss(newRestaurants);
    } else {
      setLastDoc(null);
    }

    setIsLoading(false);
  }


 
  
  
    

  // const getUserData =  () => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res=>res.json())
  //     .then(json=>{
  //         // console.log(json)
  //         setMyData(json)
  //         setData(json)
  //     })
      
  // };
  
  // useEffect(() => getUserData(), []);
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text !== '') {
    
      let tempData = restaurants.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setRestaurants(tempData);
    } else {
     setRestaurants(restaurantss);
    }
  };
  
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addItemToCart(item));
  };

  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;



  

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
            style={{marginLeft:-20,left:22}}
            onPress={()=>{
              navigation.openDrawer()
            }}
            >
            <Text style={{fontSize: 23, marginLeft: 1, fontWeight: '800',fontFamily:'serif',color:'black',bottom:25,left:5}}>
            : :
          </Text> 
            </TouchableOpacity>
          <Text style={{fontSize: 13, marginLeft: 24, fontWeight: '800',fontFamily:'serif',color:'orange',bottom:22,left:12}}>
            TREND-SHOPPING
          </Text> 
          <View style={{ alignItems:'center',
    justifyContent:'center',
    marginVertical: 10,
    bottom:-7,
    right:25}}>
        <View style={{ width:'80%',
    flexDirection:'row',
    elevation:3,
    borderRadius:5,
    bottom:-20,
    left:-90}}>
      <TouchableOpacity 
      >
          <Icon name='search' style={{ color : 'gray',
    marginLeft : 18,
    marginTop:11,
    color:'orange'}} size={25} /></TouchableOpacity>
          <TextInput
          ref={searchRef}
          placeholder="search item here..."
          value={search}
          onChangeText={txt => {
            searchFilterFunction(txt);
            setSearch(txt);
          }}
 style={{ width:'80%',
    height:38,
    backgroundColor:'#fff',
    paddingLeft:12,
    borderRadius:5,
    marginTop:5,
    marginBottom:5,
   }} /> 
    {search == '' ? null : (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => {
        searchRef.current.clear();
        searchFilterFunction('');
        setSearch('');
        
          
        
      }}>
      <Image
        source={require('../assets/download.png')}
        style={{width: 34, height: 34,right:40,top:7}}
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
    source={require('../assets/pil.png')}
    style={{width: 24, height: 24,left:52,bottom:18}}
  />
</TouchableOpacity>
        
      </View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 20,
              right:105,
              bottom:8
              
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../assets/bag.png')}
              style={{width: 31, height: 33}}
            />
            <Text style={{marginLeft: -4, fontSize: 20, fontWeight: '800',color:'red',bottom:12}}>
              {addedItems.length}
            </Text>
          </TouchableOpacity>
        </View>
         <View>
          
         </View>
        
        <FlatList
          data={restaurants}
          keyExtractor={item => item.id.toString()}
          renderItem={({item,index}) => {
            return (
              <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('ProductDetails', {data: item});
              }}>

              <View
              
                style={{
                  width: '90%',
                  height: 150,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: index == data.length - 1 ? 20 : 0,
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  elevation:11,
                  shadowOpacity:97,
                  shadowOffset:17,
                  shadowRadius:17,
                  shadowColor:'orange',
                  
                  marginBottom:5,
                  
                 
                }}>
                 
                <View style={{width: '60%', padding: 20,left:141}}>
                  <Text style={{fontWeight:'bold',fontSize:16,fontFamily:'serif',color:'#2B1B17'}}>{item.title.length>20?
                  item.title.substring(0,20)+'...':item.title}</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold',color:'#f0f'}}>
                   Rs. {item.price}
                  </Text>
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
                      addItem(item);
                    }}>
                    <Text style={{color: '#fff'}}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 140,
                    height: 120,
                    borderRadius: 10,
                    marginRight: 15,
                    right:210,
                    resizeMode:'contain'
                  }}
                />
                
              </View>
              </TouchableOpacity>
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
                  const strAscending = restaurants.sort((a, b) =>
                    a.title > b.title ? 1 : -1,
                  );
                  setRestaurants(strAscending);
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
                  setRestaurants(restaurants.sort((a, b) => a.price - b.price));
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
                  setRestaurants(restaurants.sort((a, b) => b.price - a.price));
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
                  setRestaurants(restaurants.sort((a, b) => a.rating.rate - b.rating.rate));
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}> Sort By Rating</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Products;
