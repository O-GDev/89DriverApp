import { Image, StyleSheet, Text, View, Button, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width,height}=Dimensions.get('window')
const OnBaord1 = () => {
  const navigation = useNavigation();
  const handleSkip = async () => {
    navigation.navigate('Location')
    await AsyncStorage.setItem('onboarding', JSON.stringify(false))
  }
  return (
  
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center',width:width,height:height}}>

<Image source={require('../../assets/onboard2.png')} style={{}} />
<Text style={{alignSelf:'center',fontWeight:'bold',justifyContent:'center',marginTop:'1.5%',position:'relative',color:'#1b1b1b'}}>Real Time Tracking</Text>
  <Text style={{alignSelf:'center',bottom:'10%',position:'absolute',}} onPress={handleSkip}>Skip</Text>
 
  
    </SafeAreaView>
      
  )
}

export default OnBaord1

const styles = StyleSheet.create({})