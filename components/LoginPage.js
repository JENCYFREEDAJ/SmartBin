import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { auth,db } from '../config/firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import {doc,setDoc} from 'firebase/firestore'
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // This adjusts the view when the keyboard appears
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.title}>
          <Text style={{ color: 'white', fontSize: 32 }}>Smart Bin</Text>
          <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32 }} />
        </View>
        <View style={styles.info}>
          <Text style={{ color: 'white', fontSize: 24 }}>User Login </Text>
          <View style={styles.login}>
            <TextInput name="email" onChangeText={(text) => handleChange('email', text)} value={loginData.email} style={styles.text} placeholder={`Enter UserName or email`} />
            <TextInput name="pass" onChangeText={(text) => handleChange('pass', text)} value={loginData.pass} secureTextEntry={true} style={styles.text} placeholder="Enter the Password" />
            <TouchableOpacity style={styles.btn}>
              <Text onPress={()=>navigation.navigate("Home")}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text onPress={()=>navigation.navigate("Forgot")} style={{ textAlign: 'center', margin: 8 }}>Forgot password?</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C291',
  },
  info: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 9,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 2,
  },
  text: {
    padding: 6,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 12,
    width: 286,
    height: 51,
    textAlign: 'center',
  },
  btn: {
    padding: 5,
    backgroundColor: 'white',
    width: 106,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default LoginPage;
