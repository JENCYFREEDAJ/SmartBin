import React from 'react'
import {View,Text,Image} from 'react-native'


function Qrcode(){
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#96C291"}}>
        <View style={{flex:1/2,flexDirection:'row',padding:24,margin:24,justifyContent:"center"}}>
            <Text style={{fontSize:32,color:'white'}}>Smart Bin</Text>
            <Image style={{width:32,height:32}} source={require('../assets/TrashLogo.png')}/>
        </View>
        <Text style={{fontSize:32,color:'white'}}>Qr code</Text>
        <View style={{justifyContent:"center",alignItems:"center",borderRadius:12,backgroundColor:'white',width:400,height:400}}>
            <Image style={{width:300,height:300}}source={require('../assets/Qrcode.jpg')}/>
        </View>
    </View>
    )
}

export default Qrcode