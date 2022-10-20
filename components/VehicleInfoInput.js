import { SafeAreaView, StyleSheet, Text, TextInput, View,Dimensions,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import {apiUrl} from '../config'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


const {width,height} = Dimensions.get('window');
const VehicleInfoInput = () => {
  const [make,setMake] = useState('')
  const [model,setModel] = useState('')
  const [year,setYear] = useState('')
  const [color,setColor] = useState('')

  const navigation = useNavigation();
  const handleVehicleInfo = async () => {
    const vehicleInfo = {
      make,
      model,
      year,
      color
    }

    const token = await AsyncStorage.getItem("user");
    const authToken = JSON.parse(token)
    let config = {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    };
    if (!make.trim() || !model.trim() || !year.trim() || !color.trim()){
      Toast.show('All fields are required! ')
    }else {
      const vehicleResponse = await  axios.post(`${apiUrl}/api/vehiclecheck/`, vehicleInfo, config)
      if(vehicleResponse.data.status === true){
        Toast.show('Vehicle Info Added Successfully')
        navigation.navigate('Tour')

      }

    }
   
    
  };





  return (
 
    <SafeAreaView style={{width:width,height:height}}  >
     <Image source={require('../assets/vehicle.png')} style={{height:height*0.3,width:width*0.98}}/>
      <View style={{paddingLeft:20}}>
      <Text style={{paddingBottom:15,paddingTop:15,fontWeight:'bold',fontSize:width*0.06,}}>Enter your vehicle Infomation</Text>
      <View style={{marginBottom:'5%'}}>
        <Text style={{paddingBottom:5,fontWeight:'500',fontSize:width*0.04}}>Make</Text>
        <TextInput
        placeholder='AM General'
        style={{padding:6,backgroundColor:'#D9D9D9', paddingLeft:7,width:'95%',color:'white',fontSize:width*0.04,paddingTop:height*0.009,marginBottom:height*0.009}}
        onChangeText={(value)=>setMake(value)}
        />
        </View>
        <View style={{marginBottom:'5%'}}>
        <Text style={{paddingBottom:5,fontWeight:'500',fontSize:width*0.04}}>Model</Text>
        <TextInput
        placeholder='MV-1'
        style={{padding:6,backgroundColor:'#D9D9D9', paddingLeft:7,width:'95%',color:'white',fontSize:width*0.04,paddingTop:height*0.009,marginBottom:height*0.009}}
        onChangeText={(value)=>setModel(value)}
        />
        </View>
        <View style={{marginBottom:'5%'}}>
        <Text style={{paddingBottom:5,fontWeight:'500',fontSize:width*0.04}}>Year</Text>
        <TextInput
        placeholder='2020'
        style={{padding:6,backgroundColor:'#D9D9D9', paddingLeft:7,width:'95%',color:'white',fontSize:width*0.04,paddingTop:height*0.009,marginBottom:height*0.009}}
        onChangeText={(value)=>setYear(value)}
          keyboardType="number-pad"
        />
        </View>
        <View style={{marginBottom:'5%'}}>
        <Text style={{paddingBottom:5,fontWeight:'500',fontSize:width*0.04}}>Vehicle color</Text>
        <TextInput
        placeholder='Silver'
        style={{padding:6,backgroundColor:'#D9D9D9', paddingLeft:7,width:'95%',color:'white',fontSize:width*0.04,paddingTop:height*0.009,marginBottom:height*0.009}}
        onChangeText={(value)=>setColor(value)}
        />
        </View>
      </View>
      <View style={{}}>
     <TouchableOpacity onPress={handleVehicleInfo} style={{alignSelf:'center',backgroundColor:'#111AE5',width:width-35,padding:5,height:45,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:23}}>CONTINUE</Text></TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default VehicleInfoInput

const styles = StyleSheet.create({})