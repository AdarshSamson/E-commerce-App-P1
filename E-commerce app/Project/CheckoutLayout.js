

import React from "react";
import {
  
  StyleSheet,

  View,
  Text,

  TouchableOpacity,
  Dimensions,
  
} from "react-native";




const CheckoutLayout = ({total,noofitems,navigation}) => {
 
  return (
  
         <View style={styles.mainBody}>
         <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'grey',fontWeight:'bold'}}>{`Items: ${noofitems}`}</Text>
          <Text style={{color:'green',fontWeight:'bold',fontSize:20}}>{'total: Rs '+total}</Text>
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
                      navigation.navigate('Check', {data: item});
                    }}>
                    <Text style={{color: '#fff'}}>Add to Cart</Text>
                  </TouchableOpacity>
</View> 
         </View>
      
  );
};
export default CheckoutLayout;

const styles = StyleSheet.create({
  mainBody: {
    position:'absolute',
    bottom:82,
    height:70,
    width:Dimensions.get('window').width,
    backgroundColor:'black',
    flexDirection:'row',
  },
  
});
