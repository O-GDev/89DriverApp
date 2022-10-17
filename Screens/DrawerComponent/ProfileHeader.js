import { StyleSheet, Text, View,TouchableOpacity,Dimensions, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const{width,height} =Dimensions.get('window')
const ProfileHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={{width:width*0.8,justifyContent:'center',alignContent:'center',}}>
  
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View><Text></Text></View>
    <View style={{padding:height*0.008,}}>
    <Text style={{fontSize:width*0.05,fontWeight:'600'}}>Profile</Text>
    </View>
     
     <View style={{justifyContent:'center',alignItems:'center',paddingBottom:height*0.007,paddingTop:height*0.007,paddingRight:height*0.007}}>
     <TouchableOpacity onPress={() => navigation.navigate('Profedit')}><FontAwesome5 name='edit' color='black' size={20}/></TouchableOpacity>
     </View>  
    </View>
  </View>
   
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})