import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


function Qrcode() {
  return (
    // <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#96C291"}}>
    //     <Text style={{fontSize:32,color:'white'}}>Qr code</Text>
    //     <View style={{justifyContent:"center",alignItems:"center",borderRadius:12,backgroundColor:'white',width:400,height:400}}>
    //         <Image style={{width:300,height:300}}source={require('../assets/Qrcode.jpg')}/>
    //     </View>
    // </View>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Scan QR Code</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.yourQR}>
          <Image style={{ width: 300, height: 300 }} source={require('../assets/Qrcode.jpg')} />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#EDF2F3',
  },
  headerContainer: {
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
    height: "85%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  yourQR:{
    height:"75%",
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgrey",
    marginBottom: 15,
  },
  btn: {
    padding: 15,
    margin: 5,
    width: "75%",
    borderWidth: 1,
    backgroundColor: "#4D8C1C",
    borderColor: "transparent",
    borderRadius: 25,
    alignItems: "center"
  },
  btnTxt: {
    color: "white"
  },

});

export default Qrcode;