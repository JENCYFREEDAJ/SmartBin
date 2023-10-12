import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

function ForgotPassword() {
  return (
    <View style={[styles.container,{flex:1, justifyContent: "flex-start", alignItems:"flex-start",padding:20} ]}>
      <View style={{flex:1/2,flexDirection:"row"}}>
        <Text style={{ color: 'white', fontSize: 25,  }}> Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32 }} />
      </View>
      <View style={{flexDirection:"column",alignItems:"center",}}>
        <Text style={{fontSize: 24,color:"white",paddingBottom:20}}>Reset Password</Text>
        <Text style={{fontSize: 18,color:"white",paddingBottom:20}}>A password reset mail will be sent to your registered email</Text>
        <Text style={{fontSize: 18,color:"white",paddingBottom:20,}}>Enter your email below</Text>
        <TextInput style={{backgroundColor:"white",borderRadius: 10,fontSize: 18,width: 286,height: 51,color: 'black'}}></TextInput>

      <TouchableOpacity style={{paddingTop:20}} >
        <Text style={styles.btn} >Get email</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
    backgroundColor: '#96C291',
  },
  btn: {
    color: 'black',
    backgroundColor: 'white',
    width: 286,
    height: 51,
    padding: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 3,
    borderRadius: 100 / 2,
    fontSize: 18,
  },
  titleContent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 40,
    margin: 6,
  },
});

export default ForgotPassword;