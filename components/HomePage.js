import React, { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { auth } from '../config/firebase';
import { db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import UserDetails from './UserDetails';
import CircularProgress from 'react-native-circular-progress-indicator';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;



function HomePage({ navigation }) {
  const [userDetails, setUserDetails] = useState({
    name: 'gokulashik',
    address: '123',
    days: '50',
    points: 2500,
  });
  const [showUser, setShowUser] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const dataDoc = doc(db, 'Users', auth?.currentUser?.email);
  //       const data = await getDoc(dataDoc);
  //       setUserDetails(() => {
  //         return { ...data.data() };
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [auth?.currentUser?.email]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeNote}>Hello {userDetails.name}</Text>
        <ScrollView>
          <View style={styles.balanceCard}>
            <View style={{width: '70%', justifyContent: 'center', alignItems: 'center', padding: 5}}>
              <Text style={{fontWeight: '500', fontSize: 15}}>Commendable Effort in consistantly handling trash disposal</Text>
            </View>
            <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress 
                radius={30}
                value={55}
                title={'Days'}
                titleColor={'black'}
                duration={2000}
                activeStrokeColor={'#7825B7'}
                progressValueColor={'#7825B7'}
                titleStyle={{fontWeight: 'bold', fontSize: 10,}}
                inActiveStrokeColor={'#7825B7'}
                inActiveStrokeOpacity={0.2}
              />
            </View>
          </View>
          <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 10, fontWeight: '600'}}>Today Disposed Waste Percentage</Text>
          <View style={styles.cardSection}>
            <View style={styles.card}>
              <CircularProgress 
                radius={50}
                value={60}
                textColor= 'black'
                fontSize={12}
                valueSuffix={'%'}
                inActiveStrokeColor={'#4D8C1C'}
                inActiveStrokeOpacity={0.2}
              />
              <Text style={{fontSize: 20, marginTop: 5, fontWeight: '600'}}>Organic</Text>
            </View>
            <View style={styles.card}>
              <CircularProgress 
                radius={50}
                value={30}
                textColor= 'black'
                fontSize={12}
                valueSuffix={'%'}
                inActiveStrokeColor={'#4D8C1C'}
                inActiveStrokeOpacity={0.2}
              />
              <Text style={{fontSize: 20, marginTop: 5, fontWeight: '600'}}>Plastic</Text>
            </View>
            <View style={styles.card}>
              <CircularProgress 
                radius={50}
                value={15}
                textColor= 'black'
                fontSize={12}
                valueSuffix={'%'}
                inActiveStrokeColor={'#4D8C1C'}
                inActiveStrokeOpacity={0.2}
              />
              <Text style={{fontSize: 20, marginTop: 5, fontWeight: '600'}}>Glass</Text>
            </View>
            <View style={styles.card}>
              <CircularProgress 
                radius={50}
                value={5}
                textColor= 'black'
                fontSize={12}
                valueSuffix={'%'}
                inActiveStrokeColor={'#4D8C1C'}
                inActiveStrokeOpacity={0.2}
              />
              <Text style={{fontSize: 20, marginTop: 5, fontWeight: '600'}}>Other</Text>
            </View>
          </View>
          <View style={{...styles.balanceCard, marginBottom: 60}}>
            <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets/dollar.png')} style={{width: 50, height: 50}}/>
            </View>
            <View style={{width: '70%', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Earned 650 Coins</Text>
            </View>
          </View>
          </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#EDF2F3',
  },
  header: {
    height: '15%',
    width: WIDTH,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#4D8C1C',
  },
  mainContainer: {
    height: '85%',
    width: WIDTH,
  },
  welcomeNote: {
    alignSelf: 'center',
    fontSize: 25, 
    fontWeight: 'bold'
  },
  cardSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    height: HEIGHT / 4,
    width: WIDTH / 2.3,
    margin: 10,
  },
  balanceCard: {
    height: 70, 
    width: WIDTH/1.1, 
    shadowRadius: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginTop:10,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headBar: {
    padding: 5,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  // card: {
  //   backgroundColor: 'white',
  //   color: 'black',
  //   flexDirection: 'row',
  //   margin: 5,
  //   marginTop: 24,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 10,
  //   borderRadius: 30,
  //   justifyContent: 'space-between',
  // },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  cardText: {
    fontSize: 15,
  },
  userDetailsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
