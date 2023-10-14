import React from 'react'
import {View,Text,Image, StyleSheet, Dimensions} from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


function Qrcode(){
    return(
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
        <Image style={{width:300,height:300}}source={require('../assets/Qrcode.jpg')}/>
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
    mainContainer:{
        height: HEIGHT/1.8,
        width: WIDTH,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgrey"
    }

});

export default Qrcode;