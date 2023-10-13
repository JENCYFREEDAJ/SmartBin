import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function LoginPageDecider({ navigation }) {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [positionAnim, setPositionAnim] = useState(new Animated.Value(100));

  useEffect(() => {
    // Start the fade-in and position animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(positionAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function navigateToLogin(person) {
    if (person === 'user') navigation.navigate('Login');
    else console.log("admin side")
  }

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Animated.View style={{ ...styles.titleContent, transform: [{ translateY: positionAnim }] }}>
        <Text style={{ color: '#ffff', fontSize: 25, fontWeight:"bold", paddingTop: 5, }}>Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32, marginLeft: 5, }} />
      </Animated.View>
      <TouchableOpacity onPress={() => navigateToLogin('admin')}>
        <Text style={styles.btn}>Admin Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToLogin('user')}>
        <Text style={styles.btn}>User Login</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C291',
  },
  btn: {
    color: 'black',
    backgroundColor: '#ffff',
    width: 280,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    borderRadius: 50,
    fontSize: 18,
    marginBottom: 20,
  },
  titleContent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 45,
    marginBottom: 20,
  },
});

export default LoginPageDecider;
