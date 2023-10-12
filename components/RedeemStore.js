import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
function Card(props){
    return(
        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
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
function RedeemStore(){
    return(
        <View style={{flex:1,justifyContent:'flex-start',backgroundColor:"#96C291"}}>
        <View style={{marginTop:32,flexDirection:'row'}}>
            <Text style={{fontSize:32,color:'white'}}>Smart Bin</Text>
            <Image style={{width:32,height:32}} source={require('../assets/TrashLogo.png')}/>
        </View>
        <Text style={{flex:1/6,margin:6,color:'white',fontSize:24,alignItems:'flex-end'}}>Redeem Store</Text>
        <Text style={{color:'white',fontSize:24,justifyContent:'flex-start'}}>2500</Text>
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

export default RedeemStore