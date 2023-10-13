import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: '#ffff', fontSize: 32, fontWeight:"bold"  }}> Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32, marginLeft: 5  }} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24,color:"#ffff",marginBottom:20, fontWeight: 'bold',}}>Reset Password</Text>
        <TextInput placeholder='Enter your email' style={{backgroundColor:"#ffff",borderRadius: 10,fontSize: 18,width: 280,height: 50,color: 'black', textAlign:"center"}}></TextInput>
        <TouchableOpacity  style={styles.btn}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black'}}>Get email</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18,color:"#ffff",marginTop:20, width: WIDTH/1.3,}}>*A password reset mail will be sent to your registered email</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#96C291',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    width: WIDTH,
    marginLeft: 20,
  },
  mainContainer: {
    width: WIDTH,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#ffff',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
});

export default ForgotPassword;