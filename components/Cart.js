import { View, Text,  StyleSheet, TouchableOpacity, Image, Dimensions, } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Cart({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Redeem Cart</Text>
      </View>
      <View style={{flex:1/2,flexDirection:"column",alignItems:"center",justifyContent:"center",}}>
       <View style={[styles.cart,{flex:1,alignItems:"center",justifyContent:"center"}]}>
       <Text style={{fontSize:20}}>Your cart is empty</Text>
       
       <TouchableOpacity onPress={()=>navigation.navigate('RedeemStore')}>
          <Image style={{width:100,height:100,paddingTop:10}} source={require("../assets/AddItems.png")}/>
       </TouchableOpacity>
        <Text style={{fontSize:16,paddingTop:10}}>Add Items Here!</Text>

       </View>  
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
  cart:{
    backgroundColor:"white",
    fontSize:20,
    flex:1,
    alignItems:"center",
    width:373,
    borderRadius:20,
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

export default Cart;