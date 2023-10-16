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
        <View style={styles.mainContainer}>
            <View style={styles.balanceCard}>
                <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/dollar.png')} style={{width: 50, height: 50}}/>
                </View>
                <View style={{width: '70%', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Earned 650 Coins</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Image source={require('../assets/gift-card.png')} style={{height: 150, width: 150,}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/dollar.png')} style={{width: 25, height: 25}}/>
                            <Text style={{marginLeft:10, fontSize: 15, fontWeight:"bold", color: '#ffff'}}>250</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.redeemBtn}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/gift-card.png')} style={{height: 150, width: 150,}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/dollar.png')} style={{width: 25, height: 25}}/>
                            <Text style={{marginLeft:10, fontSize: 15, fontWeight:"bold", color: '#ffff'}}>500</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.redeemBtn}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/gift-card.png')} style={{height: 150, width: 150,}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/dollar.png')} style={{width: 25, height: 25}}/>
                            <Text style={{marginLeft:10, fontSize: 15, fontWeight:"bold", color: '#ffff'}}>750</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.redeemBtn}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/gift-card.png')} style={{height: 150, width: 150,}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/dollar.png')} style={{width: 25, height: 25}}/>
                            <Text style={{marginLeft:10, fontSize: 15, fontWeight:"bold", color: '#ffff'}}>1000</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.redeemBtn}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        {/* <ScrollView>
            <Card num={1} price={500}/>
            <Card num={2} price={400}/>
            <Card num={3} price={1000}/>
            <Card num={4} price={200}/>
            <Card num={5} price={250}/>

        </ScrollView> */}


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
       mainContainer: {
        height: '85%',
        width: WIDTH,
       },
       cardContainer: {
        width: WIDTH,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 60,
       },
       card: {
        alignItems: 'center',
        backgroundColor: '#8AB877',
        borderColor: '#8AB877',
        borderRadius: 20,
        borderWidth: 0.4,
        height: HEIGHT / 3,
        width: WIDTH / 2.3,
        elevation: 2,
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
       redeemBtn: {
        marginTop: 5,
        fontSize: 20, 
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        height: 35,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#ffff'
    },
       headerText: {
         fontSize: 30,
         marginLeft: 20,
         fontWeight: 'bold',
         color: '#4D8C1C',
       },
})

export default RedeemStore