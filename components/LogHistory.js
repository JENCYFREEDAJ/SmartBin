import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';


function logs(count){
    let kgs=Math.ceil(Math.random()*3)
  
  return count +"\t\t\t\t\t\t\t\t\t\t\t"+count+"/09/2023"+"\t\t\t\t\t\t\t\t\t\t\t"+kgs
};
const PutData=(props)=>{
    return <Text  style={{paddingLeft:20,paddingBottom:20}}>{logs(props.count)}</Text>
};
function LogHistory() {
    const [count,setCount]=useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <View style={styles.container}>
      <View style={{flex:1/8,flexDirection:"row"}}>
        <Text style={{ color: 'white', fontSize: 25,  }}> Smart Bin</Text>
        <Image source={require('../assets/TrashLogo.png')} style={{ width: 32, height: 32 }} />
      </View>
      <View style={{flex:1,flexDirection:"column",alignItems:"flex-end",}}>
        <Text style={{fontSize: 24,color:"white",paddingBottom:20}}>Trash Log</Text>
        
        <ScrollView style={styles.history}>
          
          <View style={{flex:1, flexDirection:"row",}}>
          <Text style={{paddingLeft:20,paddingRight:40,paddingTop:20}}>S.No</Text>
          <Text style={{paddingRight:40,paddingTop:20}}>Date and Time</Text>
          <Text style={{paddingRight:40,paddingTop:20}}>Quantity Dumped</Text>
          
          </View>
          <View style={{flex:15,flexDirection:"column"}}>
            <Text style={{numberOfLines:1}}>___________________________________________________________</Text>
            
            {count.map(data=><PutData count={data}/>)}
            
          </View>
          
              
        
        </ScrollView>
       
        
        </View>
      <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}} >
        <Text style={styles.btn} >Clear logs</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   padding:20,
   
    backgroundColor: '#96C291',
  },
  history:{
    backgroundColor:"white",
    fontSize:20,
    
    height:2000,
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

export default LogHistory
;