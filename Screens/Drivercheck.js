import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity,ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import BackgroundCheck from '../components/Check/BackgroundCheck'


const Drivercheck = ({ navigation }) => {
  return (
  <ScrollView>
   <KeyboardAvoidingView>
   <BackgroundCheck  />
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Vehicle Info')} style={{alignSelf:'center',backgroundColor:'blue',width:'90%',padding:5,borderRadius:5,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>NEXT</Text></TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
  </ScrollView>
  )
}

export default Drivercheck

const styles = StyleSheet.create({})