import { Button, StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Otp from '../../components/Otp'


const {width,height}=Dimensions.get('window')
const SigninOTP = ({ navigation }) => {
  return (
    <View>
     <Otp />      
       
    </View>
  )
}

export default SigninOTP

const styles = StyleSheet.create({})