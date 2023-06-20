import React,{Component} from "react";
import { View,Text,StyleSheet ,Button,count} from "react-native";
import { Connect } from "react-redux";


export default class Redux1 extends React.Component{
    state={count : 0 };
    decrementCount(){
        let {count} = this.state;
        count--
        this.setState({count})
    }
    incrementCount(){
        let {count} = this.state;
        count++
        this.setState({count})
    }

    render(){
        const {count}=this.state
        return(
            <View style={styles.container}>
                <Button
                title='increment'
                onPress={()=>this.incrementCount()}
                />
                 <Text >
               {count}
            </Text>
            <Button
                title='decrement'
                onPress={()=>this.decrementCount()}
                />

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
  profiletext:{
      fontSize:24,
      fontWeight:'bold',
      color:'black'
  }  
})