import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, Image, Animated } from 'react-native';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
function LoadingScreen({ navigation }) {
  // useEffect(()=>{
  //   signOut(auth)
  // },[auth?.currentUser?.email])
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [positionAnim, setPositionAnim] = useState(new Animated.Value(100));

  useEffect(() => {
    // Start the fade-in and position animation with a delay
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

  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('LoginDecider')}>

      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <Animated.View style={{ ...styles.titleContent, transform: [{ translateY: positionAnim }] }}>
          <Text style={styles.text}>SmartBin</Text>
          <Image source={require('../assets/TrashLogo.png')} style={{ width: 82, height: 82 }} />
          <Text style={{ ...styles.text, fontSize: 10, marginTop: 50 }}>“Segregate Today for Better Tomorrow”</Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C291',
  },
  text: {
    fontSize: 30,
    color: 'white',
    margin: 2,
  },
  titleContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default LoadingScreen;
