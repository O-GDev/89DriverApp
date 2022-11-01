import { Button, StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Home from '../Screens/Homepage';

const{width,height} = Dimensions.get('window');
const Tours = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize:width*0.05,marginLeft:'3%',marginTop:10}}>Welcome, Samuel</Text>
      <Text style={{fontWeight:'500',marginLeft:'3%',marginRight:'3%',marginTop:10}}>Thanks for submitting your background check and vehicle information,we are now
      reviewing your documents. Get ready to join our drivers community while getting ready 
      you can now take a tour in the drivers app</Text>
      <View style={{marginTop:height*0.2}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignSelf:'center',backgroundColor:'#2739fe',width:'90%',padding:5,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Take a tour</Text></TouchableOpacity>
    
        <Text style={{textAlign:'center',fontWeight:'500',color:'#2739fe' }}>Thanks send me a copy of my documents via email</Text>
      </View>
    </View>
  )
}

export default Tours

const styles = StyleSheet.create({})