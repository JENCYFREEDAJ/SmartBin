import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

function Quantity(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#96C291"}}>
        <View style={{flex:1/8,flexDirection:'row',padding:24,margin:24,justifyContent:"center"}}>
            <Text style={{fontSize:32,color:'white'}}>Smart Bin</Text>
            <Image style={{width:32,height:32}} source={require('../assets/TrashLogo.png')}/>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
            <View style={{borderRadius:12,margin:5,padding:10,widht:240,height:200,backgroundColor:'white'}}>
                <Text>Plastic Waste</Text>
            </View>
            <View style={{borderRadius:12,margin:5,padding:10,widht:240,height:200,backgroundColor:'white'}}>
                <Text>Organic Waste</Text>
            </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Quantity;
