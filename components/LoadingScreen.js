import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, Image, Animated, Dimensions, View } from 'react-native';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Smart Bin</Text>
      </View>
      <Animated.View style={{ ...styles.titleContent, transform: [{ translateY: positionAnim }] }}>
        <Text style={styles.text}>Garbage !!</Text>
        <Text style={{...styles.text, fontSize: 20}}>give it us</Text>
        <Image source={require('../assets/recyclebin.png')} style={{ width: 150, height: 150, marginBottom: 20 }} />
        <Text style={{ ...styles.text, fontSize: 15, marginTop: 20}}>“Segregate Today for Better Tomorrow”</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('LoginDecider')}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#EDF2F3',
  },
  header: {
    width: WIDTH,
    height: '15%',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    color: '#4D8C1C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleContent: {
    width: WIDTH,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: '#66A05F',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
    height: 60,
    width: 180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66A05F',
  },
  btnText: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
  },
});

export default LoadingScreen;
