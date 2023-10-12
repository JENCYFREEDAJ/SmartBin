import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth,db } from '../config/firebase';
import { signOut } from 'firebase/auth';
import {doc,getDoc} from "firebase/firestore"
const UserDetails = (props) => {
  // useEffect(()=>{
  //   const getData=async()=>{
  //     try{
  //       const dataDoc=doc(db,"Users",auth?.currentUser?.email)
  //       const data=await getDoc(dataDoc)
  //       console.log(data.data())
  //       const actualData=data.data()
  //       setName(actualData.name)
        
  //     }catch(error){
  //       console.error("IN userDetails"+error.message)
  //     }
  //   }
  //   getData()
  // },[auth?.currentUser?.email])
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [name, setName] = useState('gokulashik');
  const [address, setAddress] = useState('123 Main St');
  const [days, setDays] = useState('50');
  const [points, setPoints] = useState('2500');

  const handleEdit = (field) => {
    switch (field) {
      case 'name':
        setIsEditingName(true);
        break;
      case 'address':
        setIsEditingAddress(true);
        break;
      default:
        break;
    }
  };

  const handleSave = (field) => {
    switch (field) {
      case 'name':
        setIsEditingName(false);
        // Here, you can update the name in your data storage (e.g., database) if needed.
        break;
      case 'address':
        setIsEditingAddress(false);
        // Handle saving address if necessary.
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{ fontSize: 24 }}>Account Details</Text>
            <FontAwesome onPress={() => props.setShowUser(old => !old)} style={{margin:10}} name="close" size={24} color="black" />
        </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        {renderField('Name:', name, 'edit', 'name', handleEdit, handleSave, isEditingName)}
        {renderField('Address:', address, 'edit', 'address', handleEdit, handleSave, isEditingAddress)}
        {/* Points and Days without edit button */}
        {renderField('Days:', days, 'no-edit', 'days', handleEdit, handleSave, false)}
        {renderField('Points:', points, 'no-edit', 'points', handleEdit, handleSave, false)}
      </View>
        <TouchableOpacity onPress={async()=>await signOut(auth)} style={{justifyContent:"center",alignItems:'center',backgroundColor:"#96C291",width:100,height:50,borderRadius:50}}>
            <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderField = (label, value, editIconName, field, handleEdit, handleSave, isEditing) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {isEditing ? (
        <View style={styles.editField}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => {
              switch (field) {
                case 'name':
                  setName(text);
                  break;
                case 'address':
                  setAddress(text);
                  break;
                default:
                  break;
              }
            }}
          />
          <TouchableOpacity onPress={() => handleSave(field)}>
            <FontAwesome name="check" size={24} color="green" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
          {!isEditing && editIconName !== 'no-edit' && (
            <TouchableOpacity onPress={() => handleEdit(field)}>
              <FontAwesome name={editIconName} size={24} color="blue" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    width: 281,
    height: 581,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserDetails;
