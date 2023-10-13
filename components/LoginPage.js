import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { auth,db } from '../config/firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import {doc,setDoc} from 'firebase/firestore';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function LoginPage({ navigation }) {
  const [loginData, setLoginData] = useState({
    email: '',
    pass: ''
  });

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.pass);

      // Check if the user is signed in
      if (auth.currentUser) {
        console.log('User signed in:', auth.currentUser.email);
        navigation.navigate("Home"); // Navigate to the home screen
      } else {
        console.log('User is not signed in.');
      }
    } catch (error) {
      // Handle sign-in errors
      console.log("In catch bloack of sigin")
      try{
        await createUserWithEmailAndPassword(auth,loginData.email,loginData.pass)
        navigation.navigate("Home")
        const dataDoc=doc(db,"Users",auth?.currentUser?.email)
        await setDoc(dataDoc,{name:auth?.currentUser?.email.slice(0,10),qrcode:"",points:2500,days:50,address:"102 SmartBin Nagar"})
      console.error('Sign-in error:', error.message);
      }catch(error){
        console.log("In the login page"+error)
      }
      
    }
  };

  const handleChange = (name, value) => {
    //console.log(loginData)
    setLoginData(old => ({ ...old, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: '#ffff', fontSize: 32, fontWeight:"bold" }}>Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32, marginLeft: 5 }} />
      </View>
      <View style={styles.info}>
        <Text style={{ color: '#ffff', fontSize: 24, marginBottom: 20, fontWeight:"700", }}>User Login </Text>
        <TextInput name="email" onChangeText={(text) => handleChange('email', text)} value={loginData.email} style={styles.inputText} placeholder={`Enter UserName or email`} />
        <TextInput name="pass" onChangeText={(text) => handleChange('pass', text)} value={loginData.pass} secureTextEntry={true} style={styles.inputText} placeholder="Enter the Password" />
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Forgot")}>
          <Text style={{ textAlign: 'center', marginTop: 20, }}>Forgot password?</Text>
        </TouchableOpacity>
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
  info: {
    width: WIDTH,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    backgroundColor: '#ffff',
    borderRadius: 15,
    width: 280,
    height: 50,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#ffff',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default LoginPage;
