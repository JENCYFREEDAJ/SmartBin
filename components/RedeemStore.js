import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView, StyleSheet, Dimensions} from 'react-native'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Card(props){
    return(
        <View style={cardstyles.container}>
            <View style={{ width: 149, height: 154, backgroundColor: "#96C293", borderColor: 'white', borderWidth: 4,borderRadius:12,margin:5,justifyContent:'center',alignItems:'center' }}>
                <Text>Product-{props.num}</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={{fontSize:24,color:'white'}}>Product {props.num}</Text>
                <Text style={{fontSize:20,color:'white',alignItems:"flex-start"}}>Points:{props.price}</Text>
                <TouchableOpacity style={{margin:24,backgroundColor:'#13714C',borderRadius:50,padding:12}}>
                    <Text style={{fontSize:20,color:'white',justifyContent:"flex-start"}}>Redeem now</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const cardstyles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: '#96C293',
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
})

function RedeemStore(){
    return(
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Redeem Store</Text>
        </View>
        {/* <Text style={{color:'white',fontSize:24,justifyContent:'flex-start'}}>2500</Text> */}
        <ScrollView>
            <Card num={1} price={500}/>
            <Card num={2} price={400}/>
            <Card num={3} price={1000}/>
            <Card num={4} price={200}/>
            <Card num={5} price={250}/>

        </ScrollView>


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
         height: "15%",
         width: WIDTH,
         justifyContent: 'center',
       },
       headerText: {
         fontSize: 30,
         marginLeft: 20,
         fontWeight: 'bold',
         color: '#4D8C1C',
       },
})

export default RedeemStore