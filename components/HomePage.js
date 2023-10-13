import React, { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { auth } from '../config/firebase';
import { db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import UserDetails from './UserDetails';

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
      <SafeAreaView style={styles.headBar}>
        <Text style={{ flex: 1, ...styles.text }}>Hi {userDetails.name}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={styles.text}>SmartBin</Text>
          <Image
            source={require('../assets/TrashLogo.png')}
            style={{ width: 26, height: 26 }}
          />
        </View>
      </SafeAreaView>

      <View style={styles.cardContainer}>
        {/* First Card */}
        <View style={{ ...styles.card, width: 230, height: 129 }}>
          <Text style={styles.cardText}>Good job for{"\n"}taking out the{'\n'}trash for {userDetails.days} days</Text>
          <Image style={{ width: 75, height: 75 }} source={require('../assets/circle1.png')} />
        </View>

        {/* Second Card */}
        <TouchableOpacity onPress={() => navigation.navigate('Quantity')}>
          <View style={{ ...styles.card, width: 157, height: 129 }}>
            <Image style={{ width: 53, height: 53 }} source={require('../assets/trash1.png')} />
            <Text style={styles.cardText}>Quantity{'\n'}Disposed</Text>
          </View>
        </TouchableOpacity>

        {/* Third card */}
        <TouchableOpacity onPress={() => navigation.navigate('Qrcode')}>
          <View style={{ ...styles.card, width: 157, height: 129, flexDirection: 'column' }}>
            <Image style={{ width: 53, height: 53 }} source={require('../assets/qr-code-icon.png')} />
            <Text style={{ fontSize: 24 }}>Qr Code</Text>
          </View>
        </TouchableOpacity>

        {/* Fourth card */}
        <TouchableOpacity onPress={() => navigation.navigate('RedeemStore')}>
          <View style={{ ...styles.card, width: 230, height: 129 }}>
            <Image style={{ width: 75, height: 75 }} source={require('../assets/package-delivery-icon.png')} />
            <Text style={{ fontSize: 24 }}>Redeem{"\n"}Store</Text>
          </View>
        </TouchableOpacity>

        {/* Fifth card */}
        <TouchableOpacity onPress={() => navigation.navigate("LogHistory")}>
          <View style={{ ...styles.card, width: 230, height: 129 }}>
            <Image style={{ width: 75, height: 75 }} source={require('../assets/clock-history.png')} />
            <Text style={{ fontSize: 24 }}>Log{"\n"}History</Text>
          </View>
        </TouchableOpacity>

        {/* Sixth card */}
        <View style={{ ...styles.card, width: 157, height: 129, flexDirection: 'column' }}>
          <Image style={{ width: 53, height: 53 }} source={require('../assets/coin.png')} />
          <Text>current coins</Text>
          <View>
            <Text style={{ fontSize: 24 }}>{userDetails.points}</Text>
          </View>
        </View>
      </View>

      {/* User Details */}
      {showUser && (
        <View style={styles.userDetailsContainer}>
          <UserDetails setShowUser={setShowUser} />
        </View>
      )}

      {/* <SafeAreaView style={styles.navBar}>
        <TouchableOpacity onPress={() => setShowUser(old => !old)}>
          <Image style={{ width: 41, height: 41 }} source={require('../assets/person-fill.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Image  style={{ width: 41, height: 41 }} source={require('../assets/bag-heart.png')} />

        </TouchableOpacity>
        <Image style={{ width: 41, height: 41 }} source={require('../assets/customer-service-icon.png')} />
        <Image style={{ width: 41, height: 41 }} source={require('../assets/chat-dots.png')} />
      </SafeAreaView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#96C291',
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
  card: {
    backgroundColor: 'white',
    color: 'black',
    flexDirection: 'row',
    margin: 5,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 59,
    padding: 5,
    marginTop: 5,
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
