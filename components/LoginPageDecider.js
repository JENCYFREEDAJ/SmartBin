import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

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
        <Text style={{ color: 'white', fontSize: 25 }}>Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32 }} />
      </Animated.View>
      <TouchableOpacity>
        <Text style={styles.btn} onPress={() => navigateToLogin('admin')}>Admin Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn} onPress={() => navigateToLogin('user')}>User Login</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default LoginPageDecider;
